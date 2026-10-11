/**
 * Add a post to publish it on /blog and /blog/:slug.
 * Each post needs a unique slug, a title, a short description, an ISO date,
 * and sections of paragraphs. Optional section headings are fine.
 *
 * After adding a post, add its URL to public/sitemap.xml.
 */
export const blogPosts = [
  {
    slug: "how-modern-web-infrastructure-drives-local-growth",
    title: "Beyond the Digital Business Card: How Modern Web Infrastructure Drives Real Local Growth",
    description:
      "Discover why a basic template website isn't enough for local businesses anymore. Learn how technical SEO, site speed, and smart integrations actually drive foot traffic and revenue.",
    date: "2026-10-10",
    author: {
      name: "Andy Trinh Phung",
      jobTitle: "Lead Full-Stack Software Engineer",
      locality: "Santa Ana",
      bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
    },
    cta: "Curious how your current website is performing? Request a free technical SEO and speed audit today.",
    upcoming: [
      "How We Integrated DoorDash and Yelp Waitlists for an OC Restaurant",
      "Core Web Vitals for a Local Service Business",
      "What Website Integrations Look Like for an Orange County Firm",
    ],
    sections: [
      {
        paragraphs: [
          "If you run a local business—whether it's a bustling restaurant in Orange County or a specialized law firm—you already know you need a website. But there is a massive difference between a website that acts as a static digital business card and a website that actively works as your best employee.",
          "Many business owners invest in a basic template, launch it, and wonder why it isn't generating leads, foot traffic, or reservations. The reality is that modern consumer habits have changed. If your digital presence isn't optimized for speed, seamlessly integrated with your daily operations, and built for local search, you are likely leaving money on the table.",
          "Here is a breakdown of the three technical pillars that separate high-performing local websites from the rest of the pack, and how they directly impact your bottom line. For Orange County owners, that work is local business web development: technical SEO for a local business, website integrations the staff will actually use, and a direct plan for improving website conversion rates.",
        ],
      },
      {
        heading: "1. The Invisible Revenue Killer: Page Speed and Technical SEO",
        paragraphs: [
          "When a potential customer is searching for a local service on their phone, they expect instant answers. If your site takes longer than three seconds to load, over half of those visitors will abandon it and click on your competitor.",
          "But speed isn’t just about user patience; it’s a primary metric for Google. Search engines prioritize websites that offer exceptional user experiences—a concept measured by \"Core Web Vitals.\"",
          "Off-the-shelf website builders often come bloated with unnecessary code that slows down performance. Transitioning to modern web architectures (like those utilizing headless frameworks or edge-network delivery systems like Cloudflare) ensures that your site loads in milliseconds. This structural upgrade signals to search engines that your site is high-quality, naturally boosting your local SEO ranking without you having to spend thousands on continuous marketing retainers.",
        ],
      },
      {
        heading: "2. Operational Integrations: Removing Friction for the Customer",
        paragraphs: [
          "A high-converting website doesn't make the user work hard. It integrates directly with the services they already trust, and more importantly, the tools your staff already uses. Improving website conversion rates starts there: fewer steps between the search and the reservation, order, or consult.",
          "Consider a local dining establishment. A static PDF menu that requires users to pinch and zoom on their phones creates friction. A smart web presence removes that friction by directly integrating essential operational tools into the site itself:",
        ],
        list: [
          "Waitlist & Reservation Systems: Embedding tools like Yelp Waitlist directly into your homepage so users can secure their spot before they even park.",
          "Delivery & Ordering: Seamless hand-offs to DoorDash or direct Stripe payment gateways for online catering orders.",
          "Lead Generation: For service-based businesses, automated intake forms that instantly route pre-qualified client details into a CRM.",
        ],
        paragraphsAfter: [
          "When your website speaks directly to your operational software, you reduce manual data entry for your team and provide a frictionless experience for your customers.",
          [
            "The client notes published on this site are ",
            { text: "I.T.O. Insurance Agency", href: "/work/ito-insurance-agency" },
            ", ",
            { text: "Total Garage HTX", href: "/work/total-garage-htx" },
            ", and ",
            { text: "Starstruck Nails & Spa", href: "/work/starstruck-nails-spa" },
            ".",
          ],
        ],
      },
      {
        heading: "3. Scalability Without the Maintenance Headache",
        paragraphs: [
          "One of the most common complaints from business owners is the constant need for website maintenance—broken plugins, security vulnerabilities, and layout shifts.",
          "By leveraging modern development practices, businesses can adopt a \"Website as a Service\" (WaaS) approach. Instead of a monolithic site that degrades over time, modern custom development utilizes modular, secure, and auto-scaling technologies. This means your digital infrastructure grows effortlessly as you open new locations, add new services, or experience sudden spikes in traffic, all while remaining highly secure and virtually maintenance-free.",
        ],
      },
      {
        heading: "The Bottom Line",
        paragraphs: [
          "Your website is the digital front door to your business. Upgrading from a basic template to a modern, integrated web platform isn’t just an IT expense; it is a direct investment in customer acquisition and operational efficiency.",
          "When your infrastructure is fast, intuitive, and properly optimized for local search, it stops being a static brochure and starts becoming an engine for growth.",
        ],
      },
    ],
  },
];

export const formatBlogDate = (isoDate) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const blogTopics = [
  {
    id: "websites",
    title: "Websites and Online Presence",
    text: "A small-business site has to make the work easy to understand and give customers a clear way to call or send a message. These notes start from the pages, layout, and launch details that matter before anything else.",
    href: "/services#websites",
    linkLabel: "See website services",
  },
  {
    id: "seo",
    title: "SEO and Local Visibility",
    text: "Customers often start on Google Search or Maps. These notes cover how a site, a Google Business Profile, and local pages work together when someone nearby is looking for what you do.",
    href: "/services#seo",
    linkLabel: "See SEO services",
  },
  {
    id: "packages",
    title: "Choosing a Website Package",
    text: "Starter, Growth, Catalog, and Custom fit different ways of selling. The package pages spell out which build matches a first site, a local service, a menu or product list, or a project with booking and integrations.",
    href: "/packages",
    linkLabel: "Compare website packages",
  },
];
