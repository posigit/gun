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

## Troubleshooting

If you encounter build issues:

1. Check for TypeScript errors
2. Verify Next.js compatibility with Netlify
3. Ensure all dependencies are correctly installed

## Continuous Deployment

Continuous deployment is enabled by default. Each push to the main branch will trigger a new build and deployment.

## Environment Variables

Any required environment variables should be set in the Netlify UI under:
Site settings > Build & deploy > Environment variables
