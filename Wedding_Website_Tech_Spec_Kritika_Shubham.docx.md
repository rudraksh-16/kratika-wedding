**Wedding Website**

*Kritika & Shubham*

Technical Specification & Development Workflow

*Shubh Vivah — Saturday, 25 April 2026*

**1\. Project Overview**

This document is the complete technical specification and development workflow for the wedding website of Kritika Sharma and Shubham Suthwal. It is intended to be handed directly to a developer or agency for implementation. All content, features, design requirements, and event data are defined here.

| Bride | Aayushmati Kritika Sharma |
| :---- | :---- |
| **Groom** | Aayushman Shubham Suthwal |
| **Wedding Date** | Saturday, 25 April 2026 |
| **Venue** | Mangalam Palace, Muhana Mandi Road, Mansarovar, Jaipur |
| **Contact** | \+91-9414709224 / \+91-9414666981 |
| **Host Family** | Shri Shivnarayan, Rajnarayan, Riddhishankar Sharma |
| **Host Address** | 67/78, RHB, Pratap Nagar, Sanganer, Jaipur (Raj.) – 302033 |

**2\. Goals & Target Audience**

**2.1  Goals**

* Provide guests a beautiful, personalized digital wedding invitation  
* Display the full event schedule and venue location  
* Allow guests to view the wedding photo album via Google Drive  
* Offer one-tap navigation to the marriage venue via Google Maps  
* Create a memorable, emotionally resonant visual experience

**2.2  Target Audience**

* Wedding guests (family and friends) in Jaipur and Sikar, Rajasthan  
* Age range: 15–70 years; must be accessible on mobile phones  
* Hindi-language preference; English secondary

**3\. Recommended Technology Stack**

| Frontend | HTML5 / CSS3 / Vanilla JavaScript  (or React.js if preferred) |
| :---- | :---- |
| **Hosting** | GitHub Pages (free) or Netlify (free tier) — static site |
| **Background Video** | MP4 looping video or CSS-animated SVG silhouettes (no server needed) |
| **Maps** | Google Maps Embed API — free, no backend required |
| **Photo Gallery** | Google Drive shared folder — direct link button |
| **Fonts** | Google Fonts: Tiro Devanagari Hindi \+ Playfair Display |
| **No backend needed** | All content is static; no database or server-side code required |

**4\. Design Specification**

**4.1  Color Palette**

| Primary / Maroon | \#7B1C2E — headings, borders, accents |
| :---- | :---- |
| **Gold** | \#C9A84C — decorative lines, highlights, buttons |
| **Cream / Background** | \#FAF3E8 — section backgrounds |
| **Dark Background** | \#2A0A12 — hero / full-bleed sections |
| **Blush** | \#F2D7D5 — card backgrounds, soft areas |

**4.2  Typography**

| Headings (Hindi) | Tiro Devanagari Hindi — Google Fonts |
| :---- | :---- |
| **Display / Names** | Playfair Display (Italic Bold) — Google Fonts |
| **Body / Labels** | Cormorant Garamond Light — Google Fonts |
| **Fallback** | Georgia, serif |

**4.3  Visual Style**

* Aesthetic: Luxury Indian Bridal — deep maroon, gold foil effects, cream parchment texture  
* All section dividers use a thin gold horizontal rule with a small lotus/mandala icon in the centre  
* Cards and event boxes use a subtle drop shadow and cream background with maroon border  
* Animations: fade-in on scroll (IntersectionObserver); no autoplay audio

**5\. Page Sections — Detailed Specification**

**5.1  Hero Section (Full Screen)**

This is the first section the visitor sees — full viewport height.

**Background**

* Option A (Preferred): A looping MP4 video of a bride and groom silhouette / traditional Rajasthani wedding scene — muted, autoplay, loop, no controls. Overlay a semi-transparent dark maroon gradient on top so text remains readable.  
* Option B (Fallback if no video): CSS-animated SVG silhouettes of a bride (left) and groom (right) with a gentle swaying animation, set against a radial dark-maroon gradient background with floating golden petal particles (CSS keyframes).

**Content — centred on the hero**

