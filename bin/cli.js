#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// --- Colors & Logging ---

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
  magenta: '\x1b[35m',
};

const log = {
  info: (msg) => console.log(`${COLORS.cyan}ℹ${COLORS.reset} ${msg}`),
  success: (msg) => console.log(`${COLORS.green}✓${COLORS.reset} ${msg}`),
  warn: (msg) => console.log(`${COLORS.yellow}⚠${COLORS.reset} ${msg}`),
  error: (msg) => console.log(`${COLORS.red}✗${COLORS.reset} ${msg}`),
  step: (msg) => console.log(`${COLORS.dim}  →${COLORS.reset} ${msg}`),
  tool: (name) => console.log(`${COLORS.magenta}  ◆${COLORS.reset} ${name}`),
};

// --- Constants ---

const BANNER = `
${COLORS.green}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ${COLORS.bright}LUXXERA SKILLS${COLORS.reset}${COLORS.green}                                          ║
║   Multi-tool AI skills for premium development            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝${COLORS.reset}
`;

// Primary install location (source of truth)
const PRIMARY_PATH = '.agents/skills';

// Tool configuration - symlinks or generated files pointing to PRIMARY_PATH
const TOOLS = {
  claude: {
    name: 'Claude Code',
    path: '.claude/skills',
    format: 'symlink',     // Symlink to PRIMARY_PATH
    description: 'Symlink to .agents/skills/',
  },
  cursor: {
    name: 'Cursor',
    path: '.cursor/rules',
    format: 'symlink',     // Symlink to PRIMARY_PATH
    description: 'Symlink to .agents/skills/',
  },
  windsurf: {
    name: 'Windsurf',
    path: '.windsurf/rules',
    format: 'single',
    description: 'Consolidated rules file',
  },
  copilot: {
    name: 'GitHub Copilot',
    path: '.github',
    format: 'instructions', // Appends to copilot-instructions.md
    description: 'Appended to copilot-instructions.md',
  },
};

const DEFAULT_TOOLS = ['claude', 'cursor', 'windsurf']; // Tools enabled by default

const HELP = `
${COLORS.bright}Usage:${COLORS.reset}
  npx @francesco-hayes/luxxera-skills <command> [skill-name...] [options]

${COLORS.bright}Commands:${COLORS.reset}
  list                            List all available skills
  init [skill-name...]            Install specific skill(s)
  init --all                      Install all available skills
  update [skill-name...]          Update specific skill(s)
  update --all                    Update all installed skills
  --help, -h                      Show this help message
  --version, -v                   Show version

${COLORS.bright}Options:${COLORS.reset}
  --tools <list>                  Comma-separated list of tools to install for
                                  ${COLORS.dim}(default: claude,cursor,windsurf)${COLORS.reset}
                                  ${COLORS.dim}Available: claude, cursor, windsurf, copilot${COLORS.reset}
  --tools all                     Install for all supported tools
  --only <tool>                   Install for only one specific tool

${COLORS.bright}Examples:${COLORS.reset}
  ${COLORS.dim}# Install for all default tools (Claude, Cursor, Windsurf)${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init luxxera-ui

  ${COLORS.dim}# Install only for Cursor${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init luxxera-ui --only cursor

  ${COLORS.dim}# Install for specific tools${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init luxxera-ui --tools claude,copilot

  ${COLORS.dim}# Install for all supported tools${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init luxxera-ui --tools all

${COLORS.bright}Supported Tools:${COLORS.reset}
  ${COLORS.cyan}claude${COLORS.reset}     → .claude/skills/{skill}/     (symlink to .agents/)
  ${COLORS.cyan}cursor${COLORS.reset}     → .cursor/rules/{skill}/      (symlink to .agents/)
  ${COLORS.cyan}windsurf${COLORS.reset}   → .windsurf/rules/{skill}.md  (consolidated file)
  ${COLORS.cyan}copilot${COLORS.reset}    → .github/copilot-instructions.md (appended)

${COLORS.bright}After Installation:${COLORS.reset}
  Skills are installed to ${COLORS.cyan}.agents/skills/{skill}/${COLORS.reset} (primary location).
  Tool-specific paths are symlinks or generated files pointing to the source.
  You maintain ONE source, and this CLI distributes it to all your AI tools.
`;

