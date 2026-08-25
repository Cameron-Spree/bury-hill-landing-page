const { createApp, reactive, computed, watch, ref, onMounted } = Vue;

const defaultState = {
    // GLOBAL DESIGN & TYPOGRAPHY
    fontHeadline: "Source Serif 4",
    fontBody: "Hanken Grotesk",
    fontMono: "Hanken Grotesk",
    fontSize: "16",
    brandTheme: "lawsons",

    // SCALES MULTIPLIERS (1.0 = Default)
    scHeroBadge: 1.0,
    scHeroTitle: 1.0,
    scHeroDesc: 1.0,
    scHeroBtn: 1.0,
    
    scTrustTitle: 1.0,
    scTrustSub: 1.0,

    scStoryTitle: 1.0,
    scStoryLead: 1.0,
    scStoryBody: 1.0,
    scStatNum: 1.0,

    scCarouselTitle: 1.0,
    scProductTitle: 1.0,
    scProductDesc: 1.0,
    scProductBadge: 1.0,

    scTechTitle: 1.0,
    scTechCardTitle: 1.0,
    scTechCardDesc: 1.0,

    scFaqTitle: 1.0,
    scFaqQ: 1.0,
    scFaqA: 1.0,

    scFooterTitle: 1.0,
    scFooterDesc: 1.0,

    // HERO SECTION
    heroBadge: "Established Specialists",
    heroTitle: "Premium Landscape Supplies for Surrey, Sussex & London",
    heroDesc: "Providing the highest grade certified topsoils, premium cultivated lawn turf, and professional landscaping materials to trade experts and discerning homeowners across the South East.",
    heroBtn1: "Explore Our Range",
    heroBtn1Url: "#bury-hill-carousel",
    heroBtn2: "Trade Applications",
    heroBtn2Url: "#bury-hill-trade",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-a5a2H5HJX4F49crR7fq2siU7B8I9Nm5mP5QAkJ9L8EO9PphTG8vxCwOwxjFO8QugCV90sWZKvSfpdUsSFFs9A-2wsRob5lzXAblDiDOXu0gK-bl6cEgIQjKHW_U4C5dgmaNfejLW-mGpCOP_Ja6U8Wagq9F-q2ylwO6kINfh1MwlVaeFyR93JBiRr8faqEWHS1k8rpszUdwitMtcj1Ulwec0MtrPIuHQXpts0VAWLrkaaae0_PI",

    // TRUST SIGNALS STRIP (3 Items)
    trust1Icon: "forum",
    trust1Title: "Expert Advice",
    trust1Sub: "Dedicated team of soil scientists",

    trust2Icon: "local_shipping",
    trust2Title: "Fast Local Delivery",
    trust2Sub: "Fleet covering Surrey, Sussex & London",

    trust3Icon: "workspace_premium",
    trust3Title: "BS3882 Certified",
    trust3Sub: "Guaranteed premium quality soils",

    // BRAND STORY & BENTO
    storyTag: "Our Heritage & Expertise",
    storyTitle: "Engineered Soils for Discerning Landscapes",
    storyLead: "For over two decades, Bury Hill Topsoil & Landscape Supplies has been the trusted bedrock for award-winning gardens and commercial landscapes across the South East.",
    storyBody: "We don't just sell dirt; we engineer soils. Our established expertise ensures that whether you are laying a formal lawn, building raised beds, or specifying for a major commercial project, you receive materials that guarantee structural integrity and biological vitality.",
    storyLinkText: "Read Our Story",
    storyLinkUrl: "https://www.buryhilltopsoilandlogs.co.uk/about-us/",
    storyImgWide: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfBY6cJWT6Ee7LLh5Wt3GH3mGc1-_gZIv8ecdxnJqY5cIXHj_L04LqgspeoXNeEG86LHICqkJQafVdyfEQeSXTrLbzqDhNC1SNCELxLb7d8Og1bATg2s6PwkXOA0SRS85qjJek_xHdxoyvzFYEQz-UbE4DItrnhXZ77r4_2Bw3MLuirorRxws2-qy1oTRd4fnOj6unpmP8_Xsa7yAt-WVS47vLDGwXsczD3ilujwubWqxlSE9FqPQ",
    storyImgSquare: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2tDvAxUJofyFrw9xa2ASLJDivnyZEkQA6VXsXkIUnV2rXPQKF35IUnp0qY3cxgoySU7J6jhplIPFY4g8N0-AUT-J4A_wwtvf5UX5O8z8-pKAvs7jdOMz8rFKHZl1S8E4bIXrGvSusNkzD9DEifkOxuPFdr2VHtOX9u7ICIBgCaDPrY6oSr5iSEszCctsbOFB_5vddcJ3uM8a-JVj_RQWOicVsVQUIGIu3Ck0WTg_mmNTNKaw7idY",
    storyStatNum: "20+",
    storyStatTitle: "Years of Excellence",
    storyStatDesc: "Supplying the finest grade materials to the industry's leading landscapers.",

    // 10 STOCKED PRODUCTS CAROUSEL
    carouselTitle: "Our Featured Specialist Range",
    carouselSubtitle: "Curated premium materials designed to meet the rigorous demands of professional horticulturalists and landscape architects.",
    products: [
        {
            badge: "SKU: H00008597",
            sku: "H00008597",
            title: "Bury Hill GP10® Multi-Purpose Topsoil",
            desc: "Quality, versatile 10mm screened topsoil ideal for landscaping, lawns, planting borders, turfing and garden beds (0.7m³ Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/g/p/gp10-1200-800-750x500_1_.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/bury-hill-gp10-multi-purpose-topsoil"
        },
        {
            badge: "SKU: H00008598",
            sku: "H00008598",
            title: "Bury Hill Low Fertility Topsoil",
            desc: "Specialist low-nutrient topsoil ideal for establishing wildflower meadows, species-rich grassland and ecological landscaping (0.7m³ Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/l/o/low_fertility_soil_bhl-1200x800.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/low-fertility-topsoil"
        },
        {
            badge: "SKU: H00008599",
            sku: "H00008599",
            title: "Bury Hill Ericaceous Elevated pH Topsoil",
            desc: "Targeted acidic soil blend formulated for acid-loving shrubs, rhododendrons, azaleas, heathers and camellias (0.7m³ Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/n/a/natural_ericaceous_elevated_ph_topsoil_bhl_sized-750x500.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/ericaceous-elevated-ph-topsoil-s"
        },
        {
            badge: "SKU: H00008600",
            sku: "H00008600",
            title: "Bury Hill Pure White Play Sand",
            desc: "Silica-based, sub-rounded non-staining sand tested to BS EN 1177 for children’s sandpits, play areas and creative spaces (850kg Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/p/u/pure-white-play-sand-dry-1000-x-600-1200x800_1.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/pure-white-play-sand"
        },
        {
            badge: "SKU: H00008601",
            sku: "H00008601",
            title: "Bury Hill Composted Bark Fines 0-10mm",
            desc: "Organic bark fines for soil structure improvement, mulching garden beds, weed suppression and moisture retention (0.7m³ Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/c/o/composted_bark_fines_bhl-750x500_1_.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/composted-bark-fines-0-10mm"
        },
        {
            badge: "SKU: H00008602",
            sku: "H00008602",
            title: "Bury Hill Premium Hardwood Play Chip",
            desc: "100% natural British hardwood chips (5–35mm) tested to BS EN 1177:2008 for playgrounds, pathways and chicken runs (0.7m³ Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/p/r/premium_hardwood_play_chip_bhl-750x500.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/premium-hardwood-play-chip-premium"
        },
        {
            badge: "SKU: H00008603",
            sku: "H00008603",
            title: "Bury Hill John Innes Potting Compost No. 3",
            desc: "Traditional nutrient-rich loam formula with 3x nutrients for mature houseplants, trees, shrubs, vines and heavy feeders (0.7m³ Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/j/o/john_innes_no.3_main_1200x800-750x500.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/john-innes-potting-compost-no-3"
        },
        {
            badge: "SKU: H00008605",
            sku: "H00008605",
            title: "Bury Hill Buff Self-Binding Gravel 0-10mm",
            desc: "Graded limestone creating a firm, durable and natural self-binding surface for footpaths, country estates and park trails (850kg Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/s/e/self_binding_golden_gravel_bhl-750x500.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/buff-self-binding-gravel-0-10mm-bound-gravel"
        },
        {
            badge: "SKU: H00008606",
            sku: "H00008606",
            title: "Bury Hill Organic Soil Conditioner",
            desc: "BSI PAS100:2018 certified peat-free soil improver screened to 10mm to revitalise heavy clay and sandy soils (0.7m³ Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/o/r/organic_soil_conditioner_bhl-750x500.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/organic-soil-conditioner"
        },
        {
            badge: "SKU: H00008604",
            sku: "H00008604",
            title: "Bury Hill 5mm Sand/Soil Rootzone (60/40)",
            desc: "Precision drum-mixed 60/40 free-draining sand and BS3882 topsoil screened to 5mm for sports pitches and luxury lawns (850kg Bulk Bag).",
            img: "https://www.lawsons.co.uk/media/catalog/product/s/a/sand_soil_contract_rootzone_5mm_60_40-750x500_2.jpg",
            btnText: "View Product",
            btnUrl: "https://www.lawsons.co.uk/sand-soil-contract-rootzone-60-40-5mm"
        }
    ],

    // TECHNICAL STANDARDS & QUALITY GRID
    techTag: "Quality & Compliance",
    techTitle: "Guaranteed Technical Standards",
    techSubtitle: "Every batch of Bury Hill soil and landscape material undergoes rigorous laboratory testing to ensure purity, safety, and peak agronomic performance.",
    techCards: [
        {
            icon: "verified",
            title: "BS3882:2015 Compliant",
            desc: "Independently lab tested to meet and exceed national specifications for premium topsoils and rootzones."
        },
        {
            icon: "eco",
            title: "100% Peat-Free",
            desc: "Committed to sustainable landscaping with zero peat extraction across our entire product catalog."
        },
        {
            icon: "filter_alt",
            title: "Precision Screened (10mm)",
            desc: "Milled and screened to remove stones, foreign debris, and weed roots for consistent, friable texture."
        },
        {
            icon: "science",
            title: "PAS100 Certified Composts",
            desc: "Enriched with high-grade organic matter produced according to strict British composting standards."
        }
    ],

    // FAQS
    faqTag: "Customer Queries",
    faqTitle: "Frequently Asked Questions",
    faqs: [
        {
            question: "How are Bury Hill products delivered by Lawsons?",
            answer: "Bury Hill products are supplied through Lawsons in standard 1-tonne bulk bags or in loose loads via our crane and tipper fleet across Surrey, Sussex, and London."
        },
        {
            question: "What does BS3882 certification mean for my garden?",
            answer: "BS3882 is the British Standard for topsoil quality. It certifies that the soil has optimal pH balance, balanced nutrients (N, P, K, Mg), low electrical conductivity, and is entirely free of contaminants and aggressive weeds."
        },
        {
            question: "How soon after delivery should I lay the Supreme Lawn Turf?",
            answer: "Lawn turf is a living, perishable product. It should ideally be laid within 24 hours of delivery in spring/autumn and within 12 hours during warm summer conditions to ensure healthy root establishment."
        },
        {
            question: "Can trade customers order full articulated loads?",
            answer: "Yes. In partnership with Lawsons Trade Services, large commercial landscaping projects can arrange bulk loose tipper deliveries or full multi-pallet bulk bag shipments directly to site."
        }
    ],

    // FOOTER CTA
    footerTag: "Trade & Project Supply",
    footerTitle: "Ready to elevate your landscape project?",
    footerDesc: "Speak with our dedicated specialist team at Lawsons for technical specifications, trade pricing, and delivery coordination.",
    footerBtn1: "Browse Lawsons Store",
    footerBtn1Url: "https://www.lawsons.co.uk/",
    footerBtn2: "Open a Trade Account",
    footerBtn2Url: "https://www.lawsons.co.uk/trade-account"
};

