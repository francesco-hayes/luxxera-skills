# Luxxera Skills

Multi-tool AI skills for premium development. Install specialized skills into your AI assistants—Claude Code, Cursor, Windsurf, GitHub Copilot—from a single source.

## Quick Install

```bash
# List available skills
npx @francesco-hayes/luxxera-skills list

# Install a skill (auto-installs for Claude, Cursor, Windsurf)
npx @francesco-hayes/luxxera-skills init luxxera-ui
```

## Architecture

Skills are installed to a **single primary location** (`.agents/skills/`) with tool-specific paths created as symlinks or generated files:

```
your-project/
├── .agents/skills/luxxera-ui/     ← PRIMARY (source of truth)
│   ├── SKILL.md
│   └── references/
├── .claude/skills/luxxera-ui/     ← SYMLINK → .agents/skills/luxxera-ui/
├── .cursor/rules/luxxera-ui/      ← SYMLINK → .agents/skills/luxxera-ui/
└── .windsurf/rules/luxxera-ui.md  ← CONSOLIDATED FILE
```

**Benefits:**
- Edit files in `.agents/skills/` - changes are immediately visible to Claude Code and Cursor via symlinks
- Run `update` to regenerate consolidated files for Windsurf after edits
- Only one copy of the full documentation on disk

## Supported AI Tools

| Tool | Location | Format |
|------|----------|--------|
| **Primary** | `.agents/skills/{skill}/` | Full structure (source of truth) |
| **Claude Code** | `.claude/skills/{skill}/` | Symlink to primary |
| **Cursor** | `.cursor/rules/{skill}/` | Symlink to primary |
| **Windsurf** | `.windsurf/rules/{skill}.md` | Consolidated file |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Appended section |

## Available Skills

| Skill | Description |
|-------|-------------|
| `luxxera-ui` | Premium healthcare UI design system. Shadcn UI + Tailwind CSS components following the Luxxera design language. |

## CLI Commands

### List skills

```bash
npx @francesco-hayes/luxxera-skills list
```

### Install skill(s)

```bash
# Install for all default tools (Claude, Cursor, Windsurf)
npx @francesco-hayes/luxxera-skills init luxxera-ui

# Install for only one tool
npx @francesco-hayes/luxxera-skills init luxxera-ui --only cursor

# Install for specific tools
npx @francesco-hayes/luxxera-skills init luxxera-ui --tools claude,copilot

# Install for all supported tools
npx @francesco-hayes/luxxera-skills init luxxera-ui --tools all

# Install all available skills
npx @francesco-hayes/luxxera-skills init --all
```

### Update skill(s)

```bash
# Update a specific skill
npx @francesco-hayes/luxxera-skills update luxxera-ui

# Update all installed skills
npx @francesco-hayes/luxxera-skills update --all

# Update only for specific tools
npx @francesco-hayes/luxxera-skills update luxxera-ui --only cursor
```

Updates:
1. Refresh the primary location from the package source
2. Verify/recreate symlinks for Claude Code
3. Regenerate consolidated files for Cursor/Windsurf (includes any local edits from primary)

## Usage with AI Assistants

### Claude Code

After installing, add to your project's `CLAUDE.md`:

```markdown
Use the luxxera-ui skill in .claude/skills/luxxera-ui/ for all UI development.
```

Or reference in prompts:

```
Read the Luxxera UI skill and create a hero section for the procedures page
```

### Cursor

Skills are auto-detected from `.cursor/rules/`. Just start coding and reference the design system in your prompts.

### Windsurf

Skills are auto-detected from `.windsurf/rules/`. Reference in prompts as needed.

### GitHub Copilot

Add `--tools copilot` when installing to include Copilot support:

```bash
npx @francesco-hayes/luxxera-skills init luxxera-ui --tools claude,cursor,copilot
```

## Local Customization

To customize the skill for your project:

1. Edit files directly in `.agents/skills/luxxera-ui/`
2. Changes are immediately visible to Claude Code and Cursor (via symlinks)
3. Run `npx @francesco-hayes/luxxera-skills update luxxera-ui` to regenerate consolidated files for Windsurf

## Adding New Skills

To add a skill to this package:

1. Create a directory under `skills/` with your skill name
2. Add a `skill.json` manifest:

   ```json
   {
     "name": "my-skill",
     "displayName": "My Skill",
     "description": "What this skill does.",
     "version": "1.0.0",
     "tags": ["relevant", "tags"]
   }
   ```

3. Add a `templates/` directory containing:
   - `SKILL.md` with YAML frontmatter (name, description)
   - `references/` directory with documentation files

4. The CLI auto-discovers skills from `skills/*/skill.json`

## License

MIT
