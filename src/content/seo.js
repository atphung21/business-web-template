import { business as businessProfile } from "./siteContent";

export const SITE_ORIGIN = "https://www.atpconsultingservices.com";
export const SITE_NAME = "ATP Consulting Services";
export const SITE_LEGAL = "ATP Consulting Services, LLC.";
export const SITE_PHONE = "(657) 330-1466";
export const SITE_TEL = "+16573301466";
export const SITE_EMAIL = "info@atpconsultingservices.com";
export const SITE_LOGO = `${SITE_ORIGIN}/og-image.png`;
export const SITE_IMAGE = `${SITE_ORIGIN}/og-image.png`;

export const SEO_TITLE =
  "ATP Consulting Services | Small Business Websites, SEO & Digital Marketing Nationwide";
export const SEO_DESCRIPTION =
  "ATP Consulting Services builds websites, SEO, and digital marketing for small businesses across the United States. Based in Orange County, CA — remote projects nationwide. Free consultation. Call (657) 330-1466.";

export const PAGE_SEO = {
  home: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
  },
  contact: {
    title: `Contact ATP Consulting Services | Request a Conversation`,
    description:
      "Start a conversation with ATP Consulting Services. Tell us about your website, SEO, or marketing goals. Orange County, CA and nationwide. Call (657) 330-1466 or email info@atpconsultingservices.com.",
  },
  services: {
    title: `Small Business Website, SEO & Marketing Services | ATP Consulting Services`,
    description:
      "Website design, SEO, local search, and digital marketing for small businesses. ATP Consulting Services is based in Irvine, CA and works nationwide. Call (657) 330-1466.",
  },
  packages: {
    title: `Website Packages for Small Business | ATP Consulting Services`,
    description:
      "Starter, Growth, Catalog, and Custom website packages for small businesses. Informational sites, local-service sites, product catalogs, and custom builds. Orange County, CA and nationwide. Free consultation.",
  },
  about: {
    title: `About ATP Consulting Services | Orange County & Nationwide`,
    description:
      "ATP Consulting Services is a software engineer-led consultancy in Orange County, CA. We build websites, SEO, and digital marketing for small businesses nationwide. Call (657) 330-1466.",
  },
  clients: {
    title: `Clients & Industries We Work With | ATP Consulting Services`,
    description:
      "Small businesses ATP Consulting Services has worked with, and the industries we build websites for: dental, trades, salons, restaurants, lawyers, and more. Based in Irvine, CA.",
  },
  faq: {
    title: `Frequently Asked Questions | ATP Consulting Services`,
    description:
      "Answers about small business website cost, project timelines, Orange County and nationwide service, SEO, Google Business Profile, and how to contact ATP Consulting Services. Call (657) 330-1466.",
  },
  blog: {
    title: `Small Business Website & SEO Blog | ATP Consulting Services`,
    description:
      "Practical notes on small-business websites, local SEO, and getting found on Google. From ATP Consulting Services in Irvine, CA, working with shops and local services nationwide.",
  },
};

export const SEO_KEYWORDS = [
  "small business website design",
  "small business website designer",
  "affordable website for small business",
  "custom website for small business",
  "small business web developer",
  "website design for local business",
  "professional website for small business USA",
  "nationwide small business web design",
  "remote website designer for small business",
  "website redesign for small business",
  "mobile friendly business website",
  "lead generating website",
  "service business website design",
  "contractor website design",
  "salon website design",
  "restaurant website design",
  "clinic website design",
  "insurance agency website",
  "retail website design",
  "SEO for small business",
  "small business SEO company",
  "local SEO services",
  "Google ranking for small business",
  "Google Business Profile optimization",
  "Google Maps SEO",
  "on-page SEO",
  "keyword research for small business",
  "digital marketing for small business",
  "small business digital marketing agency",
  "social media marketing for small business",
  "email marketing for small business",
  "Google Ads for small business",
  "Facebook ads for local business",
  "content marketing for small business",
  "website analytics setup",
  "Google Analytics for small business",
  "conversion tracking",
  "marketing automation for small business",
  "business website consultation",
  "technology consulting for small business",
  "Orange County web design",
  "Orange County SEO",
  "Irvine web designer",
  "Anaheim website design",
  "Santa Ana SEO",
  "Garden Grove web design",
  "Mission Viejo website",
  "Southern California small business websites",
  "ATP Consulting Services",
  "ATP Software Consulting Services",
  "website hosting and SSL setup",
  "domain setup for small business",
  "small business online presence",
  "get more customers online",
  "website and SEO package",
].join(", ");

export function articleTimestamp(isoDate) {
  if (!isoDate) return "";
  if (isoDate.includes("T")) return isoDate;
  return `${isoDate}T08:00:00-07:00`;
}