// --- Skill Discovery ---

function getSkillsDir() {
  return path.join(__dirname, '..', 'skills');
}

function discoverSkills() {
  const skillsDir = getSkillsDir();

  if (!fs.existsSync(skillsDir)) {
    log.error('Skills directory not found. Package may be corrupted.');
    process.exit(1);
  }

  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  const skills = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const manifestPath = path.join(skillsDir, entry.name, 'skill.json');
    if (!fs.existsSync(manifestPath)) continue;

    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      skills.push({
        id: entry.name,
        dir: path.join(skillsDir, entry.name),
        templatesDir: path.join(skillsDir, entry.name, 'templates'),
        ...manifest,
      });
    } catch (err) {
      log.warn(`Skipping skill "${entry.name}": invalid skill.json`);
    }
  }

  return skills;
}

function getSkillById(skills, id) {
  return skills.find((s) => s.id === id) || null;
}

// --- Utility Functions ---

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function countFiles(dir) {
  let count = 0;
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      count += countFiles(fullPath);
    } else if (item.endsWith('.md')) {
      count++;
    }
  }

  return count;
}

/**
 * Consolidate all markdown files into a single file
 * Used for Cursor, Windsurf, and other single-file formats
 * Reads from the installed primary location if available, otherwise from templates
 */
function consolidateSkillToSingleFile(skill, cwd) {
  // Prefer reading from installed primary location (allows local edits)
  const primaryDir = path.join(cwd, PRIMARY_PATH, skill.id);
  const sourceDir = fs.existsSync(primaryDir) ? primaryDir : skill.templatesDir;

  const parts = [];

  // Read SKILL.md first (strip YAML frontmatter for consolidated version)
  const skillMdPath = path.join(sourceDir, 'SKILL.md');
  if (fs.existsSync(skillMdPath)) {
    let content = fs.readFileSync(skillMdPath, 'utf8');
    // Remove YAML frontmatter
    content = content.replace(/^---[\s\S]*?---\n*/, '');
    parts.push(content.trim());
  }

  // Recursively read all reference files
  const refsDir = path.join(sourceDir, 'references');
  if (fs.existsSync(refsDir)) {
    const refFiles = collectMarkdownFiles(refsDir);

    for (const file of refFiles) {
      const relativePath = path.relative(refsDir, file);
      const content = fs.readFileSync(file, 'utf8');

      parts.push(`\n---\n\n<!-- Reference: ${relativePath} -->\n\n${content.trim()}`);
    }
  }

  // Add header comment
  const header = `<!--
  ${skill.displayName || skill.id} - Consolidated Rules
  Generated by @francesco-hayes/luxxera-skills
  Source: ${PRIMARY_PATH}/${skill.id}/

  This is a consolidated version for AI tools that prefer single files.
  For the full structured version, use Claude Code with .claude/skills/
-->\n\n`;

  return header + parts.join('\n\n');
}

function collectMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  // Sort to ensure consistent order: foundations -> components -> patterns
  const sortOrder = { foundations: 1, components: 2, patterns: 3 };
  items.sort((a, b) => {
    const orderA = sortOrder[a.name] || 99;
    const orderB = sortOrder[b.name] || 99;
    return orderA - orderB || a.name.localeCompare(b.name);
  });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

// --- Primary Installation (to .agents/skills/) ---

function installToPrimary(skill, cwd) {
  const primaryDir = path.join(cwd, PRIMARY_PATH, skill.id);

  // Check if already installed
  if (fs.existsSync(path.join(primaryDir, 'SKILL.md'))) {
    return { success: false, reason: 'already_installed', path: primaryDir };
  }

  // Create directory and copy full structure
  fs.mkdirSync(primaryDir, { recursive: true });

  const items = fs.readdirSync(skill.templatesDir);
  for (const item of items) {
    copyRecursive(
      path.join(skill.templatesDir, item),
      path.join(primaryDir, item)
    );
  }

  return { success: true, path: `${PRIMARY_PATH}/${skill.id}/` };
}

