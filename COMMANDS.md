# 🚀 Command Reference - Your Portfolio

## Copy & Paste Ready Commands

---

## 🎯 First Time Setup

### 1️⃣ Install Dependencies
```bash
cd /Users/gagansra/Desktop/My-new-Projects/portfolio
npm install
```
⏱️ Takes ~2-3 minutes
✅ Only run this ONCE

### 2️⃣ Start Development Server
```bash
npm start
```
✅ Opens http://localhost:3000 automatically

### 3️⃣ Stop Development Server
```bash
# Press Ctrl + C in terminal
```

---

## 📝 Development Commands

### Work on Your Portfolio
```bash
npm start
```

### Build for Production
```bash
npm run build
```

### Run Tests (if needed)
```bash
npm test
```

---

## 🚀 Deployment Commands

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI (one-time)
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=build
```

### Deploy to GitHub Pages
```bash
# Build
npm run build

# Deploy (requires git setup)
npm run deploy
```

---

## 🔧 Troubleshooting Commands

### Port 3000 Already in Use
```bash
npm start -- --port 3001
```

### Clear Everything & Reinstall
```bash
# Remove node_modules
rm -rf node_modules

# Remove package lock
rm package-lock.json

# Reinstall everything
npm install
```

### Clear Node Cache
```bash
rm -rf node_modules/.cache
npm start
```

### Check Node & npm Versions
```bash
node --version
npm --version
```

### Update npm (if needed)
```bash
npm install -g npm@latest
```

---

## 📊 File System Commands

### Navigate to Your Portfolio
```bash
cd /Users/gagansra/Desktop/My-new-Projects/portfolio
```

### View All Files
```bash
ls -la
```

### View Folder Structure
```bash
tree
# Or if tree not installed:
find . -maxdepth 3 -type d
```

### List Component Files
```bash
ls src/components/
```

### Check Image Files
```bash
ls img/
```

---

## 📦 Package Management

### Install New Package
```bash
npm install package-name
```

### Uninstall Package
```bash
npm uninstall package-name
```

### Update All Packages
```bash
npm update
```

### Check Outdated Packages
```bash
npm outdated
```

---

## 🔍 Useful Development Commands

### Check for Errors
```bash
npm test
```

### Analyze Bundle Size
```bash
npm install -g webpack-bundle-analyzer
npm run analyze
```

### Check Code Quality
```bash
npm install -D eslint
npx eslint src/
```

---

## 🌐 Browser Developer Tools

While `npm start` is running:

### Open Developer Console
- **Mac:** Cmd + Option + I
- **Windows:** Ctrl + Shift + I

### Inspect Element
- **Mac:** Cmd + Option + U
- **Windows:** Ctrl + Shift + C

### Mobile/Responsive View
- **Mac:** Cmd + Shift + M
- **Windows:** Ctrl + Shift + M

### Hard Refresh (Clear Cache)
- **Mac:** Cmd + Shift + R
- **Windows:** Ctrl + Shift + R

### View Source Code
- **Mac:** Cmd + Option + U
- **Windows:** Ctrl + U

---

## 📝 Git Commands (If Using Git)

### Initialize Git
```bash
git init
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Update portfolio"
```

### Push to GitHub
```bash
git push origin main
```

---

## 🎨 Quick File Edits (Command Line)

### Open a file in VS Code
```bash
code src/components/Hero.js
```

### View file content
```bash
cat src/components/Hero.js
```

### Search in files
```bash
grep -r "Gurpinder" src/
```

---

## 📊 Useful Info Commands

### Check Current Directory
```bash
pwd
```

### List npm Installed Packages
```bash
npm list
```

### Check npm Configuration
```bash
npm config list
```

### View Installed React Version
```bash
npm list react
```

---

## ⚡ Optimized Workflow

### Daily Development Workflow
```bash
# 1. Navigate to project
cd /Users/gagansra/Desktop/My-new-Projects/portfolio

# 2. Start development server
npm start

# 3. Edit files in VS Code (code changes auto-reload)

# 4. When done, press Ctrl + C to stop server

# 5. Later, when ready to deploy:
npm run build

# 6. Deploy using vercel, netlify, or github pages
```

---

## 🐛 Debug Mode

### Run with Debugging
```bash
NODE_ENV=development npm start
```

### React Developer Tools Browser Extension
1. Install from Chrome Web Store
2. Open DevTools (Cmd + Option + I)
3. Go to "React" tab
4. Inspect components

---

## 📈 Performance Check

### Build Size Check
```bash
npm run build
# Check the size of build/
du -sh build/
```

### Install Size Check
```bash
npm ls --depth=0
```

---

## 🌍 Environment Variables

### Create .env file
```bash
echo "REACT_APP_API_URL=http://localhost:3000" > .env
```

### Use in Code
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

---

## 🔐 Security Check

### Check for Vulnerabilities
```bash
npm audit
```

### Fix Vulnerabilities
```bash
npm audit fix
```

---

## 💻 Terminal Shortcuts

### Clear Terminal
```bash
clear
```

### Previous Command
```bash
# Press Up Arrow Key
```

### Search in Command History
```bash
# Press Ctrl + R and type command
```

### Kill Process on Port
```bash
# Mac/Linux
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

## 📚 Quick Help

### npm Help
```bash
npm help
npm start --help
```

### React Documentation
- https://react.dev

### Tailwind CSS Documentation
- https://tailwindcss.com

### Framer Motion Documentation
- https://www.framer.com/motion

---

## ✅ Command Checklist

- [ ] Navigated to portfolio folder
- [ ] Ran `npm install`
- [ ] Ran `npm start` successfully
- [ ] Saw portfolio open at localhost:3000
- [ ] Made a small edit and saw changes
- [ ] Ready to customize content!

---

## 🎯 Most Common Commands

```bash
# Start working
npm start

# Build for production
npm run build

# Deploy with Vercel
npm i -g vercel && vercel

# Deploy with Netlify
npm i -g netlify-cli && npm run build && netlify deploy --prod --dir=build

# Troubleshooting
npm install
npm start -- --port 3001
```

---

## 🚀 From Zero to Deployed

```bash
# Step 1: Navigate
cd /Users/gagansra/Desktop/My-new-Projects/portfolio

# Step 2: Install
npm install

# Step 3: Develop
npm start
# Make changes, see them live

# Step 4: Build
npm run build

# Step 5: Deploy (choose one)
vercel
# OR
netlify deploy --prod --dir=build

# Step 6: Share your URL!
```

---

## 💡 Pro Tips

1. **Keep terminal open** while developing with `npm start`
2. **Use Cmd+Shift+R** to hard refresh browser
3. **Check DevTools** for any errors (F12)
4. **Edit and save** - changes appear automatically
5. **Press Ctrl+C** to stop the server

---

## 🎉 You're Ready!

Bookmark this page and refer back to it whenever you need a command.

**Happy coding! 🚀**
