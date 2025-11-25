# Vercel Deployment Troubleshooting

## If you're getting 404 errors, try this:

### Option 1: Check Vercel Logs
1. Go to Vercel dashboard → Your project → Deployments
2. Click on the failed deployment
3. Check "Building" tab for errors
4. Look for issues with `@tailwindcss/postcss` or TypeScript

### Option 2: Downgrade to Tailwind CSS 3 (Stable)

If Tailwind CSS 4 beta is causing issues, run these commands:

```bash
# Remove Tailwind CSS 4
npm uninstall tailwindcss @tailwindcss/postcss

# Install stable Tailwind CSS 3
npm install -D tailwindcss@^3.4.0 autoprefixer

# Update postcss.config.mjs
cat > postcss.config.mjs << 'EOF'
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
EOF

# Rebuild
npm run build

# Commit and push
git add -A
git commit -m "Downgrade to Tailwind CSS 3 for Vercel compatibility"
git push
```

### Option 3: Vercel Environment Variables

Add these in Vercel dashboard → Settings → Environment Variables:
- `NODE_VERSION` = `18.17.0`
- `NPM_VERSION` = `latest`

### Option 4: Check Framework Detection

In Vercel dashboard:
1. Settings → General
2. Framework Preset should be "Next.js"
3. Root Directory should be empty (or `.`)
4. Build Command should be empty (auto-detected)
5. Output Directory should be empty (auto-detected)

### Common Issues:

**404 NOT_FOUND usually means:**
- Build succeeded but pages aren't being generated
- App Router not detected properly
- CSS compilation failed silently

**To verify locally:**
```bash
npm run build
npm start
# Visit http://localhost:3000
```

If it works locally but not on Vercel, it's a deployment configuration issue.
