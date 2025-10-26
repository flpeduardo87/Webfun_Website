# Welcome to your Webfun project

## Project info

**URL**: https://webfun.dev/projects/5200bdfd-4610-4e89-9f58-acc6f45d3f22

## How can I edit this code?

There are several ways of editing your application.

**Use Webfun**

Simply visit the [Webfun Project](https://webfun.dev/projects/5200bdfd-4610-4e89-9f58-acc6f45d3f22) and start prompting.

Changes made via Webfun will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Webfun.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Webfun](https://webfun.dev/projects/5200bdfd-4610-4e89-9f58-acc6f45d3f22) and click on Share -> Publish.

## Can I connect a custom domain to my Webfun project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.webfun.dev/features/custom-domain#custom-domain)

## Deploying to your hosting

This is a static SPA built with Vite + React. The production build outputs plain HTML/CSS/JS into the `dist/` folder.

- Shared hosting (Apache/cPanel):

  - Ensure `public/.htaccess` is deployed to enable client-side routing.
  - Upload the contents of `dist/` to your domain's document root (e.g., `public_html/`).
  - If your site is in a subfolder, make sure your links are relative and your server points the folder as the document root for that subdomain.

- Nginx:

  - Serve `dist/` and add a SPA fallback:
    - `try_files $uri $uri/ /index.html;`

- Static hosts (Netlify, Vercel, Cloudflare Pages, GitHub Pages):
  - Upload `dist/` or connect repo and set the build command to `npm run build` and output directory to `dist`.
  - For Netlify, add a `_redirects` file with `/* /index.html 200` at the project root or in `public/`.

After deploying, test routes and dark/light modes, and verify assets like `logo.svg` and `logo-dark.svg` load correctly.
