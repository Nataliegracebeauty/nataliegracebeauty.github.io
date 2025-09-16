# Natalie Grace Beauty — Static Site
Cute + simple, light pink & white stripes, fine-line floral corners. Pages:
- `index.html` (home + waitlist)
- `services.html`
- `portfolio.html`
- `booking.html`
- `styles.css`, `script.js`, `floral.svg`
- `client-notes-template.csv` (for your private notes)

## Publish (free)
- **Netlify**: Drag the folder onto the dashboard -> live. Add a custom domain later.
- **GitHub Pages**: Create `nataliegrace.github.io` (or similar), upload files.
- **Cloudflare Pages**: Similar drag & drop.

## Waitlist form (no backend yet)
Right now the form shows a “Thanks!” message. To collect emails:
- **Formspree**: replace `<form id="waitlist-form">` with an action URL from Formspree.
- **Netlify Forms**: add `data-netlify="true"` to the form and deploy on Netlify.

## Booking (later)
- Create a Calendly Event Type and paste the embed in `booking.html` (instructions on that page).
- Connect Google Calendar inside Calendly to auto-block your time and send reminders.

## Private client notes (off-website)
Use the included `client-notes-template.csv` as a starting point in **Google Sheets** or **Airtable**.
Suggested columns cover examples like:
- "Dad: 1–2 guard, brows + ears"
- "Root touch-up; drag-through on subsections; haircut every other visit; every 4–6 weeks"
Keep this private; do not publish the sheet. Consider separate tabs for “Hair”, “Formulas”, “Timing”, “Notes”.

## Styling tweaks
- Colors are in `:root` at the top of `styles.css`.
- Stripes use `repeating-linear-gradient`.
- Fine-line florals are `floral.svg` stamped on hero cards.
