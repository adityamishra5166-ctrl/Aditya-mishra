#!/bin/bash

echo "🚀 Quick GitHub Push"
echo "==================="
echo ""

cd "$(dirname "$0")"

# Check if token is provided as argument
if [ -n "$1" ]; then
    TOKEN="$1"
    echo "Using provided token..."
    git push -u origin main <<EOF
adityamishra5166-ctrl
$TOKEN
EOF
else
    echo "To push with a token, run:"
    echo "  ./quick-push.sh YOUR_TOKEN_HERE"
    echo ""
    echo "Or get a token from: https://github.com/settings/tokens"
    echo ""
    echo "Then run:"
    echo "  git push -u origin main"
    echo ""
    echo "When prompted:"
    echo "  Username: adityamishra5166-ctrl"
    echo "  Password: [paste your token]"
fi

