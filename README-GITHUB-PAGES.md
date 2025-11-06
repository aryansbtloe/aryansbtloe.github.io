# GitHub Pages Blog Setup Guide

This guide will help you set up and deploy your blog to GitHub Pages using Jekyll.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Ruby and Jekyll (optional, for local testing)

## Quick Start

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - For example: `johnsmith.github.io`
3. Make it **public** (required for free GitHub Pages)
4. Initialize with a README (optional)

### 2. Clone and Push Your Blog

```bash
# Navigate to your blogs directory
cd /Users/aryansbtloe/aryansbtloe/projects/webapps/blogs

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial blog setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### 4. Wait for Build

- GitHub will automatically build your site
- This usually takes 1-2 minutes
- You'll see a green checkmark when it's done

### 5. Access Your Blog

Your blog will be available at:
- `https://yourusername.github.io`

## Local Development (Optional)

To test your blog locally before pushing to GitHub:

### Install Jekyll

```bash
# Install Ruby (if not installed)
# macOS: Ruby comes pre-installed
# Or use Homebrew: brew install ruby

# Install Bundler
gem install bundler

# Install dependencies
bundle install
```

### Run Local Server

```bash
# Start Jekyll server
bundle exec jekyll serve

# Or if you have Jekyll installed globally
jekyll serve
```

Your blog will be available at:
- `http://localhost:4000`

## Configuration

### Update `_config.yml`

Edit `_config.yml` with your information:

```yaml
title: "Your Blog Title"
description: "Your blog description"
url: "https://yourusername.github.io"
baseurl: ""

author:
  name: "Your Name"
  email: "your.email@example.com"
  twitter: "yourtwitter"
  github: "yourusername"
```

### Custom Domain (Optional)

1. Add a `CNAME` file in the root directory:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records for GitHub Pages IPs

3. Update `_config.yml`:
   ```yaml
   url: "https://yourdomain.com"
   ```

## Adding New Posts

1. Create a new file in `_posts/` directory
2. Name it: `YYYY-MM-DD-post-title.md`
3. Add front matter:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-15 10:00:00 -0800
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
author: Your Name
---

Your post content here...
```

4. Commit and push:
```bash
git add _posts/YYYY-MM-DD-post-title.md
git commit -m "Add new post: Your Post Title"
git push
```

## File Structure

```
blogs/
├── _config.yml          # Jekyll configuration
├── _posts/              # Blog posts (Jekyll format)
│   └── YYYY-MM-DD-title.md
├── index.md             # Homepage
├── Gemfile              # Ruby dependencies
├── .gitignore          # Git ignore rules
└── README-GITHUB-PAGES.md  # This file
```

## Themes

The blog uses the **Minima** theme by default. To change themes:

1. Update `_config.yml`:
   ```yaml
   theme: theme-name
   ```

2. Or use a custom theme:
   - Create `_layouts/` and `_includes/` directories
   - Add custom HTML/CSS

Popular Jekyll themes:
- [Minima](https://github.com/jekyll/minima) (default)
- [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)
- [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
- [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll)

## Troubleshooting

### Build Fails

1. Check GitHub Actions tab for errors
2. Verify `_config.yml` syntax
3. Check for unsupported plugins

### Site Not Updating

1. Wait 1-2 minutes for build
2. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
3. Clear browser cache

### Local Server Issues

```bash
# Update dependencies
bundle update

# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll build
```

## Useful Commands

```bash
# Build site
bundle exec jekyll build

# Serve locally
bundle exec jekyll serve

# Serve with drafts
bundle exec jekyll serve --drafts

# Clean build
bundle exec jekyll clean
```

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Themes](http://jekyllthemes.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## Next Steps

1. ✅ Set up GitHub repository
2. ✅ Push your blog files
3. ✅ Enable GitHub Pages
4. ✅ Customize `_config.yml`
5. ✅ Add more blog posts
6. ✅ Customize theme (optional)
7. ✅ Set up custom domain (optional)
8. ✅ Add Google Analytics (optional)

## Support

For issues or questions:
- Check [Jekyll Documentation](https://jekyllrb.com/docs/)
- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Search [Jekyll Talk](https://talk.jekyllrb.com/)

---

Happy blogging! 🎉