// --- Tool-Specific Installation ---

function installSymlink(skill, cwd, toolKey) {
  const toolConfig = TOOLS[toolKey];
  const toolDir = path.join(cwd, toolConfig.path);
  const symlinkPath = path.join(toolDir, skill.id);
  const primaryDir = path.join(cwd, PRIMARY_PATH, skill.id);

  // Check if primary exists
  if (!fs.existsSync(primaryDir)) {
    return { success: false, reason: 'primary_not_installed' };
  }

  // Check if symlink already exists
  try {
    const lstat = fs.lstatSync(symlinkPath);
    if (lstat.isSymbolicLink() || lstat.isDirectory()) {
      return { success: false, reason: 'already_installed' };
    }
  } catch {
    // Path doesn't exist, continue
  }

  // Create tool directory if needed
  fs.mkdirSync(toolDir, { recursive: true });

  // Create relative symlink
  const relativePath = path.relative(toolDir, primaryDir);
  try {
    fs.symlinkSync(relativePath, symlinkPath, 'dir');
    return { success: true, path: `${toolConfig.path}/${skill.id}/ → ${PRIMARY_PATH}/${skill.id}/` };
  } catch (err) {
    return { success: false, reason: `symlink_failed: ${err.message}` };
  }
}

function installForSingleFile(skill, cwd, toolKey) {
  const toolConfig = TOOLS[toolKey];
  const targetDir = path.join(cwd, toolConfig.path);
  const targetFile = path.join(targetDir, `${skill.id}.md`);

  // Check if already installed
  if (fs.existsSync(targetFile)) {
    return { success: false, reason: 'already_installed' };
  }

  // Create directory
  fs.mkdirSync(targetDir, { recursive: true });

  // Generate consolidated content from primary location
  const content = consolidateSkillToSingleFile(skill, cwd);
  fs.writeFileSync(targetFile, content, 'utf8');

  return { success: true, path: `${toolConfig.path}/${skill.id}.md` };
}

function installForCopilot(skill, cwd) {
  const toolConfig = TOOLS.copilot;
  const targetDir = path.join(cwd, toolConfig.path);
  const targetFile = path.join(targetDir, 'copilot-instructions.md');

  // Create directory
  fs.mkdirSync(targetDir, { recursive: true });

  // Generate consolidated content with Copilot-specific wrapper
  const content = consolidateSkillToSingleFile(skill, cwd);
  const wrappedContent = `\n\n<!-- BEGIN: ${skill.id} skill -->\n${content}\n<!-- END: ${skill.id} skill -->\n`;

  // Check if already in file
  if (fs.existsSync(targetFile)) {
    const existing = fs.readFileSync(targetFile, 'utf8');
    if (existing.includes(`<!-- BEGIN: ${skill.id} skill -->`)) {
      return { success: false, reason: 'already_installed' };
    }
    // Append to existing
    fs.appendFileSync(targetFile, wrappedContent, 'utf8');
  } else {
    // Create new file with header
    const header = `# GitHub Copilot Instructions\n\nThis file contains instructions for GitHub Copilot.\n`;
    fs.writeFileSync(targetFile, header + wrappedContent, 'utf8');
  }

  return { success: true, path: `${toolConfig.path}/copilot-instructions.md` };
}

function installSkillForTool(skill, cwd, toolKey) {
  const toolConfig = TOOLS[toolKey];

  switch (toolConfig.format) {
    case 'symlink':
      return installSymlink(skill, cwd, toolKey);
    case 'single':
      return installForSingleFile(skill, cwd, toolKey);
    case 'instructions':
      return installForCopilot(skill, cwd);
    default:
      return { success: false, reason: 'unknown_format' };
  }
}

// --- Update Functions ---

