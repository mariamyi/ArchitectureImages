# Site Studies — A Chicago Architecture Slide Deck

A responsive, accessible slide deck that presents nine architecture-studio
**site-analysis** images, each rooted in a Chicago neighborhood. Every slide pairs
the image with concise **alt text** (for screen readers) and a longer, lively
**description** (for sighted readers). The deck is styled in an **Art Deco / Prairie
School** Chicago aesthetic and the slides are **grouped by neighborhood**.

## View it

It's a static site with no build step or dependencies.

- **Quickest:** open `index.html` in a browser.
- **Recommended** (so image paths with spaces/`+` resolve cleanly and fonts load):

  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

- **Host it:** push to GitHub and enable **GitHub Pages** on this branch — the deck
  is served as-is from the repository root.

## Navigate

- **Prev / Next** buttons
- **← / →** arrow keys (plus **Home** / **End** to jump to the first/last slide)
- **Swipe** left/right on touch screens
- **Diamond dots** jump straight to a slide

## Project structure

| File         | Purpose                                                              |
|--------------|----------------------------------------------------------------------|
| `index.html` | Markup shell, header/footer, deck container, controls                |
| `styles.css` | Art Deco / Prairie theme, responsive layout, print styles            |
| `script.js`  | Renders slides from the data file; nav, keyboard, swipe, ARIA live   |
| `slides.js`  | **Single source of truth** — one object per slide                    |
| `*.jpg`      | The nine site-analysis images                                        |

## Adding or reordering slides

Edit only `slides.js`. Each entry looks like:

```js
{
  id: "unique-id",
  group: "Neighborhood Name",
  semester: "F25 + S26",
  title: "Slide Title",
  src: "URL%2Bencoded%20path.jpg", // encode spaces (%20) and plus signs (%2B)
  alt: "Concise factual alt text for screen readers.",
  description: "Longer, lively description for sighted readers."
}
```

> **Note on filenames:** the image files contain spaces and `+` characters, so the
> `src` value must be URL-encoded (`%20` for space, `%2B` for `+`). Otherwise the
> browser reads `+` as a space and the image fails to load.

## Accessibility

- Every image has descriptive `alt` text; decorative ornaments are CSS-only.
- The deck is a labeled region; an `aria-live` status announces slide changes.
- Controls are real buttons with labels, full keyboard support, and visible focus rings.
- Respects `prefers-reduced-motion` and includes print styles (one slide per page).