// SCALE CSS GENERATOR
const getScaleCSS = (s) => `
/* Granular Scale Overrides */
.bury-hill-page .bh-hero__badge { font-size: calc(0.75rem * ${s.scHeroBadge}) !important; }
.bury-hill-page .bh-hero__title { font-size: calc(2.5rem * ${s.scHeroTitle}) !important; }
@media (min-width: 1024px) { .bury-hill-page .bh-hero__title { font-size: calc(3.25rem * ${s.scHeroTitle}) !important; } }
.bury-hill-page .bh-hero__desc { font-size: calc(1.125rem * ${s.scHeroDesc}) !important; }
.bury-hill-page .bh-hero__actions .bh-btn { font-size: calc(0.8125rem * ${s.scHeroBtn}) !important; }

.bury-hill-page .bh-trust-item__title { font-size: calc(1.125rem * ${s.scTrustTitle}) !important; }
.bury-hill-page .bh-trust-item__sub { font-size: calc(0.875rem * ${s.scTrustSub}) !important; }

.bury-hill-page .bh-story__title { font-size: calc(2rem * ${s.scStoryTitle}) !important; }
@media (min-width: 1024px) { .bury-hill-page .bh-story__title { font-size: calc(2.25rem * ${s.scStoryTitle}) !important; } }
.bury-hill-page .bh-story__lead { font-size: calc(1.125rem * ${s.scStoryLead}) !important; }
.bury-hill-page .bh-story__body { font-size: calc(1rem * ${s.scStoryBody}) !important; }
.bury-hill-page .bh-bento__stat-num { font-size: calc(3.25rem * ${s.scStatNum}) !important; }

.bury-hill-page .bh-carousel__title { font-size: calc(2rem * ${s.scCarouselTitle}) !important; }
.bury-hill-page .bh-product-card__title { font-size: calc(1.375rem * ${s.scProductTitle}) !important; }
.bury-hill-page .bh-product-card__desc { font-size: calc(0.875rem * ${s.scProductDesc}) !important; }
.bury-hill-page .bh-product-card__badge { font-size: calc(0.6875rem * ${s.scProductBadge}) !important; }

.bury-hill-page .bh-tech__title { font-size: calc(2rem * ${s.scTechTitle}) !important; }
.bury-hill-page .bh-tech-card__title { font-size: calc(1.25rem * ${s.scTechCardTitle}) !important; }
.bury-hill-page .bh-tech-card__desc { font-size: calc(0.875rem * ${s.scTechCardDesc}) !important; }

.bury-hill-page .bh-faq__title { font-size: calc(2rem * ${s.scFaqTitle}) !important; }
.bury-hill-page .bh-faq__question { font-size: calc(1.125rem * ${s.scFaqQ}) !important; }
.bury-hill-page .bh-faq__answer p { font-size: calc(0.9375rem * ${s.scFaqA}) !important; }

.bury-hill-page .bh-footer-cta__title { font-size: calc(2.25rem * ${s.scFooterTitle}) !important; }
@media (min-width: 1024px) { .bury-hill-page .bh-footer-cta__title { font-size: calc(3rem * ${s.scFooterTitle}) !important; } }
.bury-hill-page .bh-footer-cta__desc { font-size: calc(1.125rem * ${s.scFooterDesc}) !important; }
`;

