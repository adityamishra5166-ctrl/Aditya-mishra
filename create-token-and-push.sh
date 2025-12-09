#!/bin/bash

echo "🔐 GitHub Token Creator & Auto-Push"
echo "==================================="
echo ""

cd "$(dirname "$0")"

echo "📋 STEP 1: Creating GitHub Token"
echo ""
echo "I'll open your browser to create a token..."
echo ""

# Open GitHub token creation page
open "https://github.com/settings/tokens/new?scopes=repo&description=Portfolio-Forge-Push" 2>/dev/null || \
  echo "Please open: https://github.com/settings/tokens/new?scopes=repo&description=Portfolio-Forge-Push"

echo ""
echo "📝 INSTRUCTIONS:"
echo "   1. Token name: Portfolio-Forge-Push (already filled)"
echo "   2. Expiration: Choose your preference"
echo "   3. Select scopes: ✅ repo (REQUIRED - check this box!)"
echo "   4. Click 'Generate token' at the bottom"
echo "   5. COPY THE TOKEN (you won't see it again!)"
echo ""
read -p "Press Enter after you've copied your token..."

echo ""
read -sp "Paste your new token here: " NEW_TOKEN
echo ""

if [ -z "$NEW_TOKEN" ]; then
    echo "❌ No token provided. Exiting."
    exit 1
fi

echo ""
echo "🚀 Pushing to GitHub with new token..."
echo ""

# Configure git with new token
git remote set-url origin https://github.com/adityamishra5166-ctrl/Aditya-mishra.git
git config credential.helper 'store --file=.git/credentials'
echo "https://adityamishra5166-ctrl:${NEW_TOKEN}@github.com" > .git/credentials

# Push
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║              ✅ SUCCESS! CODE PUSHED! ✅                     ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    echo "🌐 Your portfolio is now live at:"
    echo "   https://github.com/adityamishra5166-ctrl/Aditya-mishra"
    echo ""
    echo "🎉 Congratulations! Your code is on GitHub!"
else
    echo ""
    echo "❌ Push failed. Please check:"
    echo "   1. Token has 'repo' scope checked"
    echo "   2. Token was copied correctly"
    echo "   3. Try running: git push -u origin main"
fi

