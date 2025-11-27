#!/bin/bash
# Common Commands for Your React Portfolio

echo "🚀 React Portfolio - Command Reference"
echo "========================================"
echo ""

# Function to display commands
show_dev_commands() {
    echo "📝 DEVELOPMENT COMMANDS"
    echo "--------"
    echo "npm install              # Install all dependencies (first time only)"
    echo "npm start                # Start development server (http://localhost:3000)"
    echo "npm test                 # Run tests"
    echo "npm run build            # Create production build"
    echo ""
}

show_deploy_commands() {
    echo "🚀 DEPLOYMENT COMMANDS"
    echo "--------"
    echo "Vercel:"
    echo "  npm i -g vercel"
    echo "  vercel"
    echo ""
    echo "Netlify:"
    echo "  npm i -g netlify-cli"
    echo "  npm run build"
    echo "  netlify deploy --prod --dir=build"
    echo ""
    echo "GitHub Pages:"
    echo "  Update package.json with homepage"
    echo "  npm run deploy"
    echo ""
}

show_troubleshooting() {
    echo "🔧 TROUBLESHOOTING COMMANDS"
    echo "--------"
    echo "Port 3000 already in use:"
    echo "  npm start -- --port 3001"
    echo ""
    echo "Clear node_modules and reinstall:"
    echo "  rm -rf node_modules"
    echo "  rm package-lock.json"
    echo "  npm install"
    echo ""
    echo "Clear cache:"
    echo "  rm -rf node_modules/.cache"
    echo "  npm start"
    echo ""
}

show_file_structure() {
    echo "📁 IMPORTANT FILES TO EDIT"
    echo "--------"
    echo "src/components/Hero.js           # Your name, title, roles"
    echo "src/components/Contact.js        # Email, social media links"
    echo "src/components/About.js          # Bio, profile image"
    echo "src/components/Skills.js         # Your skills"
    echo "src/components/Experience.js     # Work history"
    echo "src/components/Projects.js       # Your projects"
    echo "img/                             # Your images"
    echo "tailwind.config.js               # Colors, styling"
    echo ""
}

show_quick_edits() {
    echo "✏️  QUICK EDITS GUIDE"
    echo "--------"
    echo ""
    echo "1️⃣  Change Your Name:"
    echo "   File: src/components/Hero.js (line 30)"
    echo "   Replace: 'Gurpinder Singh' with your name"
    echo ""
    echo "2️⃣  Update Email:"
    echo "   File: src/components/Contact.js (line 60)"
    echo "   Replace: 'sragagan9856@gmail.com' with your email"
    echo ""
    echo "3️⃣  Add Profile Image:"
    echo "   1. Add image to img/ folder"
    echo "   2. Edit src/components/About.js"
    echo "   3. Update image path: /img/your-image.jpg"
    echo ""
    echo "4️⃣  Update Social Links:"
    echo "   File: src/components/Contact.js (line 85)"
    echo "   Update: LinkedIn, GitHub, Twitter URLs"
    echo ""
}

show_resources() {
    echo "📚 RESOURCES & DOCUMENTATION"
    echo "--------"
    echo "Read these files in order:"
    echo ""
    echo "1. QUICKSTART.md          # 5-minute setup (START HERE)"
    echo "2. SETUP.md               # Detailed setup guide"
    echo "3. DEPLOYMENT.md          # How to deploy online"
    echo "4. ADVANCED_FEATURES.md   # Advanced customization"
    echo "5. PORTFOLIO_SUMMARY.md   # Complete overview"
    echo ""
    echo "External Resources:"
    echo "  React: https://react.dev"
    echo "  Tailwind: https://tailwindcss.com"
    echo "  Framer Motion: https://www.framer.com/motion"
    echo ""
}

# Main menu
if [ $# -eq 0 ]; then
    echo "Usage: bash portfolio-commands.sh [option]"
    echo ""
    echo "Options:"
    echo "  dev              - Development commands"
    echo "  deploy           - Deployment commands"
    echo "  help             - Troubleshooting help"
    echo "  files            - Important files guide"
    echo "  edits            - Quick edits guide"
    echo "  resources        - Resources and docs"
    echo "  all              - Show everything"
    echo ""
else
    case $1 in
        dev)
            show_dev_commands
            ;;
        deploy)
            show_deploy_commands
            ;;
        help|troubleshooting)
            show_troubleshooting
            ;;
        files|file)
            show_file_structure
            ;;
        edits|edit)
            show_quick_edits
            ;;
        resources|docs)
            show_resources
            ;;
        all)
            show_dev_commands
            show_deploy_commands
            show_troubleshooting
            show_file_structure
            show_quick_edits
            show_resources
            ;;
        *)
            echo "Unknown option: $1"
            echo "Use: bash portfolio-commands.sh [dev|deploy|help|files|edits|resources|all]"
            ;;
    esac
fi