// BLOCK GENERATORS FOR MAGENTO CMS
const getBlock2 = (s) => `
<!-- BLOCK 2: HERO & TRUST SIGNALS -->
<section class="bh-hero" id="bury-hill-hero" style="background-image: url('${s.heroImage}');">
  <div class="bh-hero__overlay"></div>
  <div class="bh-container" style="position: relative; z-index: 10; padding-top: 4.5rem; padding-bottom: 4.5rem;">
    <div class="bh-hero__content-box">
      <span class="bh-hero__badge">
        <span class="material-symbols-outlined" style="font-size: 16px;">workspace_premium</span>
        ${s.heroBadge}
      </span>
      <h1 class="bh-hero__title">
        ${s.heroTitle.replace(/\n/g, '<br/>')}
      </h1>
      <p class="bh-hero__desc">
        ${s.heroDesc}
      </p>
      <div class="bh-hero__actions">
        <a href="${s.heroBtn1Url}" class="bh-btn bh-btn--primary">${s.heroBtn1}</a>
        <a href="${s.heroBtn2Url}" class="bh-btn bh-btn--secondary">${s.heroBtn2}</a>
      </div>
    </div>
  </div>
</section>

<!-- TRUST SIGNALS STRIP -->
<section class="bh-trust-strip">
  <div class="bh-container">
    <div class="bh-trust-strip__grid">
      <div class="bh-trust-item">
        <div class="bh-trust-item__icon-wrap">
          <span class="material-symbols-outlined">${s.trust1Icon}</span>
        </div>
        <div>
          <h3 class="bh-trust-item__title">${s.trust1Title}</h3>
          <p class="bh-trust-item__sub">${s.trust1Sub}</p>
        </div>
      </div>
      <div class="bh-trust-divider"></div>
      <div class="bh-trust-item">
        <div class="bh-trust-item__icon-wrap">
          <span class="material-symbols-outlined">${s.trust2Icon}</span>
        </div>
        <div>
          <h3 class="bh-trust-item__title">${s.trust2Title}</h3>
          <p class="bh-trust-item__sub">${s.trust2Sub}</p>
        </div>
      </div>
      <div class="bh-trust-divider"></div>
      <div class="bh-trust-item">
        <div class="bh-trust-item__icon-wrap">
          <span class="material-symbols-outlined">${s.trust3Icon}</span>
        </div>
        <div>
          <h3 class="bh-trust-item__title">${s.trust3Title}</h3>
          <p class="bh-trust-item__sub">${s.trust3Sub}</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const getBlock3 = (s) => `
