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
};

const log = {
  info: (msg) => console.log(`${COLORS.cyan}ℹ${COLORS.reset} ${msg}`),
  success: (msg) => console.log(`${COLORS.green}✓${COLORS.reset} ${msg}`),
  warn: (msg) => console.log(`${COLORS.yellow}⚠${COLORS.reset} ${msg}`),
  error: (msg) => console.log(`${COLORS.red}✗${COLORS.reset} ${msg}`),
  step: (msg) => console.log(`${COLORS.dim}  →${COLORS.reset} ${msg}`),
};

// --- Constants ---

const BANNER = `
${COLORS.green}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ${COLORS.bright}LUXXERA SKILLS${COLORS.reset}${COLORS.green}                                          ║
║   AI-powered skills for premium development               ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝${COLORS.reset}
`;

const DEFAULT_BASE_PATH = '.agents/skills';

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
  --path <dir>                    Override base install directory
                                  ${COLORS.dim}(default: ${DEFAULT_BASE_PATH})${COLORS.reset}

${COLORS.bright}Examples:${COLORS.reset}
  ${COLORS.dim}# List available skills${COLORS.reset}
  npx @francesco-hayes/luxxera-skills list

  ${COLORS.dim}# Install a specific skill${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init luxxera-ui

  ${COLORS.dim}# Install multiple skills${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init luxxera-ui api-design

  ${COLORS.dim}# Install all skills${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init --all

  ${COLORS.dim}# Update a specific skill${COLORS.reset}
  npx @francesco-hayes/luxxera-skills update luxxera-ui

  ${COLORS.dim}# Install to custom path${COLORS.reset}
  npx @francesco-hayes/luxxera-skills init luxxera-ui --path ./custom/skills

${COLORS.bright}After Installation:${COLORS.reset}
  Each skill is installed to ${COLORS.cyan}${DEFAULT_BASE_PATH}/{skill-name}/${COLORS.reset} with:
  - AGENTS.md      → Agent identity and workflow
  - SKILL.md       → Skill triggers and quick reference
  - rules/         → Detailed skill rules and documentation
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
}

function initSkill(skill, basePath) {
  const targetDir = path.join(basePath, skill.id);

  log.info(`Installing ${COLORS.cyan}${skill.displayName || skill.id}${COLORS.reset} to: ${COLORS.cyan}${targetDir}${COLORS.reset}`);

  // Check if templates exist
  if (!fs.existsSync(skill.templatesDir)) {
    log.error(`Templates not found for skill "${skill.id}". Package may be corrupted.`);
    return false;
  }

  // Check if already installed
  const agentFile = path.join(targetDir, 'AGENTS.md');
  if (fs.existsSync(agentFile)) {
    log.warn(`Skill "${skill.id}" already installed at ${targetDir}`);
    log.info(`Use "update ${skill.id}" to update existing files.`);
    return false;
  }

  // Create target directory
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    log.step(`Created directory: ${targetDir}`);
  }

  // Copy template files
  const items = fs.readdirSync(skill.templatesDir);
  for (const item of items) {
    const src = path.join(skill.templatesDir, item);
    const dest = path.join(targetDir, item);
    copyRecursive(src, dest);
    log.step(`Copied: ${item}`);
  }

  const fileCount = countFiles(targetDir);
  log.success(`${skill.displayName || skill.id} installed (${fileCount} markdown files)`);
  return true;
}

function updateSkill(skill, basePath) {
  const targetDir = path.join(basePath, skill.id);

  log.info(`Updating ${COLORS.cyan}${skill.displayName || skill.id}${COLORS.reset} in: ${COLORS.cyan}${targetDir}${COLORS.reset}`);

  // Check if installed
  const agentFile = path.join(targetDir, 'AGENTS.md');
  if (!fs.existsSync(agentFile)) {
    log.error(`Skill "${skill.id}" not found at ${targetDir}`);
    log.info(`Use "init ${skill.id}" to install first.`);
    return false;
  }

  // Backup existing files
  const backupDir = path.join(targetDir, '.backup-' + Date.now());
  fs.mkdirSync(backupDir, { recursive: true });

  const existingItems = fs.readdirSync(targetDir);
  for (const item of existingItems) {
    if (item.startsWith('.backup-')) continue;
    const src = path.join(targetDir, item);
    const dest = path.join(backupDir, item);
    copyRecursive(src, dest);
  }
  log.step(`Backed up to: ${backupDir}`);

  // Copy new files
  const items = fs.readdirSync(skill.templatesDir);
  for (const item of items) {
    const src = path.join(skill.templatesDir, item);
    const dest = path.join(targetDir, item);
    copyRecursive(src, dest);
    log.step(`Updated: ${item}`);
  }

  log.success(`${skill.displayName || skill.id} updated`);
  return true;
}