function updatePrimary(skill, cwd) {
  const primaryDir = path.join(cwd, PRIMARY_PATH, skill.id);

  if (!fs.existsSync(path.join(primaryDir, 'SKILL.md'))) {
    return { success: false, reason: 'not_installed' };
  }

  // Backup existing
  const backupDir = path.join(primaryDir, `.backup-${Date.now()}`);
  fs.mkdirSync(backupDir, { recursive: true });

  const existingItems = fs.readdirSync(primaryDir);
  for (const item of existingItems) {
    if (item.startsWith('.backup-')) continue;
    copyRecursive(path.join(primaryDir, item), path.join(backupDir, item));
  }

  // Copy new files
  const items = fs.readdirSync(skill.templatesDir);
  for (const item of items) {
    copyRecursive(
      path.join(skill.templatesDir, item),
      path.join(primaryDir, item)
    );
  }

  return { success: true, path: `${PRIMARY_PATH}/${skill.id}/` };
}

function updateSymlink(skill, cwd, toolKey) {
  const toolConfig = TOOLS[toolKey];
  const toolDir = path.join(cwd, toolConfig.path);
  const symlinkPath = path.join(toolDir, skill.id);
  const primaryDir = path.join(cwd, PRIMARY_PATH, skill.id);

  // Check if primary exists
  if (!fs.existsSync(primaryDir)) {
    return { success: false, reason: 'primary_not_installed' };
  }

  // Check if symlink exists and is valid
  try {
    const lstat = fs.lstatSync(symlinkPath);
    if (lstat.isSymbolicLink()) {
      // Symlink exists, verify it points to the right place
      const target = fs.readlinkSync(symlinkPath);
      const expectedTarget = path.relative(toolDir, primaryDir);
      if (target === expectedTarget) {
        return { success: true, path: `${toolConfig.path}/${skill.id}/ (symlink valid)` };
      }
      // Wrong target, recreate
      fs.unlinkSync(symlinkPath);
    } else if (lstat.isDirectory()) {
      // It's a real directory, not a symlink - skip
      return { success: true, path: `${toolConfig.path}/${skill.id}/ (directory exists)` };
    }
  } catch {
    // Doesn't exist, create it
  }

  // Create tool directory if needed
  fs.mkdirSync(toolDir, { recursive: true });

  // Create relative symlink
  const relativePath = path.relative(toolDir, primaryDir);
  try {
    fs.symlinkSync(relativePath, symlinkPath, 'dir');
    return { success: true, path: `${toolConfig.path}/${skill.id}/ → ${PRIMARY_PATH}/${skill.id}/` };
  } catch (err) {
    return { success: false, reason: `symlink_failed: ${err.message}` };
  }
}

function updateForSingleFile(skill, cwd, toolKey) {
  const toolConfig = TOOLS[toolKey];
  const targetFile = path.join(cwd, toolConfig.path, `${skill.id}.md`);

  if (!fs.existsSync(targetFile)) {
    return { success: false, reason: 'not_installed' };
  }

  // Backup existing
  const backupFile = targetFile.replace('.md', `.backup-${Date.now()}.md`);
  fs.copyFileSync(targetFile, backupFile);

  // Regenerate from primary location (reflects any local edits)
  const content = consolidateSkillToSingleFile(skill, cwd);
  fs.writeFileSync(targetFile, content, 'utf8');

  return { success: true, path: `${toolConfig.path}/${skill.id}.md` };
}

function updateForCopilot(skill, cwd) {
  const toolConfig = TOOLS.copilot;
  const targetFile = path.join(cwd, toolConfig.path, 'copilot-instructions.md');

  if (!fs.existsSync(targetFile)) {
    return { success: false, reason: 'not_installed' };
  }

  let existing = fs.readFileSync(targetFile, 'utf8');

  // Check if skill exists in file
  const beginMarker = `<!-- BEGIN: ${skill.id} skill -->`;
  const endMarker = `<!-- END: ${skill.id} skill -->`;

  if (!existing.includes(beginMarker)) {
    return { success: false, reason: 'not_installed' };
  }

  // Backup
  const backupFile = targetFile.replace('.md', `.backup-${Date.now()}.md`);
  fs.copyFileSync(targetFile, backupFile);

  // Replace the skill section (regenerated from primary location)
  const content = consolidateSkillToSingleFile(skill, cwd);
  const newSection = `${beginMarker}\n${content}\n${endMarker}`;

  const regex = new RegExp(`${beginMarker}[\\s\\S]*?${endMarker}`, 'g');
  existing = existing.replace(regex, newSection);

  fs.writeFileSync(targetFile, existing, 'utf8');

  return { success: true, path: `${toolConfig.path}/copilot-instructions.md` };
}