* Top line (Hindi): ।। श्री गणेशाय नमः ।।  — gold colour, small size  
* Bride name (large, display font): Aayushmati Kritika  
* Decorative 'with' symbol / ampersand in gold italic  
* Groom name (large, display font): Aayushman Shubham  
* Date (Hindi): शनिवार, 25 अप्रैल 2026  
* Thin gold horizontal divider  
* Location (Hindi/English): Mangalam Palace, Mansarovar, Jaipur  
* Scroll-down arrow animation at the bottom

**5.2  Countdown Timer**

A live JavaScript countdown to the wedding date (25 April 2026, 07:00 AM IST). Display four boxes: Days / Hours / Minutes / Seconds. Maroon background, gold numbers, cream labels. Update every second.

**5.3  About the Couple**

Two-column layout (stacks to one column on mobile).

**Bride Column**

* Name: हृदयकणिका कृतिका  
* Parents: Smt. Kalpana Vyas & Dr. Riddhishankar Sharma  
* Late grandparents: Smritidhesh Smt. Shantidevi & Shri Gobind Narayan Sharma

**Groom Column**

* Name: हृदयांश शुभम  
* Parents: Smt. Anita Devi & Shri Babulal Ji Suthwal  
* Late grandfather: Smritidhesh Shri Keser Dev Ji Suthwal  
* From: Fagalva (Sikar)

**5.4  Events Schedule  (शगुन के सुनहरे पल)**

Display as a responsive 3-column grid of cards (stacks to 1 column on mobile). Each card has: Event name (Hindi), Day, Date, Time.

| Vinayak Pujan | Friday 24 Apr 2026 — 8:00 AM |
| :---- | :---- |
| **Mehndi** | Friday 24 Apr 2026 — 11:00 AM |
| **Mangal Kalash Chauk** | Friday 24 Apr 2026 — 5:00 PM |
| **Sangeet Sandhya** | Friday 24 Apr 2026 — 7:00 PM |
| **Haldi Rasm** | Saturday 25 Apr 2026 — 10:00 AM |
| **Barat Swagat** | Saturday 25 Apr 2026 — 7:30 PM |
| **Preetibhoj** | Saturday 25 Apr 2026 — 8:00 PM onwards |
| **Panigrahana Sanskar** | Saturday 25 Apr 2026 — Shubh Lagnanusar |

**5.5  Venue & Map**

Full-width section with two sub-sections:

**Venue Details**

* Name: Mangalam Palace  
* Address: Muhana Mandi Road, Mansarovar, Jaipur, Rajasthan  
* Display address text with a small map-pin icon

**Interactive Map Button  (PRIMARY CTA)**

A large prominent button labelled:  📍 Get Directions to Venue

* On click: opens Google Maps link in a new tab  
* Google Maps URL:  https://maps.google.com/?q=Mangalam+Palace+Muhana+Mandi+Road+Mansarovar+Jaipur  
* Button style: solid maroon background, gold text, rounded corners, subtle hover animation (scale \+ shadow)  
* Below the button, embed a Google Maps iframe at 100% width, 400px height  
* Maps Embed URL format:  https://www.google.com/maps/embed/v1/place?key=YOUR\_API\_KEY\&q=Mangalam+Palace+Jaipur  
* Note to developer: obtain a free Google Maps Embed API key from console.cloud.google.com

**5.6  Photo Gallery Button**

A dedicated section or floating sticky button to open the wedding photo album.

* Button label:  📸 View Wedding Photos  
* On click: opens the provided Google Drive shared folder link in a new tab  
* Placeholder link:  \[CLIENT TO PROVIDE GOOGLE DRIVE LINK\]  
* Style: gold background, maroon text, same rounded button style as venue button  
* Place this button both in the navbar (top-right) AND as a dedicated mid-page section card

**5.7  Family Section**

Two columns: Uttarakankshi (Bride's side) and Darshanabhilashi (Groom's side).

