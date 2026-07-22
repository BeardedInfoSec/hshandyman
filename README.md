# Handoff: Hot Shot Handyman — Marketing Website

## Overview
A single-page, mobile-first marketing website for **Hot Shot Handyman**, a licensed & insured handyman + landscaping business serving Nashville, TN and surrounding areas (owner relocated from Memphis). The page's job is to convert local homeowners into leads via three primary actions: **request a free quote**, **text**, and **message on Facebook**. Content leans into a rugged, trustworthy, faith-and-family tone with real job photos.

> **Brand update:** The company was renamed from Music City Landscape & Repairs to Hot Shot Handyman in July 2026. The `.dc.html` file remains an archival reference for the original design; `index.html` contains the current production branding.

Scope of the current design: a single scrolling page. There is an appetite (not yet built) for: a sticky bottom action bar, service-area section, "how it works" steps, FAQ, gallery lightbox, live Facebook feed, and SEO metadata — see **Recommended Next Additions** at the end.

## About the Design Files
The file in this bundle (`Music City Landscape and Repairs.dc.html`) is a **design reference created in HTML** — a working prototype that shows the intended look, layout, copy, and behavior. It is **not** production code to ship as-is. It was authored in a proprietary "Design Component" (`.dc.html`) format with a small runtime; **do not** try to reuse that runtime.

**Your task:** recreate this design in the target codebase's environment using its established patterns and libraries. If there is no existing codebase yet, choose an appropriate stack — a static-friendly React framework like **Next.js** or **Astro** is a good fit for a small marketing site, but plain semantic HTML + CSS is entirely sufficient and arguably ideal here (fast, cheap to host, easy for the owner to maintain). Whatever you pick, ship semantic, accessible, responsive markup.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final and intended to be recreated faithfully. Exact values are in **Design Tokens** below. The design is mobile-first and currently centered in a max-width column (520px) — on desktop you should either keep the phone-like centered column or, better, adapt sections into a proper responsive desktop layout (multi-column services grid, wider hero, etc.) while preserving the visual language.

## Layout & Sections (top to bottom)
The whole page is a vertical stack inside a centered column, `max-width: 520px; margin: 0 auto; background: #191b1e; overflow: hidden`.

1. **Sticky Header** — `position: sticky; top: 0; z-index: 50`, translucent dark bg `rgba(20,22,25,.92)` with `backdrop-filter: blur(10px)`, 1px bottom border `rgba(255,255,255,.08)`. Left: Hot Shot Handyman logo and wordmark. Right: orange "📞 Call" button linking `tel:+16156336489`, with a pulsing ring animation (`pulseRing`, 2.4s infinite).

2. **Hero** — full-bleed photo (`651188245…jpg`, cedar fence) at `height: 520px; object-fit: cover; filter: brightness(.5)`, with a top-to-bottom gradient overlay fading to `#191b1e`. Content bottom-aligned, `padding: 0 22px 30px`:
   - Eyebrow: "Licensed & Insured · Nashville, TN" (Barlow Condensed 700, 13px, letter-spacing .2em, uppercase, orange).
   - `<h1>` Archivo Black, 44px, line-height 1: "ONE CALL. / YARD TO / ROOFLINE." ("ROOFLINE." in orange).
   - Paragraph, 16px, `rgba(255,255,255,.8)`, max-width 400px.
   - Primary CTA "Get a free quote →" (full-width orange button → `#quote`). Below it a 2-button row: "📱 Text us" (`sms:+16156336489`) and "💬 Messenger" (`https://m.me/musiccitylandscapeandrepairsllc`, blue-tinted).

3. **Trust Marquee** — orange band `#f26a1b`, single line scrolling right-to-left infinitely (`marq`, 22s linear). Content (Barlow Condensed 700, uppercase, dark text), duplicated once for seamless loop: `★ Licensed & Insured · ★ Faith & Family Owned · ★ Honest Pricing · ★ Nashville & Surrounding Areas`.

4. **Our Promise** — `padding: 40px 22px 8px`. Eyebrow "Our promise", `<h2>` "HONEST WORK, / DONE RIGHT", intro paragraph telling the Memphis→Nashville, faith, honest-pricing story. Then three horizontal value cards (icon tile + title + subtitle), bg `#22252a`, border `rgba(255,255,255,.06)`, radius 10px:
   - 🤝 **Honest, Upfront Pricing** — "A fair quote and no surprise charges — ever."
   - ✝️ **Faith-Driven Values** — "Integrity and respect on every job, big or small."
   - 🛠️ **Right The First Time** — "We take pride in work we'd put our name on."