function updateSkillForTool(skill, cwd, toolKey) {
  const toolConfig = TOOLS[toolKey];

  switch (toolConfig.format) {
    case 'symlink':
      return updateSymlink(skill, cwd, toolKey);
    case 'single':
      return updateForSingleFile(skill, cwd, toolKey);
    case 'instructions':
      return updateForCopilot(skill, cwd);
    default:
      return { success: false, reason: 'unknown_format' };
  }
}

// --- Commands ---

function listSkills() {
  const skills = discoverSkills();

  console.log(BANNER);
  console.log(`${COLORS.bright}Available skills (${skills.length}):${COLORS.reset}\n`);

  for (const skill of skills) {
    console.log(`  ${COLORS.cyan}${skill.id}${COLORS.reset}  ${COLORS.dim}v${skill.version}${COLORS.reset}`);
    console.log(`    ${skill.description}`);

    if (fs.existsSync(skill.templatesDir)) {
      const fileCount = countFiles(skill.templatesDir);
      console.log(`    ${COLORS.dim}${fileCount} markdown files${COLORS.reset}`);
    }

    if (skill.tags && skill.tags.length > 0) {
      console.log(`    ${COLORS.dim}Tags: ${skill.tags.join(', ')}${COLORS.reset}`);
    }

    console.log();
  }

  console.log(`${COLORS.bright}Supported Tools:${COLORS.reset}`);
  for (const [key, config] of Object.entries(TOOLS)) {
    const isDefault = DEFAULT_TOOLS.includes(key);
    const defaultTag = isDefault ? ` ${COLORS.green}(default)${COLORS.reset}` : '';
    console.log(`  ${COLORS.cyan}${key}${COLORS.reset}${defaultTag}`);
    console.log(`    ${COLORS.dim}${config.path} - ${config.description}${COLORS.reset}`);
  }
  console.log();
}