**Uttarakankshi (Bride's Family)**

* Shri Shivnarayan, Rajnarayan, Riddhishankar Sharma  
* 67/78, RHB, Pratap Nagar, Sanganer, Jaipur (Raj.) – 302033  
* Mob: 9414709224, 9414666981

**Darshanabhilashi (Groom's Family)**

* Shri Dwarkprasad, Omprakash  
* Vijay Kumar, Vijay Kumar  
* Lakshminarayan, Naresh Kumar, Pawan Kumar  
* Evam Samast Ratawa Joshi Pariwar

**Swagatkarta**

* Vaibhav, Vishal, Tanmay, Rudraksha

**Nanihal Paksha**

* Dr. Manmohan, Hitendra, Manuj, Anuj  
* Evam Samast Vyas Pariwar

**Baal Manuhar (Children's Note)**

*"Haldi hai Chandan hai, Rishton ka Bandhan hai, Hamari Bhua-Mausi ki Shaadi mein aapka Abhinandan hai :– Aishani, Takshvi, Niom"*

**5.8  Important Note (Baarat)**

Display as a highlighted info box (light gold background, maroon border):

*"Baarat Shrimaan Babulal Ji Suthwal Nivasi – Fagalva (Sikar) walon ke yahan se Dinank 25 April 2026 ko Sayankaal Aayegi."*

**5.9  Contact / RSVP Footer**

* Host name and address with phone numbers  
* WhatsApp quick-contact button linking to \+919414709224  
* Social share button: 'Share this Invitation'  (Web Share API)  
* Copyright line: © 2026 Kritika & Shubham

**6\. Navigation**

Sticky top navigation bar with the following links. On mobile, collapse into a hamburger menu.

| Home | Scrolls to Hero Section |
| :---- | :---- |
| **Events** | Scrolls to Events Schedule |
| **Venue** | Scrolls to Venue & Map section |
| **Photos** | Opens Google Drive link in new tab |
| **Contact** | Scrolls to Footer |

Nav bar style: semi-transparent dark maroon background with frosted glass blur effect (backdrop-filter: blur). Sticky on scroll.

**7\. Interactive Features Specification**

**7.1  Looping Background Video**

* Tag: \<video autoplay muted loop playsinline\>  
* Provide 2 video sources: MP4 (primary) and WebM (fallback)  
* Resolution: 1920×1080 recommended; compress to \< 8 MB for fast load  
* CSS overlay: linear-gradient(to bottom, rgba(42,10,18,0.6), rgba(42,10,18,0.8))  
* If no video asset is available: use CSS keyframe animation with SVG bride/groom silhouettes \+ floating petals

**7.2  Countdown Timer**

* Pure JavaScript — no library needed  
* Target date: new Date('2026-04-25T07:00:00+05:30')  
* Update interval: setInterval every 1000ms  
* Hide timer and show 'आज शादी है\! 🎉' when countdown reaches zero

**7.3  Venue Map Button**

* href: https://maps.google.com/?q=Mangalam+Palace+Muhana+Mandi+Road+Mansarovar+Jaipur  
* target='\_blank' rel='noopener noreferrer'  
* Embed iframe below button for inline map preview

**7.4  Photo Gallery Button**

* href: \[GOOGLE DRIVE LINK — to be provided by client\]  
* target='\_blank' rel='noopener noreferrer'  
* Ensure Drive folder is set to 'Anyone with the link can view'

**7.5  Scroll Animations**

* Use IntersectionObserver API to trigger fade-in \+ slide-up on each section  
* No external animation library needed; pure CSS transitions  
* Respect prefers-reduced-motion: remove animations if user preference is set

**7.6  Mobile Responsiveness**

* Breakpoints: 480px (mobile), 768px (tablet), 1024px+ (desktop)  
* Event grid: 3 cols (desktop) → 2 cols (tablet) → 1 col (mobile)  
* Font sizes scale with clamp() for fluid typography  
* Tap targets: minimum 48×48px on all buttons

**8\. Content & Assets Required from Client**

The developer needs the following items before launch:

1. Background video file (MP4) — looping bride & groom footage, OR confirmation to use CSS animation fallback  
2. Wedding photos uploaded to Google Drive — share the folder link with 'Anyone with link' permission  
3. Any additional photos of the couple for the 'About' section (optional)  
4. Confirmation of venue Google Maps pin — verify that 'Mangalam Palace, Mansarovar, Jaipur' resolves correctly  
5. Google Maps Embed API key (free) — client or developer to obtain from console.cloud.google.com  
6. WhatsApp contact number to link for RSVP (default: 9414709224\)

**9\. Recommended File Structure**

wedding-website/

├── index.html          ← Main single-page HTML file

├── style.css           ← All CSS styles

├── script.js           ← Countdown, scroll animations, nav

├── assets/

│   ├── video/

│   │   └── wedding-bg.mp4   ← Looping background video

│   ├── images/

│   │   ├── bride.png        ← Bride photo (optional)

│   │   ├── groom.png        ← Groom photo (optional)

│   │   └── mandala.svg      ← Decorative divider icon

│   └── fonts/              ← Self-hosted fallback fonts (optional)

└── README.md           ← Developer setup notes

**10\. Development Workflow**

**Phase 1 — Setup (Day 1\)**

7. Create GitHub repository: wedding-kritika-shubham  
8. Set up folder structure as defined in Section 9  
9. Link Google Fonts in \<head\> of index.html  
10. Define all CSS custom properties (colors, fonts) in :root  
11. Build HTML skeleton with all section IDs

**Phase 2 — Hero & Background (Day 1–2)**

12. Implement hero section with video background (or CSS fallback)  
13. Add couple names, date, blessing text  
14. Implement scroll-down arrow animation  
15. Ensure video loads fast (compressed \< 8MB, lazy start on mobile optional)

**Phase 3 — Content Sections (Day 2–3)**

16. Build countdown timer (JavaScript)  
17. Build About the Couple section  
18. Build Events Schedule grid with all 8 events  
19. Build Family / Uttarakankshi / Darshanabhilashi section  
20. Build Important Note (Baarat info) box

**Phase 4 — Map & Gallery Buttons (Day 3\)**

21. Add Google Maps embed iframe  
22. Add 'Get Directions' button with Maps URL  
23. Add 'View Wedding Photos' button with Drive URL  
24. Test both buttons on Android and iOS browsers

**Phase 5 — Polish & Responsive (Day 4\)**

25. Add scroll-triggered fade-in animations (IntersectionObserver)  
26. Test on mobile (Chrome Android, Safari iOS)  
27. Fix any layout issues at 320px, 375px, 768px breakpoints  
28. Verify all Hindi text renders correctly (UTF-8 charset)  
29. Performance: check Lighthouse score \> 80

**Phase 6 — Deployment (Day 5\)**

30. Deploy to GitHub Pages or Netlify (free)  
31. Test live URL on multiple devices  
32. Share URL with client for review  
33. Final round of edits based on client feedback  
34. Handover: provide client with login credentials and instructions to update Drive folder

**11\. Estimated Timeline**

| Phase 1 — Setup | 0.5 day |
| :---- | :---- |
| **Phase 2 — Hero Section** | 1 day |
| **Phase 3 — Content Sections** | 1.5 days |
| **Phase 4 — Map & Gallery** | 0.5 day |
| **Phase 5 — Responsive Polish** | 1 day |
| **Phase 6 — Deployment** | 0.5 day |
| **TOTAL** | 5 working days |
| **Recommended start date** | As soon as possible (wedding: 25 Apr 2026\) |

**12\. SEO & Social Sharing**

Add the following meta tags in the \<head\> so the link looks beautiful when shared on WhatsApp:

\<meta property="og:title" content="Kritika & Shubham – Shubh Vivah | 25 April 2026" /\>

\<meta property="og:description" content="आपको सादर आमंत्रित किया जाता है। Mangalam Palace, Jaipur." /\>

\<meta property="og:image" content="\[URL to a wedding banner image\]" /\>

\<meta property="og:url"   content="\[Live website URL\]" /\>

\<meta name="theme-color"  content="\#7B1C2E" /\>

*Document prepared for: Shri Shivnarayan Sharma & Family  |  Kritika 💍 Shubham — 25 April 2026*