#!/bin/bash

# Go to repo directory (important if run from elsewhere)
cd "$(dirname "$0")" || exit 1

# Check if there are changes
if [[ -z $(git status --porcelain) ]]; then
  echo "No changes to commit."
  exit 0
fi

# Add everything
git add -A

# Commit with timestamp
git commit -m "Auto sync: $(date '+%Y-%m-%d %H:%M:%S')"

# Push
git push

echo "Sync complete."
