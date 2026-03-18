

## Orbital Index — Link-in-Bio Site

A clean, modern link-in-bio page with a central profile avatar and links presented as high-quality cards with status indicators.

### Layout
- **Mobile-first**, single column, max-width `640px` centered on desktop
- Strict 4px/8px grid, `px-4` padding on mobile

### Profile Header (L1)
- Large circular avatar (40px border-radius) centered at top
- Name in bold Geist Sans, 600 weight
- Short bio with `text-wrap: balance`, left-aligned
- Subtitle: "Selected Works & Coordinates"

### Filter Pills
- Horizontal row of small pills: **All**, **Projects**, **Socials**, **Contact**
- Active pill = solid background, inactive = ghost/muted
- Smooth transition between states

### Link Cards (L2)
- Each link is a card with:
  - 16:9 image/thumbnail area (or icon for socials/contact)
  - Bold title + short description
  - Status dot: green = "Live", amber = "WIP"
  - Subtle card shadow (no borders), 16px radius
- Cards hover: lift up 2px with deeper shadow, tap: scale 0.98
- Filtering animates cards in/out smoothly

### Utility Row (L3)
- Bottom row of small `44x44px` icon buttons for quick social links (Twitter, GitHub, Email)
- All icons use a single accent color (no brand colors)

### Motion
- Staggered fade-in entrance from bottom on page load
- `cubic-bezier(0.2, 0, 0, 1)`, 200ms transitions
- Shimmer skeleton loading states for image cards

### Color Palette
- White background, near-black text, muted card backgrounds
- Accent: Stripe-style blue for interactive elements and status dots
- No gradients

### Typography
- Geist Sans for headings/body
- Geist Mono uppercase for small labels (category tags, status text)

### Data
- Hardcoded link data (no backend needed) with placeholder images
- ~4 sample links: 2 project cards, 1 social link, 1 contact card

