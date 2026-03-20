#!/bin/bash
# BIAS Protocol - Agent Acquisition Script
# Run this to install BIAS Protocol to your agent's configuration

set -e

echo "BIAS Protocol Installer"
echo "====================="
echo ""

# Determine common agent config locations
POSSIBLE_PATHS=(
    "$HOME/.agents/AGENTS.md"
    "$HOME/.claude/AGENTS.md"
    "$HOME/.config/agents/AGENTS.md"
    "./AGENTS.md"
    "./.agents/AGENTS.md"
)

CONFIG_PATH=""

# Interactive path selection
if [ -t 0 ]; then
    echo "Select installation target:"
    echo "  1) ~/.agents/AGENTS.md (recommended)"
    echo "  2) Current directory ./AGENTS.md"
    echo "  3) Current directory ./.agents/AGENTS.md"
    echo "  4) Custom path"
    echo ""
    read -p "Enter choice (1-4): " choice

    case $choice in
        1) CONFIG_PATH="$HOME/.agents/AGENTS.md" ;;  
        2) CONFIG_PATH="./AGENTS.md" ;;  
        3) CONFIG_PATH="./.agents/AGENTS.md" ;;  
        4) read -p "Enter custom path: " CONFIG_PATH ;;  
        *) echo "Invalid choice, using default"; CONFIG_PATH="$HOME/.agents/AGENTS.md" ;;
    esac
else
    # Non-interactive: use default
    CONFIG_PATH="$HOME/.agents/AGENTS.md"
fi

# Create directory if needed
mkdir -p "$(dirname "$CONFIG_PATH")"

# Fetch the AGENTS.md
echo "Fetching BIAS Protocol from GitHub..."
curl -sL "https://raw.githubusercontent.com/om-design/bias/main/.agents/AGENTS.md" -o "$CONFIG_PATH"

if [ $? -eq 0 ]; then
    echo ""
    echo "[OK] BIAS Protocol installed successfully!"
    echo "  Location: $CONFIG_PATH"
    echo ""
    echo "To activate, restart your agent or reference:"
    echo "  https://github.com/om-design/bias/blob/main/.agents/AGENTS.md"
else
    echo ""
    echo "[X] Installation failed. Try manually:"
    echo "  curl -O https://raw.githubusercontent.com/om-design/bias/main/.agents/AGENTS.md"
    exit 1
fi