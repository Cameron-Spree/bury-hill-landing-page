# Bury Hill Landscape Supplies — Visual Landing Page Builder

Interactive visual landing page builder and Magento 2 CMS block generator for **Bury Hill Topsoil & Landscape Supplies** on **Lawsons**.

Built with **Vue 3** (zero-build CDN) and styled using the **Heritage Earth & Landscape** design system (`#061b0e`, `#A5B918`, `#628A9D`, `Source Serif 4`, and `Hanken Grotesk`).

---

## 🌟 Key Features

- **Interactive Live Builder (`index.html`)**: Live preview of the landing page with granular scale sliders, text/image editors, and responsive device toggles (Desktop, Tablet, Mobile).
- **10 Stocked Specialist Landscape Products**: Fully populated, responsive horizontal product carousel with smooth scroll controls.
- **Scoped Magento 2 CMS Blocks (`export/`)**: All CSS styles and blocks are scoped under `.bury-hill-page` to guarantee zero style bleeding into Lawsons' storefront theme.
- **Local Storage Persistence**: Automatically remembers and persists any content edits or sizing adjustments.

---

## 📦 Magento CMS Blocks Overview

| Block | File | Purpose |
| :--- | :--- | :--- |
| **Block 1** | `export/block-1-scoped-styles.html` | Google Fonts (`Source Serif 4`, `Hanken Grotesk`), Material Symbols & Scoped CSS |
| **Block 2** | `export/block-2-hero-and-trust.html` | Hero Banner + 3 Trust Signal badges |
| **Block 3** | `export/block-3-brand-story.html` | 20+ Years Heritage & Soil Engineering Asymmetric Bento Grid |
| **Block 4** | `export/block-4-product-carousel.html` | 10-Product Specialist Landscape Carousel + JavaScript controls |
| **Block 5** | `export/block-5-technical-standards.html` | BS3882, PAS100, 100% Peat-Free & 10mm Screened Standards Grid |
| **Block 6** | `export/block-6-faq-and-footer.html` | Expandable FAQ Accordion + Bottom Trade Enquiry Banner |
| **Full Page** | `export/full-page-complete.html` | Complete standalone single-page HTML export |

---

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Cameron-Spree/bury-hill-landing-page.git
   ```
2. Double-click `index.html` to launch the builder in any browser.
3. Edit content, images, or font scalers in the left sidebar.
4. Click **"Export Magento Blocks"** in the top navigation bar to copy any block directly to your clipboard for Magento CMS.