<!-- BLOCK 3: BRAND STORY & HERITAGE BENTO -->
<section class="bh-story" id="bury-hill-story">
  <div class="bh-container">
    <div class="bh-story__grid">
      <div class="bh-story__text-col">
        <span class="bh-story__tag">${s.storyTag}</span>
        <h2 class="bh-story__title">${s.storyTitle}</h2>
        <p class="bh-story__lead">${s.storyLead}</p>
        <p class="bh-story__body">${s.storyBody}</p>
        <a href="${s.storyLinkUrl}" class="bh-story__link" target="_blank" rel="noopener noreferrer">
          ${s.storyLinkText}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div class="bh-story__bento">
        <div class="bh-bento__item--wide">
          <img src="${s.storyImgWide}" alt="Premium Topsoil Quality" class="bh-bento__img" loading="lazy" />
        </div>
        <div class="bh-bento__item--square">
          <img src="${s.storyImgSquare}" alt="Bury Hill Delivery Fleet" class="bh-bento__img" loading="lazy" />
        </div>
        <div class="bh-bento__item--stat">
          <span class="bh-bento__stat-num">${s.storyStatNum}</span>
          <h3 class="bh-bento__stat-title">${s.storyStatTitle}</h3>
          <p class="bh-bento__stat-desc">${s.storyStatDesc}</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const getBlock4 = (s) => `
<!-- BLOCK 4: 10-PRODUCT SPECIALIST CAROUSEL -->
<section class="bh-carousel-section" id="bury-hill-carousel">
  <div class="bh-container">
    <div class="bh-carousel__header">
      <div>
        <h2 class="bh-carousel__title">${s.carouselTitle}</h2>
        <p class="bh-carousel__subtitle">${s.carouselSubtitle}</p>
      </div>
      <div class="bh-carousel__nav-btns bh-carousel__nav-btns--desktop">
        <button class="bh-carousel__nav-btn bh-carousel-prev-btn" aria-label="Previous Products">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button class="bh-carousel__nav-btn bh-carousel-next-btn" aria-label="Next Products">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
    
    <div class="bh-carousel__track-wrapper">
      <div class="bh-carousel__track" id="bh-product-track">
        ${s.products.map(p => `
        <div class="bh-product-card">
          <div class="bh-product-card__img-wrap">
            <img src="${p.img}" alt="${p.title}" class="bh-product-card__img" loading="lazy" />
          </div>
          <div class="bh-product-card__body">
            <span class="bh-product-card__badge">${p.badge}</span>
            <h3 class="bh-product-card__title">${p.title}</h3>
            <p class="bh-product-card__desc">${p.desc}</p>
            <a href="${p.btnUrl}" class="bh-btn bh-btn--card">${p.btnText}</a>
          </div>
        </div>
        `).join('')}
      </div>
    </div>

    <!-- Mobile Navigation Buttons (Centered Below Products) -->
    <div class="bh-carousel__nav-btns bh-carousel__nav-btns--mobile">
      <button class="bh-carousel__nav-btn bh-carousel-prev-btn" aria-label="Previous Products">
        <span class="material-symbols-outlined">chevron_left</span>
      </button>
      <button class="bh-carousel__nav-btn bh-carousel-next-btn" aria-label="Next Products">
        <span class="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  </div>
</section>

<script>
(function() {
  var track = document.getElementById('bh-product-track');
  var prevBtns = document.querySelectorAll('.bh-carousel-prev-btn');
  var nextBtns = document.querySelectorAll('.bh-carousel-next-btn');
  if (track) {
    prevBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        track.scrollBy({ left: -340, behavior: 'smooth' });
      });
    });
    nextBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        track.scrollBy({ left: 340, behavior: 'smooth' });
      });
    });
  }
})();
</script>
`;