5. **Services** — `id="services"`, `padding: 44px 22px 30px`. Eyebrow "What we do", `<h2>` "FROM FIX-IT TO / FULL CURB APPEAL", note "No HVAC, major plumbing, or major electrical — everything else, we've got covered." Then a 2-column grid (`gap: 11px`) of 7 cards (icon, uppercase name in Barlow Condensed 18px, subtitle 12.5px muted):
   - 🌿 Lawn Care — Mowing, edging, cleanups
   - 🌳 Landscaping — Planting, beds, mulch
   - 🧱 Hardscapes — Patios, walkways, walls
   - 🪵 Fence & Deck — Build, repair, stain
   - 🔧 Handyman Repairs — Doors, trim, fascia & more
   - 💦 Pressure Washing — Drives, siding, decks
   - 🍂 Gutter Cleaning — Clear, flush, secure

6. **Before/After Slider** — `padding: 24px 22px 34px`. Eyebrow "Real results", `<h2>` "DRAG TO SEE / THE DIFFERENCE". Interactive comparison: a 100%-wide, 340px-tall rounded container (`cursor: ew-resize`). The **after** image (`646757462…jpg`, new white door) fills the container. An **overlay div** clipped to `width: {pct}%` reveals the **before** image (`646813664…jpg`, old black door); the before `<img>` inside is sized to the container's full pixel width (`max-width: none`) so it doesn't squish as the clip narrows. A 3px orange divider sits at `left: {pct}%` with a round 38px orange knob (↔). "BEFORE" and "AFTER" pill labels top-left/top-right. Caption below: "Exterior door replacement · Nashville". See **Interactions** for drag math.

7. **Gallery Strip** — horizontally scrolling row (`overflow-x: auto`, hidden scrollbar) of 5 cards, each 210px wide with a 260px image + caption. Photos + captions listed in **Assets**.

8. **Stats Band** — bg `#22252a`, `padding: 34px 22px`. 2-column grid, big orange Archivo Black numbers (34px) + label:
   - **1st** — Time it's done right — no callbacks
   - **100%** — Licensed & fully insured
   - **7 days** — Quick quotes, flexible scheduling
   - **5.0★** — Rating from happy neighbors

9. **Testimonials** — `padding: 44px 22px 34px`. Eyebrow "Neighbors talk", `<h2>` "WHAT NASHVILLE / IS SAYING". One orange card (radius 14px, min-height 220px) showing the active review: big decorative "“", quote (600, 18px, dark), name (uppercase) + area, 5 stars. Auto-rotates every 5s; a row of dot indicators below — active dot is a 26px-wide pill (dark), others 8px (translucent), all clickable to jump. **4 reviews** (fictional placeholders, approved by client):
   - "Fixed our fence, pressure-washed the drive, and rebuilt a flowerbed — all in one visit. Unreal work ethic." — **Dana R.**, East Nashville
   - "He replaced a rotted exterior door and it looks better than the day we moved in. On time, spotless cleanup." — **Jessica M.**, Bellevue
   - "Rebuilt the whole fascia after water damage. Honest pricing and he showed me every step. Highly recommend." — **Travis K.**, Donelson
   - "Best money I've spent on this house. He treats your place like it's his own. Already booked him again." — **Marcus & Lynn B.**, Antioch

10. **Facebook Feed** — `padding: 12px 22px 34px`. Header: blue "f" tile + "FROM FACEBOOK" + right-aligned "Follow →" link. Two styled post cards (avatar "MC", name, relative time, text, 220px photo, ❤️/💬 counts, "View on Facebook" link). **These are static placeholders styled to look like FB posts** — see next-steps about a real embed. Post content is in **Assets**. All FB links point to `https://www.facebook.com/musiccitylandscapeandrepairsllc`.

11. **Quote Form** — `id="quote"`, bg `#22252a`, `padding: 44px 22px 40px`. Eyebrow "Free · No obligation", `<h2>` "REQUEST YOUR / FREE QUOTE". Fields (dark inputs, border `rgba(255,255,255,.14)`, radius 8px): **name** (text), **phone** (text), **service** (`<select>` populated from the 8 service names + a "What do you need?" placeholder option), **notes** (textarea, optional). Orange "Send request →" submit button. Below: "or reach us directly" + a 3-button row (📱 Text, 📞 Call, 💬 FB). On submit with a non-empty name, the form is replaced by a success card (✅, "THANKS, {firstName}!", follow-up text with the phone number). See **State Management** + **Interactions** — note this is currently a **client-only** success state with **no backend**; you must wire real submission.

