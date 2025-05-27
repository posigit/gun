# Next.js Project

## Deployment Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-NETLIFY-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

## Deploying to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Netlify account
3. Click "New site from Git"
4. Choose your Git provider and repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI globally:

   ```
   npm install -g netlify-cli
   ```

2. Log in to your Netlify account:

   ```
   netlify login
   ```

3. Initialize your site:

   ```
   netlify init
   ```

4. Deploy your site:
   ```
   netlify deploy --prod
   ```

## Development

### Local Development

```
npm run dev
```

### Build

```
npm run build
```

### Start Production Server

```
npm start
```

## Features

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI Components
- Netlify Deployment