const getBlock5 = (s) => `
<!-- BLOCK 5: TECHNICAL STANDARDS & QUALITY -->
<section class="bh-tech" id="bury-hill-standards">
  <div class="bh-container">
    <div class="bh-tech__header">
      <span class="bh-tech__tag">${s.techTag}</span>
      <h2 class="bh-tech__title">${s.techTitle}</h2>
      <p class="bh-tech__subtitle">${s.techSubtitle}</p>
    </div>
    <div class="bh-tech__grid">
      ${s.techCards.map(c => `
      <div class="bh-tech-card">
        <div class="bh-tech-card__icon">
          <span class="material-symbols-outlined">${c.icon}</span>
        </div>
        <h3 class="bh-tech-card__title">${c.title}</h3>
        <p class="bh-tech-card__desc">${c.desc}</p>
      </div>
      `).join('')}
    </div>
  </div>
</section>
`;

const getBlock6 = (s) => `
<!-- BLOCK 6: FAQS & FOOTER TRADE CTA -->
<section class="bh-faq" id="bury-hill-faq">
  <div class="bh-container">
    <div class="bh-faq__header">
      <span class="bh-faq__tag">${s.faqTag}</span>
      <h2 class="bh-faq__title">${s.faqTitle}</h2>
    </div>
    <div class="bh-faq__list">
      ${s.faqs.map((f, idx) => `
      <details class="bh-faq__item" ${idx === 0 ? 'open' : ''}>
        <summary class="bh-faq__question">
          <span>${f.question}</span>
          <span class="material-symbols-outlined bh-faq__icon">expand_more</span>
        </summary>
        <div class="bh-faq__answer">
          <p>${f.answer}</p>
        </div>
      </details>
      `).join('')}
    </div>
  </div>
</section>

<!-- FOOTER TRADE CTA BANNER -->
<section class="bh-footer-cta" id="bury-hill-trade">
  <div class="bh-container">
    <div class="bh-footer-cta__inner">
      <span class="bh-footer-cta__tag">${s.footerTag}</span>
      <h2 class="bh-footer-cta__title">${s.footerTitle}</h2>
      <p class="bh-footer-cta__desc">${s.footerDesc}</p>
      <div class="bh-footer-cta__buttons">
        <a href="${s.footerBtn1Url}" class="bh-btn bh-btn--cta-green">${s.footerBtn1}</a>
        <a href="${s.footerBtn2Url}" class="bh-btn bh-btn--cta-ghost">${s.footerBtn2}</a>
      </div>
    </div>
  </div>
</section>
`;

