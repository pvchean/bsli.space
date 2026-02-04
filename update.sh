#!/bin/bash

# Go to repo directory
cd "$(dirname "$0")" || exit 1

# Sync git
git pull --rebase

# Run your build tools
webstudio sync
webstudio build --template docker

# 1. Generate a version number based on timestamp
VERSION="v$(date '+%Y%m%d.%H%M%S')"

# 2. Update a version file (so Portainer sees a file change)
echo "$VERSION" > .version

# Check if there are changes
if [[ -z $(git status --porcelain) ]]; then
  echo "No changes to commit."
  exit 0
fi

# Add everything
git add -A

# Commit with version in message
git commit -m "Auto sync: $VERSION"

# 3. Create a Git Tag (helpful for Portainer 'tag' tracking)
git tag -a "$VERSION" -m "Automated release $VERSION"

# Push code and tags
git push origin master
git push origin "$VERSION"

echo "Sync complete. Pushed version $VERSION"
