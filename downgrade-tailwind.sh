#!/bin/bash
# Quick fix: Downgrade to Tailwind CSS 3 for Vercel compatibility

echo "🔄 Downgrading to Tailwind CSS 3..."

# Uninstall Tailwind CSS 4
npm uninstall tailwindcss @tailwindcss/postcss

# Install Tailwind CSS 3
npm install -D tailwindcss@^3.4.0 autoprefixer

# Update postcss config
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

# Test build
echo "🏗️  Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Now commit and push:"
    echo "   git add -A"
    echo "   git commit -m 'Downgrade to Tailwind CSS 3 for Vercel compatibility'"
    echo "   git push"
else
    echo "❌ Build failed. Check errors above."
fi
