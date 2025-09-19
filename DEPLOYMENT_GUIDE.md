# 🚀 Maszynownia - Netlify Deployment Guide

## ✅ Pre-Deploy Checklist

Projekt jest gotowy do deploymentu na Netlify z następującymi funkcjami:

### 📦 Included Features:
- ✅ **React 18.3.1** + **Vite 7.1.5** (ultra-fast builds)
- ✅ **Netlify CMS** ready (admin panel at `/admin`)
- ✅ **Responsive design** (mobile-first)
- ✅ **SEO optimized** (meta tags, Schema.org)
- ✅ **Wouter routing** (SPA with client-side routing)
- ✅ **React Helmet Async** (dynamic meta tags)
- ✅ **6 dependencies only** (minimal bundle size)
- ✅ **Production build tested** (299.8KB JS, 62.5KB CSS)

---

## 🌐 Netlify Deployment Steps

### Step 1: GitHub Repository
1. Push your code to GitHub repository
2. Ensure all files are committed and pushed

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Use these build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Branch**: `main`

### Step 3: Environment Variables
Set up in Netlify dashboard under Site Settings > Environment Variables:
```
NODE_VERSION=18
```

### Step 4: Enable Netlify Identity
1. Go to Site Settings > Identity
2. Click "Enable Identity"
3. Set registration to "Invite only"
4. Enable Git Gateway under Services

### Step 5: Configure Domain
1. Go to Site Settings > Domain management
2. Add custom domain: `maszynownia.pl`
3. Configure DNS records at your domain provider

---

## 🛠️ Netlify CMS Setup

### Admin Access:
- **URL**: `https://yoursite.netlify.app/admin`
- **Authentication**: Netlify Identity (invite-only)

### Content Management:
The CMS allows editing:
- 📰 **News articles** (`/strefagimnastyki/aktualnosci`)
- 👥 **Team members**
- 📍 **Locations and pricing**
- 🏃 **Services** (warsztaty, obozy, urodziny, etc.)
- ⚙️ **Settings** (contact info, SEO)

### First Admin User:
1. After deployment, go to `/admin`
2. Sign up with email
3. Check your email for confirmation
4. You're now the admin!

---

## 📊 Performance Expectations

### Lighthouse Scores Target:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Bundle Size:
- **JavaScript**: ~300KB (gzipped: 85KB)
- **CSS**: ~62KB (gzipped: 11KB)
- **Total**: <400KB initial load

---

## 🔒 Security Features

### Included Headers (netlify.toml):
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### Cache Optimization:
- Images: 1 year cache
- JS/CSS: 1 year cache with immutable
- HTML: No cache (for dynamic updates)

---

## 📱 Mobile Experience

### Perfect Mobile Support:
- ✅ Touch-friendly buttons (44px minimum)
- ✅ Responsive typography
- ✅ Optimized images (WebP format)
- ✅ Fast loading on mobile networks
- ✅ Progressive enhancement

---

## 🎯 SEO Configuration

### Already Optimized:
- ✅ **Meta tags** (title, description, keywords)
- ✅ **Open Graph** (Facebook/social sharing)
- ✅ **Twitter Cards**
- ✅ **Schema.org** LocalBusiness markup
- ✅ **Sitemap** support ready
- ✅ **Canonical URLs**

### Local SEO:
- Business location: Józefów, Michalin, Góra Kalwaria
- Phone: 696 376 377
- Services: EMS training, children's gymnastics

---

## 🚀 Post-Deployment Tasks

### 1. Verify Functionality:
- [ ] All pages load correctly
- [ ] Contact forms work
- [ ] Mobile navigation works
- [ ] `/admin` CMS access works

### 2. SEO Setup:
- [ ] Submit to Google Search Console
- [ ] Add to Google My Business
- [ ] Generate and submit sitemap

### 3. Analytics:
- [ ] Add Google Analytics 4
- [ ] Set up conversion tracking
- [ ] Monitor Core Web Vitals

### 4. Content Management:
- [ ] Create first admin user
- [ ] Add real news articles
- [ ] Update team photos
- [ ] Verify contact information

---

## 🆘 Troubleshooting

### Common Issues:

**Build Failed**
- Check Node.js version (should be 18)
- Verify package.json scripts

**CMS Not Working**
- Enable Netlify Identity
- Enable Git Gateway
- Check admin/config.yml

**Routing Issues (404)**
- Verify netlify.toml redirects
- Check wouter routing configuration

**Images Not Loading**
- Verify images are in `/public/images/`
- Check file extensions (.webp supported)

---

## 📞 Support

For technical issues contact:
- **GitHub Issues**: Repository issue tracker
- **Netlify Support**: For hosting-related problems

**Project Status**: ✅ PRODUCTION READY