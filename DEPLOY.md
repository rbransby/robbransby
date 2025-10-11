# Deployment Instructions

Your "Fractional CTO + Automation" marketing site is now ready for deployment! Follow these steps to deploy to Vercel:

## Option 1: Deploy via Vercel CLI (Recommended)

1. Open your terminal in the project directory (`fractional-cto-automation`)

2. Login to Vercel:

```bash
vercel login
```

3. Deploy to preview:

```bash
vercel
```

4. Deploy to production:

```bash
vercel --prod
```

## Option 2: Deploy via GitHub

1. Push your code to a GitHub repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/fractional-cto-automation.git
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

## Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Click "Upload"
4. Drag and drop the `fractional-cto-automation` folder
5. Click "Deploy"

## Post-Deployment Setup

### 1. Environment Variables

Add these in Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_BRAND_NAME="Fractional CTO + Automation"
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-handle/30min"
NEXT_PUBLIC_CONTACT_EMAIL="hello@example.com"
NEXT_PUBLIC_CITY="Perth, WA"
NEXT_PUBLIC_SITE_URL="https://your-domain.vercel.app"
```

### 2. Analytics

1. Go to your Vercel project dashboard
2. Navigate to the "Analytics" tab
3. Enable "Web Analytics" (free tier available)
4. Enable "Speed Insights" (optional)

### 3. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## Local Testing

Before deploying, you can test the production build locally:

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Quick Deploy Link

For the fastest deployment, use this link:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/fractional-cto-automation)

## Troubleshooting

- If deployment fails, check the build logs in Vercel dashboard
- Ensure all environment variables are set correctly
- Make sure Node.js version is 18+ in Vercel settings

## Support

For deployment issues:

- Check [Vercel Documentation](https://vercel.com/docs)
- Visit [Vercel Support](https://vercel.com/support)

Your site will be live at: `https://[project-name].vercel.app`