function initCommand(skillNames, installAll, targetTools) {
  const skills = discoverSkills();
  const cwd = process.cwd();

  console.log(BANNER);

  // Determine which skills to install
  let skillsToInstall = [];

  if (installAll) {
    skillsToInstall = skills;
  } else if (skillNames.length === 0) {
    if (skills.length === 1) {
      skillsToInstall = [skills[0]];
    } else {
      log.error('Please specify which skill(s) to install.\n');
      console.log(`${COLORS.bright}Available skills:${COLORS.reset}`);
      for (const skill of skills) {
        console.log(`  ${COLORS.cyan}${skill.id}${COLORS.reset} - ${skill.description}`);
      }
      console.log();
      log.info(`Example: npx @francesco-hayes/luxxera-skills init ${skills[0].id}`);
      log.info('Or use --all to install everything.');
      process.exit(1);
    }
  } else {
    // Validate skill names
    for (const name of skillNames) {
      const skill = getSkillById(skills, name);
      if (!skill) {
        log.error(`Unknown skill: "${name}"`);
        log.info('Run "npx @francesco-hayes/luxxera-skills list" to see available skills.');
        process.exit(1);
      }
      skillsToInstall.push(skill);
    }
  }

  log.info(`Installing ${skillsToInstall.length} skill(s) for ${targetTools.length} tool(s)...\n`);

  // Install each skill
  const results = { installed: 0, skipped: 0 };

  for (const skill of skillsToInstall) {
    console.log(`${COLORS.bright}${skill.displayName || skill.id}${COLORS.reset}`);

    // First, install to primary location (.agents/skills/)
    const primaryResult = installToPrimary(skill, cwd);
    if (primaryResult.success) {
      log.step(`Primary: ${COLORS.green}installed${COLORS.reset} → ${primaryResult.path}`);
    } else if (primaryResult.reason === 'already_installed') {
      log.step(`Primary: ${COLORS.yellow}already exists${COLORS.reset} at ${PRIMARY_PATH}/${skill.id}/`);
    } else {
      log.step(`Primary: ${COLORS.red}failed${COLORS.reset} (${primaryResult.reason})`);
      console.log();
      continue; // Skip tool installations if primary failed
    }

    // Then create tool-specific symlinks/files
    for (const toolKey of targetTools) {
      const toolConfig = TOOLS[toolKey];
      const result = installSkillForTool(skill, cwd, toolKey);

      if (result.success) {
        log.tool(`${toolConfig.name}: ${COLORS.green}installed${COLORS.reset} → ${result.path}`);
        results.installed++;
      } else if (result.reason === 'already_installed') {
        log.tool(`${toolConfig.name}: ${COLORS.yellow}already exists${COLORS.reset} (use update)`);
        results.skipped++;
      } else {
        log.tool(`${toolConfig.name}: ${COLORS.red}failed${COLORS.reset} (${result.reason})`);
      }
    }
    console.log();
  }

  // Summary
  if (results.installed > 0) {
    log.success(`Installed ${results.installed} skill-tool combination(s)`);
    if (results.skipped > 0) {
      log.warn(`Skipped ${results.skipped} (already installed)`);
    }
    console.log();
    printNextSteps(skillsToInstall.map(s => s.id), targetTools);
  } else if (results.skipped > 0) {
    log.warn('All skills already installed. Use "update" to refresh.');
  }
}

function updateCommand(skillNames, updateAll, targetTools) {
  const skills = discoverSkills();
  const cwd = process.cwd();

  console.log(BANNER);

  // Determine which skills to update
  let skillsToUpdate = [];

  if (updateAll) {
    // Find all installed skills (check primary location)
    for (const skill of skills) {
      const primaryDir = path.join(cwd, PRIMARY_PATH, skill.id);
      if (fs.existsSync(path.join(primaryDir, 'SKILL.md'))) {
        skillsToUpdate.push(skill);
      }
    }
  } else if (skillNames.length === 0) {
    log.error('Please specify which skill(s) to update, or use --all.');
    process.exit(1);
  } else {
    for (const name of skillNames) {
      const skill = getSkillById(skills, name);
      if (!skill) {
        log.error(`Unknown skill: "${name}"`);
        process.exit(1);
      }
      skillsToUpdate.push(skill);
    }
  }

  if (skillsToUpdate.length === 0) {
    log.warn('No installed skills found to update.');
    log.info('Use "init" to install skills first.');
    return;
  }

  log.info(`Updating ${skillsToUpdate.length} skill(s) for ${targetTools.length} tool(s)...\n`);

  // Update each skill
  const results = { updated: 0, skipped: 0 };

  for (const skill of skillsToUpdate) {
    console.log(`${COLORS.bright}${skill.displayName || skill.id}${COLORS.reset}`);

    // First, update primary location (.agents/skills/)
    const primaryResult = updatePrimary(skill, cwd);
    if (primaryResult.success) {
      log.step(`Primary: ${COLORS.green}updated${COLORS.reset} → ${primaryResult.path}`);
    } else if (primaryResult.reason === 'not_installed') {
      log.step(`Primary: ${COLORS.yellow}not installed${COLORS.reset} (use init first)`);
      console.log();
      continue;
    } else {
      log.step(`Primary: ${COLORS.red}failed${COLORS.reset} (${primaryResult.reason})`);
      console.log();
      continue;
    }

    // Then update/verify tool-specific symlinks/files
    for (const toolKey of targetTools) {
      const toolConfig = TOOLS[toolKey];
      const result = updateSkillForTool(skill, cwd, toolKey);

      if (result.success) {
        log.tool(`${toolConfig.name}: ${COLORS.green}updated${COLORS.reset} → ${result.path}`);
        results.updated++;
      } else if (result.reason === 'not_installed') {
        log.tool(`${toolConfig.name}: ${COLORS.dim}not installed${COLORS.reset}`);
        results.skipped++;
      } else {
        log.tool(`${toolConfig.name}: ${COLORS.red}failed${COLORS.reset} (${result.reason})`);
      }
    }
    console.log();
  }

  if (results.updated > 0) {
    log.success(`Updated ${results.updated} skill-tool combination(s)`);
  }
}

