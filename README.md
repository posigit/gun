# Next.js Project

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

## Local Development

```
npm run dev
```

## Build

```
npm run build
```
