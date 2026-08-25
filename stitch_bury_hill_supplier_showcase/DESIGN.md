---
name: Heritage Earth & Landscape
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#434843'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#77583d'
  on-secondary: '#ffffff'
  secondary-container: '#ffd5b2'
  on-secondary-container: '#795b3f'
  tertiary: '#051921'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b2e36'
  on-tertiary-container: '#8296a0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdcc0'
  secondary-fixed-dim: '#e7bf9d'
  on-secondary-fixed: '#2b1703'
  on-secondary-fixed-variant: '#5d4127'
  tertiary-fixed: '#d1e6f0'
  tertiary-fixed-dim: '#b5cad4'
  on-tertiary-fixed: '#0a1e26'
  on-tertiary-fixed-variant: '#374952'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system reflects a premium, established authority in British landscaping. It balances the rugged, tactile nature of outdoor supplies with a sophisticated, high-end service layer. The target audience includes both professional landscapers seeking reliability and discerning homeowners investing in their properties.

The design style is **Corporate Modern with Tactile influences**. It utilizes a structured grid and generous whitespace to signify organization and premium quality, while using subtle textures and organic color transitions to evoke an outdoorsy feel. The emotional response should be one of "trustworthy expertise"—reassuring the user that they are purchasing the finest raw materials for their landscape.

## Colors
The palette is rooted in the natural landscape of the UK.
- **Primary (Forest Green):** Used for primary branding, navigation backgrounds, and main "Order Now" actions to establish authority.
- **Secondary (Burnt Umber):** An earthy brown used for secondary accents, high-quality soil categorization, and organic highlights.
- **Tertiary (Slate Grey):** A cool neutral used for technical information, stone/aggregate categories, and structural dividers.
- **Neutral (Sandstone/White):** A warm off-white base (`#F9F8F6`) is preferred over pure white to reduce eye strain and maintain a premium, parchment-like feel. 
- **Success/Warning:** Use a muted sage for success states and a deep terracotta for alerts to stay within the earthy theme.

## Typography
This design system employs a "Heritage-Modern" typographic pairing. 
- **Headings:** Source Serif 4 provides an authoritative, literary quality that suggests an established history. Use it for all page headers and section titles.
- **Body:** Hanken Grotesk offers a sharp, contemporary contrast. Its high legibility is essential for technical product specifications and delivery details.
- **Labels:** Use uppercase Hanken Grotesk with increased letter spacing for category labels (e.g., "TOPSOIL," "AGGREGATES") to provide a clean, architectural look.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain a premium, editorial feel. 
- **Desktop:** 12-column grid with a 1280px max-width. Use generous 64px margins to allow the content to breathe.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins.
Spacing follows a strict 8px base unit. Sections should be separated by large vertical gaps (e.g., 80px or 120px) to reinforce the "high-end" positioning, avoiding the cluttered look of typical e-commerce sites.

## Elevation & Depth
To maintain a grounded, earthy feel, this design system avoids floating elements or heavy shadows. Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**.
- **Surfaces:** Use subtle shifts in background color (e.g., transitioning from off-white to a very light grey-brown) to define sections.
- **Borders:** Cards and containers use a 1px solid border in a muted Slate Grey (`#D1D5D8`) rather than shadows.
- **Interactive States:** When a user interacts with a card, use a subtle 4px "soft-glow" shadow tinted with the Primary Forest Green to indicate focus without breaking the flat, professional aesthetic.

## Shapes
The shape language is **Soft (0.25rem)**. This provides a subtle nod to the organic nature of the products (soil, wood, stone) while maintaining the structural integrity and precision of a professional landscape supply company. Sharp 90-degree corners are reserved for structural dividers and full-width image containers to provide a sense of scale.

## Components
- **Buttons:** Primary buttons are solid Forest Green with white text, featuring a subtle 1px inset border of a lighter green for a "pressed" tactile feel. Secondary buttons use the Slate Grey outline.
- **Product Cards:** These feature a full-bleed product image at the top, followed by a label in `label-caps`, a `headline-md` title, and a price in the Primary Green. The container has a 1px border.
- **Premium Carousel:** Used for high-end landscape photography. It should feature a "fade" transition rather than a slide, with navigation arrows contained in small circular Slate Grey buttons. Captions use Source Serif 4.
- **Input Fields:** Minimalist design with a bottom-border-only focus state in Primary Green. Labels remain visible above the field to ensure professional accessibility.
- **Chips:** Used for "In Stock" or "Bulk Available" tags. These use a light tint of the Secondary brown with dark brown text.
- **Lists:** Icon-heavy lists for product benefits (e.g., "Screened to 10mm") should use custom organic icons in Forest Green.