createApp({
    setup() {
        let initialState = JSON.parse(JSON.stringify(defaultState));
        const savedStateStr = localStorage.getItem('buryHillBuilderState');
        if (savedStateStr) {
            try {
                const saved = JSON.parse(savedStateStr);
                initialState = { ...initialState, ...saved };
            } catch (e) {
                console.error("Could not load saved state", e);
            }
        }

        const state = reactive(initialState);
        const activeTab = ref('hero');
        const previewDevice = ref('desktop');
        const showExport = ref(false);
        const exportTab = ref(1);
        const exportedBlocks = reactive({
            block1: '',
            block2: '',
            block3: '',
            block4: '',
            block5: '',
            block6: '',
            full: ''
        });

        // Sync local storage on edit
        watch(state, (newState) => {
            localStorage.setItem('buryHillBuilderState', JSON.stringify(newState));
        }, { deep: true });

        const wrapBlock = (htmlString) => {
            return `<div class="bury-hill-page">\n${htmlString}\n</div>`;
        };

        const previewHtml = computed(() => {
            return "<style>" + getScaleCSS(state) + "</style>\n" +
                   wrapBlock(getBlock2(state) + "\n" + getBlock3(state) + "\n" + getBlock4(state) + "\n" + getBlock5(state) + "\n" + getBlock6(state));
        });

        const previewIframeDoc = computed(() => {
            return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="template-styles.css">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #faf9f7;
      overflow-x: hidden;
    }
    .bury-hill-page {
      --bh-font-headline: '${state.fontHeadline}', serif !important;
      --bh-font-body: '${state.fontBody}', sans-serif !important;
      font-size: ${state.fontSize}px !important;
    }
    ${getScaleCSS(state)}
  </style>
</head>
<body>
  ${wrapBlock(
    getBlock2(state) + "\n" +
    getBlock3(state) + "\n" +
    getBlock4(state) + "\n" +
    getBlock5(state) + "\n" +
    getBlock6(state)
  )}
</body>
</html>`;
        });

        const exportBlocks = async () => {
            let block1Str = "";
            try {
                const res = await fetch('template-styles.css');
                const css = await res.text();

                block1Str = `<!-- Google Fonts & Material Symbols -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">

<!-- Bury Hill Scoped Styles (Safe for Magento 2) -->
<style>
${css}

/* Dynamic User Overrides */
.bury-hill-page {
    --bh-font-headline: '${state.fontHeadline}', serif !important;
    --bh-font-body: '${state.fontBody}', sans-serif !important;
    font-size: ${state.fontSize}px !important;
}

${getScaleCSS(state)}
</style>`;
            } catch (e) {
                block1Str = "<!-- Could not fetch template-styles.css. Please paste template-styles.css content here. -->";
            }

            exportedBlocks.block1 = block1Str;
            exportedBlocks.block2 = wrapBlock(getBlock2(state));
            exportedBlocks.block3 = wrapBlock(getBlock3(state));
            exportedBlocks.block4 = wrapBlock(getBlock4(state));
            exportedBlocks.block5 = wrapBlock(getBlock5(state));
            exportedBlocks.block6 = wrapBlock(getBlock6(state));

            exportedBlocks.full = `${block1Str}\n\n${wrapBlock(
                getBlock2(state) + "\n" +
                getBlock3(state) + "\n" +
                getBlock4(state) + "\n" +
                getBlock5(state) + "\n" +
                getBlock6(state)
            )}`;

            showExport.value = true;
            exportTab.value = 1;
        };

        const copyActiveBlock = () => {
            let content = '';
            if (exportTab.value === 'full') {
                content = exportedBlocks.full;
            } else {
                content = exportedBlocks['block' + exportTab.value];
            }
            navigator.clipboard.writeText(content);
            alert('Block copied to clipboard! Paste directly into Magento CMS.');
        };

        const resetState = () => {
            if (confirm("Are you sure you want to reset all content, products, and sizing back to original defaults?")) {
                localStorage.removeItem('buryHillBuilderState');
                Object.assign(state, defaultState);
                location.reload();
            }
        };

        const addProduct = () => {
            state.products.push({
                badge: "Specialist",
                title: "New Product",
                desc: "Description of premium product specification.",
                img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
                btnText: "View Product",
                btnUrl: "#"
            });
        };

        const removeProduct = (idx) => {
            if (state.products.length > 1) {
                state.products.splice(idx, 1);
            }
        };

        const addFaq = () => {
            state.faqs.push({
                question: "New FAQ Question?",
                answer: "Provide detailed answer for customers and trade professionals."
            });
        };

        const removeFaq = (idx) => {
            state.faqs.splice(idx, 1);
        };

        // Wire carousel scroll controls inside Vue preview on mount & update
        const initPreviewCarousel = () => {
            setTimeout(() => {
                const prev = document.getElementById('bh-carousel-prev');
                const next = document.getElementById('bh-carousel-next');
                const track = document.getElementById('bh-product-track');
                if (prev && next && track) {
                    prev.onclick = () => track.scrollBy({ left: -360, behavior: 'smooth' });
                    next.onclick = () => track.scrollBy({ left: 360, behavior: 'smooth' });
                }
            }, 100);
        };

        onMounted(() => {
            initPreviewCarousel();
        });

        watch(previewHtml, () => {
            initPreviewCarousel();
        });

        return {
            state,
            activeTab,
            previewDevice,
            previewHtml,
            previewIframeDoc,
            showExport,
            exportTab,
            exportedBlocks,
            exportBlocks,
            copyActiveBlock,
            resetState,
            addProduct,
            removeProduct,
            addFaq,
            removeFaq
        };
    }
}).mount('#app');
