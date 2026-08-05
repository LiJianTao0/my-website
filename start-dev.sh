#!/usr/bin/env bash
# ui-components - one-click local dev server launcher (Git Bash / Linux / macOS)
# Usage: ./start-dev.sh   (or: bash start-dev.sh)
cd "$(dirname "$0")" || exit 1

if [ ! -d node_modules ]; then
    echo "[1/2] First run: installing dependencies..."
    npm install || { echo "*** Install failed ***"; exit 1; }
fi

echo "[2/2] Starting dev server... browser will open automatically."
echo "      Press Ctrl+C to stop the server."
npm run dev -- --open
