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

export function businessJsonLd({
  origin = SITE_ORIGIN,
  path = "/",
  services = [],
  packages = [],
  faqs = [],
} = {}) {
  const home = origin || SITE_ORIGIN;
  const pageUrl = `${home}${path === "/" ? "/" : path}`;
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
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orange County",
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
    slogan: "Grow your small business with a stronger online presence",
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
      name: "Website packages",
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
      name: SEO_TITLE,
      description: SEO_DESCRIPTION,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      inLanguage: "en-US",
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
