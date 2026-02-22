# Go Find Patrick — Setup Guide

Everything you need to go from these files → live on gofindpatrick.com.

---

## Step 1 — Create your accounts

Do these first. All free.

| Account | URL | Notes |
|---------|-----|-------|
| GitHub | https://github.com/signup | Where your site files live |
| Netlify | https://netlify.com | Hosts the site, auto-deploys on every save |
| Cloudinary | https://cloudinary.com | Photo storage (free tier is plenty) |

---

## Step 2 — Install Node.js on your computer

1. Go to https://nodejs.org
2. Download the **LTS** version (the left button)
3. Run the installer, click through defaults
4. Open Terminal (Mac: Cmd+Space → type Terminal) and check it worked:
   ```
   node --version
   ```
   You should see something like `v20.x.x`

---

## Step 3 — Install dependencies and run locally

1. Open Terminal
2. Navigate to this folder:
   ```
   cd "/path/to/Go Find Patrick Blog/go-find-patrick"
   ```
   (Replace the path with wherever you saved this folder)

3. Install packages:
   ```
   npm install
   ```

4. Start the local dev server:
   ```
   npm run dev
   ```

5. Open http://localhost:4321 in your browser — you should see the blog!

---

## Step 4 — Push to GitHub

1. Go to https://github.com/new
2. Create a new **private** repository named `go-find-patrick`
3. Leave everything else as defaults, click **Create repository**

4. Back in Terminal (in the go-find-patrick folder), run:
   ```
   git init
   git add .
   git commit -m "Initial commit — Go Find Patrick"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/go-find-patrick.git
   git push -u origin main
   ```
   (Replace YOUR-USERNAME with your actual GitHub username)

---

## Step 5 — Deploy on Netlify

1. Log into https://netlify.com
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** and authorise Netlify to access your repos
4. Select your `go-find-patrick` repository
5. Settings will auto-detect (netlify.toml is already configured):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**

Netlify will build and deploy. You'll get a URL like `magical-name-123.netlify.app` within 2 minutes.

**From now on:** every time you push to GitHub, Netlify rebuilds automatically.

---

## Step 6 — Connect gofindpatrick.com

1. In Netlify, go to **Site settings → Domain management**
2. Click **Add custom domain** → enter `gofindpatrick.com`
3. Netlify will show you DNS records to add
4. Log into wherever you bought the domain (Namecheap, GoDaddy, etc.)
5. Add the DNS records Netlify shows you (usually two CNAME or A records)
6. Wait 5–30 minutes for DNS to propagate

Netlify also handles SSL/HTTPS automatically — no extra setup needed.

---

## Step 7 — Enable the visual editor (Decap CMS)

This lets you write posts from a web interface without touching code.

1. In Netlify: **Site settings → Identity** → click **Enable Identity**
2. Scroll to **Registration** → set to **Invite only**
3. Go to **Site settings → Identity → Services → Git Gateway** → click **Enable Git Gateway**
4. Invite yourself: go to **Identity** tab → **Invite users** → enter your email
5. Check your email, click the link, set a password
6. Visit `https://gofindpatrick.com/admin` to write posts visually

---

## Adding new posts

**Option A — Markdown file (fastest):**

Copy any file in `src/content/blog/`, rename it, update the frontmatter and content, push to GitHub.

**Option B — Visual editor:**

Go to `https://gofindpatrick.com/admin`, log in, click **New Blog Post**, fill in the form.

The frontmatter fields that matter most:
- `title` — the headline
- `excerpt` — shown on cards and in the hero
- `date` — e.g. `February 2026`
- `location` — e.g. `Tokyo, Japan`
- `country` — used for destination filter (`canada`, `korea`, `vietnam`, `brazil`, or `other`)
- `category` — `hotel`, `food`, `coffee`, or `travel`
- `heroImage` — a URL to a full-width image (Unsplash works great)
- `breakdown` — your rating categories with scores out of 5
- `featured: true` — makes this post the homepage hero

---

## Photo workflow with Cloudinary

1. Log into https://cloudinary.com
2. Upload your photos to the Media Library
3. Click any photo → copy the URL
4. Paste into `heroImage` or `gallery` in your post frontmatter

For Unsplash photos (as used now), the URL pattern is:
`https://images.unsplash.com/photo-ID?w=1400&q=80`

---

## Questions?

Email: contact@gofindpatrick.com
