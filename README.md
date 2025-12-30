# AI/ML Portfolio - GitHub Pages

A clean, professional portfolio website showcasing AI/ML projects, research, and freelance work.

## 🚀 Quick Start

### 1. Replace Placeholder Content

Find and replace the following in ALL HTML files:

- `Your Name` → Your actual name
- `your.email@example.com` → Your email
- `yourusername` → Your GitHub/LinkedIn/HuggingFace/Kaggle username
- Update all social media links in navigation and footer

### 2. Add Your Images

Place your screenshots and diagrams in:

```
assets/images/
├── nlp/              # NLP project screenshots
├── cv/               # Computer Vision screenshots
├── timeseries/       # Time series plots
├── datascience/      # Data science visualizations
├── llms/             # HuggingFace profile screenshot
├── kaggle/           # Kaggle profile screenshot
├── ml-platform/      # Platform UI screenshots
├── content-generator/# Content generator screenshots
├── student-projects/ # Student project outputs
├── websites/         # Website screenshots
├── plotly-poc/       # Plotly diagrams
└── energy-design/    # Energy system diagrams
```

### 3. Update Project Content

Edit the HTML files to add your specific project details:

**my-work.html:**
- Update project descriptions
- Add correct GitHub/HuggingFace links
- Modify tech stacks
- Add your achievements

**freelance.html:**
- List your actual student projects
- Update client project details
- Modify confidential project descriptions

**contact.html:**
- Update expertise areas
- Modify availability status

## 📁 File Structure

```
ai-ml-portfolio/
│
├── index.html           # Home page with timeline
├── my-work.html         # Research & projects page
├── freelance.html       # Freelance work page
├── contact.html         # Contact information
│
├── assets/
│   ├── css/
│   │   └── style.css    # All styling
│   ├── js/
│   │   └── main.js      # All interactions
│   └── images/          # All screenshots & diagrams
│
└── README.md            # This file
```

## 🎨 Customization

### Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563EB;      /* Main blue */
    --secondary-color: #10B981;    /* Green for success */
    --text-primary: #1F2937;       /* Dark text */
    --text-secondary: #6B7280;     /* Light text */
}
```

### Fonts

Current font stack:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
```

To change fonts, update this in `style.css`.

## 📸 Image Guidelines

### Screenshot Requirements:

- **Format:** PNG or JPG
- **Size:** Max 500KB per image (compress if needed)
- **Dimensions:** 1200-1600px width recommended
- **Quality:** Clear, readable text

### Creating Diagrams:

Use [draw.io](https://app.diagrams.net/) or [Excalidraw](https://excalidraw.com/) for:
- System architectures
- Data pipelines
- Workflow diagrams
- Component interactions

Export as PNG with transparent background.

## 🌐 Deployment to GitHub Pages

### Method 1: Via GitHub Website

1. Create a new repository named `ai-ml-portfolio`
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save**
6. Wait 2-3 minutes
7. Your site will be live at: `https://yourusername.github.io/ai-ml-portfolio`

### Method 2: Via Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/yourusername/ai-ml-portfolio.git

# Push to GitHub
git push -u origin main
```

Then follow steps 3-7 from Method 1.

### Method 3: Using GitHub Desktop

1. Open GitHub Desktop
2. File → Add Local Repository
3. Select your portfolio folder
4. Publish repository to GitHub
5. Follow steps 3-7 from Method 1

## 🔧 Testing Locally

Before deploying, test locally:

### Option 1: Python Simple Server

```bash
# Navigate to project folder
cd ai-ml-portfolio

# Start server (Python 3)
python -m http.server 8000

# Open browser to: http://localhost:8000
```

### Option 2: VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Browser File Protocol

Simply open `index.html` in your browser (some features may not work).

## ✅ Pre-Deployment Checklist

Before going live, verify:

- [ ] All placeholder text replaced
- [ ] All images added and optimized
- [ ] All links tested and working
- [ ] Social media links updated
- [ ] Contact information correct
- [ ] No broken internal links
- [ ] Mobile responsive (test on phone)
- [ ] Works in Chrome, Firefox, Safari
- [ ] Fast loading (< 3 seconds)

## 🐛 Troubleshooting

### Images Not Showing

- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify image filenames match HTML references
- Check file extensions (.png, .jpg)

### CSS/JS Not Loading

- Verify file paths: `assets/css/style.css` and `assets/js/main.js`
- Check browser console for errors (F12)
- Clear browser cache

### GitHub Pages Not Working

- Wait 5-10 minutes after enabling
- Check repository is public
- Verify branch name is `main` (not `master`)
- Ensure files are in root directory

### Sidebar Navigation Not Working

- Check `main.js` is loading
- Open browser console (F12) for errors
- Verify data-category attributes match content IDs

## 📱 Mobile Optimization

The site is fully responsive. Test on:

- iPhone (Safari)
- Android (Chrome)
- Tablet (both orientations)

Sidebar automatically converts to collapsed sections on mobile.

## 🚀 Performance Tips

1. **Optimize Images:**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target < 500KB per image

2. **Enable Browser Caching:**
   - GitHub Pages does this automatically

3. **Minimize HTTP Requests:**
   - All CSS in one file
   - All JS in one file

## 🔒 Privacy & Security

- No personal data collection
- No cookies or tracking
- All content is static HTML/CSS/JS
- Safe to share publicly

## 📊 Analytics (Optional)

To add visitor tracking:

1. Sign up for [Google Analytics](https://analytics.google.com/)
2. Add tracking code before `</head>` in all HTML files
3. Monitor traffic and engagement

## 🆘 Need Help?

Common issues and solutions:

**Q: How do I add a new project?**  
A: Copy an existing project card in the HTML, update the content, and add corresponding images.

**Q: Can I change the color scheme?**  
A: Yes! Edit CSS variables in `style.css` under `:root`.

**Q: How do I add more pages?**  
A: Create new HTML file, copy structure from existing page, add navigation link.

**Q: Can I use a custom domain?**  
A: Yes! Add a `CNAME` file with your domain, configure DNS settings.

## 📝 License

This portfolio template is free to use and modify for personal projects.

## 🎉 You're Done!

Your portfolio is ready to impress recruiters. Remember to:

1. Keep it updated with new projects
2. Add new skills as you learn
3. Update availability status
4. Share the link on your resume and LinkedIn

**Portfolio URL:** `https://yourusername.github.io/ai-ml-portfolio`

Good luck with your job search! 🚀