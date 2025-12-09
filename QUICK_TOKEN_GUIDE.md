# 🚀 Quick Token Creation & Push Guide

## ⚡ FASTEST METHOD (2 minutes):

### Step 1: Create Token
1. **Click this link:** https://github.com/settings/tokens/new?scopes=repo&description=Portfolio-Forge-Push
2. **Check the box:** ✅ **repo** (this is CRITICAL!)
3. **Click:** "Generate token" (scroll to bottom)
4. **COPY THE TOKEN** (starts with `ghp_` or `github_pat_`)

### Step 2: Push with Token
Run this command:
```bash
cd /Users/raviranjan/Downloads/Portfolio-Forge
./create-token-and-push.sh
```

When prompted, paste your token.

**OR** manually push:
```bash
git push -u origin main
```
- Username: `adityamishra5166-ctrl`
- Password: [paste your token]

---

## 🎯 What You Need:

✅ Token with **'repo' scope** checked
✅ Copy the token immediately (you won't see it again)
✅ Use token as password when git prompts

---

## 📝 Token Creation Checklist:

- [ ] Go to: https://github.com/settings/tokens/new
- [ ] Name: Portfolio-Forge-Push
- [ ] Expiration: Your choice (90 days recommended)
- [ ] **CRITICAL:** Check ✅ **"repo"** scope
- [ ] Click "Generate token"
- [ ] **COPY TOKEN IMMEDIATELY**
- [ ] Use token to push

---

## 🔍 Verify Token Has Repo Scope:

After creating token, you should see:
- ✅ repo (Full control of private repositories)

If you don't see "repo" listed, the token won't work for pushing!

---

## 🆘 Troubleshooting:

**"Permission denied" error?**
→ Token doesn't have 'repo' scope. Create a new one.

**"Token not found"?**
→ Make sure you copied the entire token.

**Still not working?**
→ Run: `./create-token-and-push.sh` for interactive help

---

**Your code is ready - just needs a token with 'repo' scope!** 🎉