12. **Footer** — bg `#101214`, `padding: 30px 22px 34px`. Logo, description ("Licensed & insured handyman and landscaping serving Nashville & surrounding areas. No HVAC, major plumbing, or major electrical."), stacked contact links (📞 call, 📱 text, f Facebook), thin divider, and copyright.

## Interactions & Behavior

**Scroll reveal** — every element marked `data-reveal` starts at `opacity: 0; translateY(26px)` and transitions to `opacity: 1; translateY(0)` over `.65s cubic-bezier(.2,.6,.2,1)` when it enters the viewport. Implemented with `IntersectionObserver` (`threshold: .15`), unobserving after reveal. Recreate with an equivalent (e.g. a `useInView` hook / CSS `@starting-style` / small IO utility). Respect `prefers-reduced-motion` — you should add a reduced-motion fallback (the current prototype does not).

**Header call button** — CSS keyframe `pulseRing`: expanding box-shadow ring, `2.4s infinite`.

**Trust marquee** — keyframe `marq`: `translateX(0)` → `translateX(-50%)`, `22s linear infinite`. Content is duplicated so the -50% wrap is seamless.

**Before/after slider** — drag anywhere in the container (mouse or touch):
- On `mousedown`/`touchstart` set a `dragging` flag and immediately update position.
- On window `mousemove`/`touchmove` (touch listener non-passive so `preventDefault` works), compute `x = clientX − container.left`, then `pct = clamp((x / width) * 100, 0, 100)`. Store `pct` and the container pixel width.
- On `mouseup`/`touchend` clear `dragging`.
- The revealed (before) image must be rendered at the container's full pixel width with `max-width: none` and `object-fit: cover` so it stays aligned while its parent's width shrinks. Default `pct` = 50.
- Add keyboard accessibility (e.g. a visually-hidden range input, or arrow-key handling on a focusable divider) — the prototype is pointer-only.

**Testimonials** — `setInterval` advances the active index every 5000ms, wrapping modulo count; clicking a dot sets the index. Clear the interval on unmount. Consider pausing on hover/focus and adding aria-live.

**Quote form** — controlled inputs. On submit: `trim` the name; if empty, `alert(...)` and abort; else set `submitted = true` and capture the first word of the name for the thank-you. **No network call exists** — you must add real handling (see State Management).

## State Management
Minimal local UI state:
- `baPct` (number, default 50) and `baImgW` (container width px) — before/after slider.
- `dragging` (bool, non-render ref is fine) — slider drag flag.
- `active` (int, default 0) — current testimonial index; driven by interval + dot clicks.
- `submitted` (bool) + `sentName` (string) — quote-form success state.
- `fName`, `fPhone`, `fService`, `fNotes` (strings) — controlled form fields.

**Data fetching / backend (must be added):**
- **Quote form** needs a real destination — an email/SMS service, a form backend (Formspree/Basin/etc.), or an API route that notifies the owner. Add validation (require name + a phone or contact method; sanitize input) and real success/error states.
- **Facebook feed** is faked. Either keep curated static posts (simplest, fast) or integrate the real feed (Facebook Page Plugin `<iframe>`, or Graph API with a page token + caching). Discuss with owner; the Page Plugin is the low-effort path.

## Design Tokens

**Colors**
- Background (page/dark): `#191b1e`
- Surface / cards: `#22252a`
- Footer / deepest: `#101214`
- Header translucent: `rgba(20,22,25,.92)`
- Primary accent (orange): `#f26a1b`  ·  hover/light: `#ff8340`
- Facebook blue: `#4267B2`  ·  blue text on dark: `#8fb0e8`  ·  blue tint bg: `rgba(66,103,178,.18)`
- Text on dark: `#ffffff`; muted: `rgba(255,255,255,.8)` / `.75` / `.55` / `.5` / `.45` / `.35`
- Hairline borders: `rgba(255,255,255,.06)` – `.14`
- Text on orange: `#191b1e` (near-black); muted-on-orange `rgba(25,27,30,.7)`
- `::selection`: bg `#f26a1b`, text `#191b1e`