function initCommand(skillNames, installAll, basePath) {
  const skills = discoverSkills();

  console.log(BANNER);

  if (installAll) {
    log.info(`Installing all ${skills.length} skill(s)...\n`);
    let installed = 0;
    for (const skill of skills) {
      if (initSkill(skill, basePath)) installed++;
      console.log();
    }
    console.log();
    log.success(`Done! ${installed} of ${skills.length} skill(s) installed.`);
    printNextSteps(skills.map((s) => s.id));
    return;
  }

  if (skillNames.length === 0) {
    if (skills.length === 1) {
      // Backward compat: install the only available skill
      if (initSkill(skills[0], basePath)) {
        console.log();
        printNextSteps([skills[0].id]);
      }
      return;
    }

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

  // Validate all skill names first
  for (const name of skillNames) {
    if (!getSkillById(skills, name)) {
      log.error(`Unknown skill: "${name}"`);
      log.info('Run "npx @francesco-hayes/luxxera-skills list" to see available skills.');
      process.exit(1);
    }
  }

  // Install requested skills
  let installed = 0;
  for (const name of skillNames) {
    const skill = getSkillById(skills, name);
    if (initSkill(skill, basePath)) installed++;
    console.log();
  }

  if (installed > 0) {
    printNextSteps(skillNames);
  }
}

function updateCommand(skillNames, updateAll, basePath) {
  const skills = discoverSkills();

  console.log(BANNER);

  if (updateAll) {
    log.info(`Updating all installed skills...\n`);
    let updated = 0;
    for (const skill of skills) {
      const targetDir = path.join(basePath, skill.id);
      if (fs.existsSync(path.join(targetDir, 'AGENTS.md'))) {
        if (updateSkill(skill, basePath)) updated++;
        console.log();
      }
    }
    if (updated === 0) {
      log.warn('No installed skills found to update.');
      log.info('Use "init" to install skills first.');
    } else {
      log.success(`Done! ${updated} skill(s) updated.`);
    }
    return;
  }

  if (skillNames.length === 0) {
    // Find installed skills
    const installed = skills.filter((s) => {
      const targetDir = path.join(basePath, s.id);
      return fs.existsSync(path.join(targetDir, 'AGENTS.md'));
    });

    if (installed.length === 1) {
      updateSkill(installed[0], basePath);
      return;
    }

    if (installed.length === 0) {
      log.error('No installed skills found.');
      log.info('Use "init" to install skills first.');
      process.exit(1);
    }

    log.error('Please specify which skill(s) to update.\n');
    console.log(`${COLORS.bright}Installed skills:${COLORS.reset}`);
    for (const skill of installed) {
      console.log(`  ${COLORS.cyan}${skill.id}${COLORS.reset}`);
    }
    console.log();
    log.info('Or use --all to update everything.');
    process.exit(1);
  }

  // Validate all skill names first
  for (const name of skillNames) {
    if (!getSkillById(skills, name)) {
      log.error(`Unknown skill: "${name}"`);
      log.info('Run "npx @francesco-hayes/luxxera-skills list" to see available skills.');
      process.exit(1);
    }
  }

  // Update requested skills
  for (const name of skillNames) {
    const skill = getSkillById(skills, name);
    updateSkill(skill, basePath);
    console.log();
  }
}

function printNextSteps(skillIds) {
  console.log(`${COLORS.bright}Next Steps:${COLORS.reset}`);
  console.log(`  1. Reference the installed skill(s) in your AI assistant prompts`);
  console.log(`  2. Read ${COLORS.cyan}SKILL.md${COLORS.reset} in each skill directory for quick start guide`);
  console.log();
  console.log(`${COLORS.dim}For Claude Code users, add to your CLAUDE.md:${COLORS.reset}`);
  for (const id of skillIds) {
    console.log(`  "Reference the ${id} skill in .agents/skills/${id}/ for development."`);
  }
  console.log();
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

// Parse flags and skill names from remaining args
const remaining = args.slice(1);
let basePath = path.join(process.cwd(), DEFAULT_BASE_PATH);
let allFlag = false;
const skillNames = [];

for (let i = 0; i < remaining.length; i++) {
  if (remaining[i] === '--path' && remaining[i + 1]) {
    basePath = path.resolve(remaining[i + 1]);
    i++; // skip next arg
  } else if (remaining[i] === '--all') {
    allFlag = true;
  } else if (!remaining[i].startsWith('-')) {
    skillNames.push(remaining[i]);
  }
}

// Handle commands
switch (command) {
  case 'list':
    listSkills();
    break;
  case 'init':
    initCommand(skillNames, allFlag, basePath);
    break;
  case 'update':
    updateCommand(skillNames, allFlag, basePath);
    break;
  default:
    log.error(`Unknown command: ${command}`);
    console.log('Run "npx @francesco-hayes/luxxera-skills --help" for usage.');
    process.exit(1);
}
