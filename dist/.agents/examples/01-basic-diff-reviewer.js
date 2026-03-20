"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definition = {
    id: 'basic-diff-reviewer',
    displayName: 'Basic Diff Reviewer',
    model: 'anthropic/claude-4-sonnet-20250522',
    toolNames: ['read_files', 'run_terminal_command'],
    spawnerPrompt: 'Spawn when you need to review code changes in the git diff',
    instructionsPrompt: `Execute the following steps:
1. Run git diff
2. Read the files that have changed
3. Review the changes and suggest improvements`,
};
exports.default = definition;