**Typography** (Google Fonts)
- **Archivo Black** (400) — display headlines & big numbers. H1 44/1, H2 26–28/1.05, wordmark 13–18px.
- **Barlow Condensed** (500–800) — eyebrows, service names, labels, marquee, testimonial names. Usually 700, uppercase, letter-spacing .02–.2em.
- **Barlow** (400–700) — body copy. Body 15–16px, small 12.5–13.5px, line-height ~1.5–1.6.
- System fallback: `system-ui, sans-serif`.

**Spacing** — section vertical padding ~40–44px top; horizontal gutter **22px**; card padding 14–16px; grid/stack gaps 10–12px.

**Radius** — buttons/inputs/small cards **8px**; medium cards **10px**; large feature cards/testimonial **12–14px**; knob/avatars **50%**.

**Motion** — reveal `.65s cubic-bezier(.2,.6,.2,1)`; marquee 22s linear; pulse 2.4s; testimonial rotate 5s; dot width transition `.3s`.

**Container** — `max-width: 520px`, centered. (Adapt to a real responsive desktop layout as noted in Fidelity.)

## Assets
All images are real client job photos, currently in the project's `uploads/` folder. Copy them into the target project (e.g. `public/images/…`) and rename to something human-readable. Provide descriptive `alt` text (suggestions below).

| Current filename | Used in | Suggested alt |
|---|---|---|
| `651188245_35477635118501867_3400437873868287602_n.jpg` | Hero bg; gallery | New cedar privacy fence |
| `646757462_122276287892067764_7321596585685729588_n.jpg` | Before/after (AFTER); gallery; FB post 1 | New exterior door installed |
| `646813664_122276287958067764_4711660235307660513_n.jpg` | Before/after (BEFORE) | Old worn exterior door |
| `646870572_122276988242067764_2113409320530741178_n.jpg` | Gallery | Fascia & gutter rebuild |
| `652931433_35477634981835214_3251760029355082238_n.jpg` | Gallery | Exterior repaint & siding |
| `646854319_122276288588067764_4471028385660139660_n.jpg` | Gallery | Cabinet & drawer repair |
| `651005009_35477635108501868_6597967307864840142_n.jpg` | FB post 2 | Completed cedar fence line |

Other uploaded photos (roof/fascia rot, repaints, more fence shots) are available in `uploads/` for additional before/afters and gallery items.

**Icons** are currently emoji (🌿🌳🧱🪵🎨🔧💦🍂🤝✝️🛠️📞📱💬❤️). Fine to keep, or swap for a proper icon set (Lucide/Feather) for a more polished look — keep the ✝️ faith cue.

The approved logo is provided as `hot-shot-logo.png` with an optimized web version at `hot-shot-logo-web.png`.

## Business Facts (verified with client)
- **Name:** Hot Shot Handyman
- **Phone (call & text):** **(615) 633-6489** — Nashville business line (updated July 2026; replaced the old Memphis cell 901-633-6332).
- **Does NOT offer paint & drywall** — he can do it but doesn't want the work; removed from services (July 2026).
- **Facebook:** https://www.facebook.com/musiccitylandscapeandrepairsllc  ·  Messenger: https://m.me/musiccitylandscapeandrepairsllc
- **Service area:** Nashville, TN & surrounding areas.
- **Explicitly does NOT do:** HVAC, major plumbing, major electrical. Keep this disclaimer visible.
- **Brand tone:** rugged, trustworthy, faith-and-family, honest pricing.
- **Testimonials are placeholder/fictional** (client-approved) — swap for real reviews when available.

## Recommended Next Additions (not yet built — discussed with client)
- **Sticky bottom action bar** (Call · Text · Quote) on mobile.
- **Service-area** section/town list (Antioch, Bellevue, Donelson, Brentwood…) for local SEO.
- **Business hours** + response-time promise.
- **"How it works"** 3-step (Reach out → Free quote → We get it done).
- **FAQ** (small jobs? insured? what we don't do?).
- **Gallery lightbox** (tap to enlarge) and more before/after sliders.
- **Real Facebook feed** (Page Plugin) or curated posts.
- **Prefilled click-to-text** message.
- **SEO/meta**: title, description, Open Graph image, `LocalBusiness` JSON-LD (name, phone, area served, geo), favicon.
- **Accessibility pass**: reduced-motion, keyboard slider, aria-live testimonials, focus styles, real form labels.

## Files
- `Music City Landscape and Repairs.dc.html` — the full design prototype (this bundle). Open in a browser to see the live look, animations, slider, and form behavior. Read the markup for exact structure; read the embedded logic for the interaction details described above.
