#!/bin/bash

echo "🚀 Auto-pushing Portfolio Forge to GitHub..."
echo ""

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Check git status
echo "📋 Checking git status..."
git status --short

# Add all changes
echo ""
echo "➕ Staging all changes..."
git add .

# Commit if there are changes
if ! git diff --staged --quiet; then
    echo "💾 Committing changes..."
    git commit -m "Update: Portfolio Forge - Cyber-themed portfolio website" || true
fi

# Set remote
echo ""
echo "🔗 Setting GitHub remote..."
git remote set-url origin https://github.com/adityamishra5166-ctrl/Aditya-mishra.git

# Try to push
echo ""
echo "📤 Attempting to push to GitHub..."
echo ""

# Method 1: Try with credential helper
git config credential.helper store

# Try push (will prompt for credentials)
GIT_TERMINAL_PROMPT=1 git push -u origin main 2>&1

EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
    echo ""
    echo "✅ SUCCESS! Code pushed to GitHub!"
    echo "🌐 View at: https://github.com/adityamishra5166-ctrl/Aditya-mishra"
else
    echo ""
    echo "⚠️  Push requires authentication."
    echo ""
    echo "To complete the push, you have 2 options:"
    echo ""
    echo "OPTION 1 - Use Personal Access Token:"
    echo "1. Go to: https://github.com/settings/tokens"
    echo "2. Click 'Generate new token (classic)'"
    echo "3. Select 'repo' scope"
    echo "4. Copy the token"
    echo "5. Run: git push -u origin main"
    echo "   Username: adityamishra5166-ctrl"
    echo "   Password: [paste your token]"
    echo ""
    echo "OPTION 2 - Use GitHub Desktop or VS Code:"
    echo "Open this folder in VS Code or GitHub Desktop and push from there."
    echo ""
    echo "All files are committed and ready to push!"
fi

exit $EXIT_CODE

