#!/bin/bash

echo "🔐 GitHub Authentication Setup"
echo "=============================="
echo ""

cd "$(dirname "$0")"

echo "This script will help you authenticate with GitHub."
echo ""

# Configure git credential helper
echo "📝 Configuring git credential storage..."
git config --global credential.helper osxkeychain

echo ""
echo "Choose authentication method:"
echo ""
echo "1. Personal Access Token (Recommended)"
echo "2. GitHub CLI (gh)"
echo "3. Manual git push"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "📋 Personal Access Token Setup:"
        echo ""
        echo "1. Open: https://github.com/settings/tokens"
        echo "2. Click 'Generate new token' → 'Generate new token (classic)'"
        echo "3. Name: Portfolio-Forge"
        echo "4. Select scope: ✅ repo"
        echo "5. Click 'Generate token'"
        echo "6. COPY THE TOKEN"
        echo ""
        read -p "Press Enter when you have your token ready..."
        echo ""
        echo "Now let's test the authentication by pushing:"
        echo ""
        git push -u origin main
        ;;
    2)
        echo ""
        echo "Installing GitHub CLI..."
        if command -v brew &> /dev/null; then
            brew install gh
        else
            echo "Homebrew not found. Please install GitHub CLI manually:"
            echo "Visit: https://cli.github.com/"
        fi
        
        if command -v gh &> /dev/null; then
            echo ""
            echo "Logging in to GitHub..."
            gh auth login
            echo ""
            echo "✅ Authenticated! Now pushing..."
            git push -u origin main
        fi
        ;;
    3)
        echo ""
        echo "Manual push - run this command:"
        echo "git push -u origin main"
        echo ""
        echo "When prompted:"
        echo "  Username: adityamishra5166-ctrl"
        echo "  Password: [your personal access token]"
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
if [ $? -eq 0 ]; then
    echo "✅ Successfully authenticated and pushed!"
    echo "🌐 View at: https://github.com/adityamishra5166-ctrl/Aditya-mishra"
else
    echo "⚠️  Authentication or push failed. Please try again."
fi

