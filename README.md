# The Stare Department

A silly shoebill character builder with a dark, electric interface.

## Run locally

Open `index.html` in a browser. No build step or backend is required.

Offline support only works when the site is served over HTTP, not opened as a file. To test it locally, run `python3 -m http.server` in the repository root and open `http://localhost:8000`.

## Install and use offline

The site is a Progressive Web App (PWA), so it can be added to a phone or tablet home screen and used without an internet connection.

1. While online, open https://mmmavis.github.io/stare-department/.
2. Add it to the home screen: on iPhone or iPad, tap Share, then Add to Home Screen; on Android, open the Chrome menu, then Add to Home screen or Install app.
3. Open it once from the home screen while still online, so the fonts are saved too.

After that it opens and works offline, including saving birds and downloading images. When online, it always loads the latest version.

## Files

- `index.html`: page markup.
- `styles.css`: all styles, including the Google Fonts import.
- `script.js`: the bird editor, local saving, and PNG/SVG export.
- `favicon.svg`: browser tab icon.
- `og-image.png`: link preview image for Slack and social media (1200 × 630).
- `manifest.webmanifest`: app name, colours, and icons for installing to a home screen.
- `sw.js`: service worker that saves the site's files for offline use.
- `icons/`: home screen app icons.

## Features

- Drag, resize, rotate, recolor, duplicate, flip, and layer bird parts.
- Generate random birds and undo edits.
- Automatically save the current bird in browser local storage.
- Download transparent SVG and PNG images.

## Publish

Publish the repository root with GitHub Pages. The entry point is `index.html`.

## Privacy and dependencies

Bird designs stay in the browser. There is no analytics or backend service.
The page loads DM Sans and Space Grotesk from Google Fonts. The service worker keeps a copy of these fonts in the browser so they still work offline.