function printNextSteps(skillIds, targetTools) {
  console.log(`${COLORS.bright}Installation Locations:${COLORS.reset}`);
  console.log(`  ${COLORS.cyan}Primary${COLORS.reset}: ${PRIMARY_PATH}/ (source of truth)`);

  for (const toolKey of targetTools) {
    const toolConfig = TOOLS[toolKey];
    const format = toolConfig.format === 'symlink' ? 'symlink' : toolConfig.format;
    console.log(`  ${COLORS.cyan}${toolConfig.name}${COLORS.reset}: ${toolConfig.path}/ (${format})`);
  }

  console.log();
  console.log(`${COLORS.bright}Next Steps:${COLORS.reset}`);
  console.log(`  1. Your AI tools will automatically detect the installed rules`);
  console.log(`  2. Start coding and reference the Luxxera design system`);
  console.log(`  3. Edit files in ${COLORS.cyan}${PRIMARY_PATH}/${COLORS.reset} - changes reflect everywhere`);
  console.log();

  if (targetTools.includes('claude')) {
    console.log(`${COLORS.dim}For Claude Code, you can add to your CLAUDE.md:${COLORS.reset}`);
    for (const id of skillIds) {
      console.log(`  "Use the ${id} skill in .claude/skills/${id}/ for UI development."`);
    }
    console.log();
  }
}

// --- Argument Parsing ---

const args = process.argv.slice(2);
const command = args[0];

if (!command || command === '--help' || command === '-h') {
  console.log(HELP);
  process.exit(0);
}

if (command === '--version' || command === '-v') {
  const pkg = require('../package.json');
  console.log(`v${pkg.version}`);
  process.exit(0);
}

// Parse flags and skill names
const remaining = args.slice(1);
let targetTools = [...DEFAULT_TOOLS];
let allFlag = false;
const skillNames = [];

for (let i = 0; i < remaining.length; i++) {
  const arg = remaining[i];

  if (arg === '--tools' && remaining[i + 1]) {
    const toolsArg = remaining[i + 1];
    if (toolsArg === 'all') {
      targetTools = Object.keys(TOOLS);
    } else {
      targetTools = toolsArg.split(',').map(t => t.trim().toLowerCase());
      // Validate tool names
      for (const t of targetTools) {
        if (!TOOLS[t]) {
          log.error(`Unknown tool: "${t}"`);
          log.info(`Available tools: ${Object.keys(TOOLS).join(', ')}`);
          process.exit(1);
        }
      }
    }
    i++;
  } else if (arg === '--only' && remaining[i + 1]) {
    const tool = remaining[i + 1].toLowerCase();
    if (!TOOLS[tool]) {
      log.error(`Unknown tool: "${tool}"`);
      log.info(`Available tools: ${Object.keys(TOOLS).join(', ')}`);
      process.exit(1);
    }
    targetTools = [tool];
    i++;
  } else if (arg === '--all') {
    allFlag = true;
  } else if (!arg.startsWith('-')) {
    skillNames.push(arg);
  }
}

// Handle commands
switch (command) {
  case 'list':
    listSkills();
    break;
  case 'init':
    initCommand(skillNames, allFlag, targetTools);
    break;
  case 'update':
    updateCommand(skillNames, allFlag, targetTools);
    break;
  default:
    log.error(`Unknown command: ${command}`);
    console.log('Run "npx @francesco-hayes/luxxera-skills --help" for usage.');
    process.exit(1);
}
