# Finn Schaefer Personal Site

Static personal website for `www.finnis.me`, designed for GitHub Pages.

## Structure

- `index.html`: page structure and sections
- `styles.css`: dark theme, layout, motion, and responsive styles
- `script.js`: content data plus rendering for updates, posts, and projects
- `CNAME`: custom domain configuration

## Updating Content

Edit the arrays at the top of [`/Users/finn/Desktop/Money-maker/FinnSchaefer/script.js`](/Users/finn/Desktop/Money-maker/FinnSchaefer/script.js):

- `updates`: short status notes
- `posts`: blog posts and field notes
- `projects`: featured work

Each post supports:

- `meta`: small label shown on the card and dialog
- `title`: headline
- `excerpt`: preview copy on the homepage
- `tags`: chip list
- `body`: array of paragraphs shown in the modal article view

## Local Preview

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.
