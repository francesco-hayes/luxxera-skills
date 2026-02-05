# Luxxera Skills

AI-powered skills for premium development. Install specialized skills into your AI assistant (Claude Code, Cursor, etc.) to enhance code generation with domain-specific knowledge.

## Quick Install

```bash
# List available skills
npx @francesco-hayes/luxxera-skills list

# Install a skill
npx @francesco-hayes/luxxera-skills init luxxera-ui
```

## Available Skills

| Skill        | Description                                                                                              |
|--------------|----------------------------------------------------------------------------------------------------------|
| `luxxera-ui` | Premium healthcare UI design system. Shadcn UI + Tailwind CSS components following the Luxxera design language. |

## CLI Commands

### List skills

```bash
npx @francesco-hayes/luxxera-skills list
```

### Install skill(s)

```bash
# Install a specific skill
npx @francesco-hayes/luxxera-skills init luxxera-ui

# Install multiple skills
npx @francesco-hayes/luxxera-skills init luxxera-ui api-design

# Install all available skills
npx @francesco-hayes/luxxera-skills init --all

# Install to a custom path
npx @francesco-hayes/luxxera-skills init luxxera-ui --path ./custom/skills
```

Each skill is installed to `.claude/skills/{skill-name}/` by default.

### Update skill(s)

```bash
# Update a specific skill
npx @francesco-hayes/luxxera-skills update luxxera-ui

# Update all installed skills
npx @francesco-hayes/luxxera-skills update --all
```

Updates create a timestamped backup before overwriting files.

## What Gets Installed

Each skill installs to `.claude/skills/{skill-name}/` with:

```text
.claude/skills/{skill-name}/
├── AGENTS.md      → Agent identity and workflow
├── SKILL.md       → Skill triggers and quick reference
└── rules/         → Detailed rules and documentation
```

## Usage with AI Assistants

### Claude Code

After installing a skill, add to your project's `CLAUDE.md`:

```markdown
Reference the luxxera-ui skill in `.claude/skills/luxxera-ui/` for all UI development.
Always read the relevant rules before generating components.
```

Or reference skills directly in prompts:

```
Read the Luxxera agent rules and create a hero section for the procedures page
```

### Cursor / Other AI IDEs

Add to your rules or system prompt:

```
When building UI components, reference the design system in .claude/skills/luxxera-ui/.
Check foundations (colors, typography, spacing) before generating code.
```

## Migrating from @francesco-hayes/luxxera-agent

This package replaces `@francesco-hayes/luxxera-agent`. The `luxxera-ui` skill content is identical. Simply run:

```bash
npx @francesco-hayes/luxxera-skills init luxxera-ui
```

If you already have files at `.claude/skills/luxxera-ui/`, use `update` instead:

```bash
npx @francesco-hayes/luxxera-skills update luxxera-ui
```

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

3. Add a `templates/` directory containing the files to install (`AGENTS.md`, `SKILL.md`, `rules/`)
4. The CLI auto-discovers skills from `skills/*/skill.json`

## License

MIT