export function businessJsonLd({
  origin = SITE_ORIGIN,
  path = "/",
  services = [],
  packages = [],
  faqs = [],
  title,
  description,
  published,
} = {}) {
  const home = origin || SITE_ORIGIN;
  const pageUrl = `${home}${path === "/" ? "/" : path}`;
  const pageKey = path === "/" ? "home" : path.replace(/^\//, "");
  const pageTitle = title || PAGE_SEO[pageKey]?.title || SEO_TITLE;
  const pageDescription =
    description || PAGE_SEO[pageKey]?.description || SEO_DESCRIPTION;
  const businessId = `${home}/#business`;
  const websiteId = `${home}/#website`;

  const business = {
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: SITE_NAME,
    legalName: SITE_LEGAL,
    alternateName: [
      "ATP Consulting Services",
      "ATP Consulting",
      "ATP Software Consulting Services",
    ],
    description: SEO_DESCRIPTION,
    url: home,
    image: SITE_IMAGE,
    logo: SITE_LOGO,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    sameAs: [businessProfile.linkedin],
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Irvine",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7175,
      longitude: -117.8311,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "State", name: "California" },
      { "@type": "AdministrativeArea", name: "Orange County" },
      { "@type": "City", name: "Irvine" },
      { "@type": "City", name: "Santa Ana" },
    ],
    knowsAbout: [
      "small business website design",
      "website redesign",
      "search engine optimization",
      "local SEO",
      "Google Business Profile",
      "digital marketing",
      "social media marketing",
      "email campaigns",
      "paid advertising",
      "Google Analytics",
      "marketing automation",
      "domain and hosting setup",
    ],
    slogan: "Grow your business with a stronger online presence",
    makesOffer: (services || []).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: { "@type": "Country", name: "United States" },
        provider: { "@id": businessId },
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Packages",
      itemListElement: (packages || []).map((pkg, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: pkg.name,
          description: `${pkg.bestFor}. ${(pkg.features || []).join("; ")}`,
        },
      })),
    },
  };

  const graph = [
    business,
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: home,
      name: SITE_LEGAL,
      description: SEO_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": businessId },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      inLanguage: "en-US",
      ...(published
        ? {
            datePublished: articleTimestamp(published),
            dateModified: articleTimestamp(published),
          }
        : {}),
    },
  ];

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function blogIndexJsonLd({ title, description, posts = [] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_ORIGIN}/blog#blog`,
    url: `${SITE_ORIGIN}/blog`,
    name: title,
    description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: articleTimestamp(post.date),
      url: `${SITE_ORIGIN}/blog/${post.slug}`,
    })),
  };
}

export function blogPostJsonLd(post) {
  const url = `${SITE_ORIGIN}/blog/${post.slug}`;
  const businessId = `${SITE_ORIGIN}/#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["BlogPosting", "Article"],
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        articleSection: post.section || "Small business websites",
        datePublished: articleTimestamp(post.date),
        dateModified: articleTimestamp(post.updated || post.date),
        inLanguage: "en-US",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        url,
        image: SITE_IMAGE,
        author: {
          "@type": "Person",
          name: post.author?.name || "Andy Trinh Phung",
          jobTitle: post.author?.jobTitle || "Lead Full-Stack Software Engineer",
          worksFor: { "@id": businessId },
          address: {
            "@type": "PostalAddress",
            addressLocality: post.author?.locality || "Santa Ana",
            addressRegion: "CA",
            addressCountry: "US",
          },
        },
        publisher: { "@id": businessId },
        about: { "@id": businessId },
        isPartOf: { "@id": `${SITE_ORIGIN}/blog#blog` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_ORIGIN}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };
}

export function applyPageSeo({
  title,
  description,
  path = "/",
  robots = "index, follow, max-image-preview:large",
  ogType,
  published,
}) {
  const url = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && description) meta.setAttribute("content", description);
  const robotsMeta = document.querySelector('meta[name="robots"]');
  if (robotsMeta) robotsMeta.setAttribute("content", robots);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", url);
  const ogTypeMeta = document.querySelector('meta[property="og:type"]');
  if (ogTypeMeta) ogTypeMeta.setAttribute("content", ogType || "business.business");
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", url);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && description) ogDesc.setAttribute("content", description);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute("content", title);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc && description) twDesc.setAttribute("content", description);
  const publishedAt = articleTimestamp(published);
  setArticleDateMeta("article:published_time", publishedAt);
  setArticleDateMeta("article:modified_time", publishedAt);
}

function setArticleDateMeta(property, content) {
  let meta = document.head.querySelector(`meta[property="${property}"]`);
  if (!content) {
    if (meta) meta.remove();
    return;
  }
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}
