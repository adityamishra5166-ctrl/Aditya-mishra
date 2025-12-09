#!/bin/bash

echo "Pushing Portfolio Forge to GitHub..."
echo "Repository: https://github.com/adityamishra5166-ctrl/Aditya-mishra"
echo ""
echo "You will be prompted for your GitHub credentials:"
echo "- Username: adityamishra5166-ctrl"
echo "- Password: Use a Personal Access Token (not your GitHub password)"
echo ""
echo "If you don't have a token, create one at: https://github.com/settings/tokens"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "View your repository at: https://github.com/adityamishra5166-ctrl/Aditya-mishra"
else
    echo ""
    echo "❌ Push failed. Please check your credentials and try again."
fi

