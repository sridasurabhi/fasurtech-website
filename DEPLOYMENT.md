# Deployment Guide - Fasurtech Website

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier works)

### Steps

1. **Push to GitHub**
   ```bash
   cd fasurtech-website
   git add .
   git commit -m "Initial Fasurtech website"
   git remote add origin https://github.com/YOUR_USERNAME/fasurtech-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"
   - Done! Your site will be live at `https://your-project.vercel.app`

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., fasurtech.com)
   - Update DNS records as instructed
   - Vercel handles SSL certificates automatically

## Alternative: Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

## Alternative: Deploy to AWS, Azure, or Google Cloud

### Build Static Export
```bash
npm run build
```

The build output will be in `.next` directory. Deploy this to:
- **AWS S3 + CloudFront**
- **Azure Static Web Apps**
- **Google Cloud Storage + CDN**

## Environment Variables

If you add any API integrations, create `.env.local`:

```bash
# Example variables (add as needed)
NEXT_PUBLIC_API_URL=your_api_url
CONTACT_FORM_ENDPOINT=your_form_endpoint
ANALYTICS_ID=your_analytics_id
```

## Performance Optimization

### Before Deployment
1. ✅ Images optimized with next/image
2. ✅ Fonts optimized with next/font
3. ✅ Code splitting enabled by default
4. ✅ Tailwind CSS purging enabled

### Post-Deployment
1. Enable CDN for static assets
2. Configure caching headers
3. Enable compression (gzip/brotli)
4. Set up monitoring (Vercel Analytics or custom)

## DNS Configuration

Point your domain to your hosting provider:

### For Vercel
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

### For Netlify
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

## SSL/HTTPS

All modern hosting providers (Vercel, Netlify) provide:
- ✅ Automatic SSL certificates (Let's Encrypt)
- ✅ HTTPS by default
- ✅ Auto-renewal

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify forms work correctly
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify animations perform well
- [ ] Check console for errors
- [ ] Test page load speed (aim for <3s)
- [ ] Verify SEO meta tags
- [ ] Set up analytics
- [ ] Configure contact form backend
- [ ] Test on slow 3G connection

## Monitoring & Analytics

### Recommended Tools
- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - User behavior tracking
- **Sentry** - Error tracking
- **LogRocket** - Session replay

### Add Google Analytics
```tsx
// app/layout.tsx
import Script from 'next/script'

// Add in <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update

# Check for security issues
npm audit
npm audit fix
```

### Backup Strategy
- Keep GitHub repository as source of truth
- Tag releases: `git tag v1.0.0`
- Document major changes in CHANGELOG.md

---

**Deployment Time**: ~5 minutes to Vercel
**Expected Load Time**: <2 seconds
**Uptime**: 99.9% (on Vercel/Netlify)
