# rclasstra.github.io

Public landing / proposal page for **rClassTra** — an offline-first, LAN-based
classroom platform. The teacher runs it on a laptop; students join over the same
WiFi. Live presentations, auto-graded quizzes, attendance, and analytics, with no
internet required.

This repository is a static site served by **GitHub Pages**.

## Publishing

1. Create a repo named `rclasstra.github.io` under the `rclasstra` GitHub account
   (an org or user named `rclasstra`).
2. Push the contents of this folder to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, branch `main`, folder `/ (root)`.
4. The site goes live at `https://rclasstra.github.io/`.

```bash
cd rclasstra.github.io
git init
git add .
git commit -m "rClassTra landing site"
git branch -M main
git remote add origin https://github.com/rclasstra/rclasstra.github.io.git
git push -u origin main
```

## Structure

```
index.html              Single-page landing site
.nojekyll               Serve /assets as-is (skip Jekyll processing)
assets/
  css/style.css         All styles
  js/main.js            Mobile menu + scroll reveal
  img/                  Logo, wordmark, network topology diagram
  shots/                Real UI screenshots (desktop + mobile)
```

## Screenshots

The images in `assets/shots/` are captured from the real rClassTra app running
with demo data. To refresh them, re-run the capture against a running server and
drop the new PNGs into `assets/shots/` with the same filenames.

## Editing

- **Pilot request form:** the "Request a pilot" button links to the Google Form
  at `https://forms.gle/k2a6MiBhMTw2Tgzc8`. Search `index.html` for `forms.gle`
  to change it.
- **Download email:** the "Email to download" button uses a `mailto:` with a
  placeholder address (`richard.estrada@example.com`). Search `index.html` for
  `mailto:` and set your real address.
- **Sections:** the page covers Problems→Solutions, Features, a Product tour,
  Exam integrity (with the cheating warning / lockout / teacher approve-deny
  screenshots), Light & dark themes, How it works (network topology), Devices,
  Why (for leadership), a pilot CTA, and an FAQ.

## Image credits

- App screenshots in `assets/shots/` are captured from the real rClassTra app.
- Photos in `assets/img/stock/` are free-to-use stock images from
  [Pexels](https://www.pexels.com/) (Pexels License — free for commercial and
  non-commercial use, no attribution required).
