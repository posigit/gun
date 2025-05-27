# Netlify Deployment Guide

This document outlines the steps taken to deploy our Next.js application to Netlify.

## Setup Steps

1. **Created Configuration Files**

   - `netlify.toml`: Configuration for build settings and redirects
   - `.nvmrc`: Specifies Node.js version

2. **Installed Dependencies**

   - Added Netlify Next.js plugin: `npm install -D @netlify/plugin-nextjs`

3. **Repository Setup**
   - Connected GitHub repository: https://github.com/posigit/gun

## Build Configuration

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NETLIFY_NEXT_PLUGIN_SKIP = "true"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Deployment

Deployment can be done through:

1. **Netlify UI**

   - Connected to GitHub repository
   - Build settings automatically detected from netlify.toml

2. **Netlify CLI**
   - Used commands:
     ```
     netlify login
     netlify init
     netlify deploy --prod
     ```

## Next.js Specific Considerations

When deploying Next.js to Netlify, keep in mind:

1. **Image Optimization**
   - Next.js image optimization may need configuration
   - We've set `unoptimized: true` in next.config.mjs

2. **API Routes**
   - API routes are automatically handled as Netlify functions
   - Each API route becomes a serverless function

3. **SSR Support**
   - Server-side rendering is supported through Netlify Edge Functions
   - The @netlify/plugin-nextjs handles this automatically

4. **Environment Variables**
   - Next.js requires environment variables to be prefixed with `NEXT_PUBLIC_` to be exposed to the browser

## Troubleshooting

If you encounter build issues:

1. Check for TypeScript errors
2. Verify Next.js compatibility with Netlify
3. Ensure all dependencies are correctly installed
4. Examine build logs in the Netlify dashboard

## Continuous Deployment

Continuous deployment is enabled by default. Each push to the main branch will trigger a new build and deployment.

## Environment Variables

Any required environment variables should be set in the Netlify UI under:
Site settings > Build & deploy > Environment variables

## Performance Optimization

1. **Build Caching**
   - Netlify automatically caches build dependencies
   - You can optimize build times by using the Netlify build cache

2. **Edge Functions**
   - Consider using Netlify Edge Functions for performance-critical routes

## Resources

- [Netlify Next.js Plugin Documentation](https://github.com/netlify/netlify-plugin-nextjs)
- [Next.js on Netlify Documentation](https://docs.netlify.com/frameworks/next-js/overview/)
