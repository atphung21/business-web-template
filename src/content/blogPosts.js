import { archivePosts } from "./blogArchive";

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
    seoTitle: "How a small business website drives local growth",
    section: "Websites",
    description:
      "Discover why a basic template website isn't enough for local businesses anymore. Learn how technical SEO, site speed, and smart integrations actually drive foot traffic and revenue.",
    date: "2026-09-01",
    author: {
      name: "Andy Trinh Phung",
      jobTitle: "Lead Full-Stack Software Engineer",
      locality: "Santa Ana",
      bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
    },
    cta: "Curious how your current website is performing? Request a free technical SEO and speed audit today.",
    upcoming: [
      {
        title: "Core Web Vitals for a Local Service Business",
        href: "/blog/core-web-vitals-for-a-local-service-business",
      },
      {
        title: "Waitlists, Delivery, and Reservations for a Local Restaurant",
        href: "/blog/waitlists-delivery-and-reservations",
      },
      {
        title: "What to Connect on a Professional Firm's Website",
        href: "/blog/what-to-connect-on-a-professional-firm-website",
      },
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
  {
    slug: "core-web-vitals-for-a-local-service-business",
    section: "Site speed",
    title: "Core Web Vitals for a Local Service Business",
    description:
      "A plain-language guide to Core Web Vitals for contractors, salons, and clinics. Learn what loading, interaction, and visual stability mean on a phone, and how to check them.",
    date: "2026-09-08",
    author: {
      name: "Andy Trinh Phung",
      jobTitle: "Lead Full-Stack Software Engineer",
      locality: "Santa Ana",
      bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
    },
    cta: "If a number looks off, start with the page people open from Google. That is usually the one worth fixing first.",
    sections: [
      {
        paragraphs: [
          "Most people looking for a plumber, a salon, or a clinic do it on a phone, often while they are already in the car or standing in a parking lot. They tap a result, and they decide in a few seconds whether the page is worth staying on.",
          "Google describes that experience with three measurements called Core Web Vitals. They are not a score you have to memorize. They are a way to notice whether the page shows up, responds, and stays still while someone tries to call you.",
          "This note is for owners of local service businesses in Orange County and anywhere else a customer searches \"near me.\" You can check the numbers yourself. You do not need to become a developer to know what they are asking.",
        ],
      },
      {
        heading: "1. Loading: did the page show up before they gave up?",
        paragraphs: [
          "The loading measure asks how long it takes for the main thing on the page to appear. On a service site, that is usually the business name, what you do, and a way to call. If a huge photo or a slideshow loads first, the phone is busy with that instead of the phone number.",
          "A useful rule of thumb is the one people already feel: if you would not wait for it on your own phone, a new customer will not either. Google's published \"good\" range for the largest piece of the page is about two and a half seconds or less on a typical mobile connection. Slower than four seconds is the range where people leave.",
          "You can look this up without installing anything. In Google Search Console, open Core Web Vitals and choose the mobile report. PageSpeed Insights will also test a single address and tell you which image or script is the heavy one. Start with the page that ranks, not the page you like best.",
        ],
      },
      {
        heading: "2. Interaction: did the tap do anything?",
        paragraphs: [
          "The interaction measure watches the delay between a tap and the page reacting. A \"Call now\" button that sits there for a second feels broken, even when it eventually works. The same thing happens with a menu that opens late, or a form that ignores the first tap.",
          "Google treats a delay under about 200 milliseconds as good, and anything over half a second as poor. You will feel a poor score before you read it. Open the site on a phone that is not connected to the shop's fast Wi-Fi. Tap the phone number, the directions link, and the first button. If any of them hesitate, that is the problem this metric is describing.",
        ],
        list: [
          "Test on a cellular connection, not only the office network.",
          "Tap the call link, the map link, and the main button.",
          "Notice pop-ups that cover the button on the first screen.",
        ],
      },
      {
        heading: "3. Visual stability: did the page jump while they were reading?",
        paragraphs: [
          "Visual stability is about the page moving after it looks ready. A banner drops in, the phone number shifts down, and the person taps the wrong thing. Google scores that movement. A good score stays near zero. A poor one is the jump you have already cursed on other sites.",
          "Common causes on a small-business site are ads, chat bubbles, and images with no set height. Reserving space for the photo, and keeping pop-ups off the first screen, fixes more of this than a redesign does.",
          "For a contractor, a salon, or a clinic, \"good enough\" is simple. The first screen names the business and the service area, the phone number does not move, and a tap on that number starts a call. If those three things are true on a phone, the vitals are serving the customer even if a lab report still has a yellow mark.",
        ],
      },
      {
        heading: "A check you can do this week",
        paragraphs: [
          "Pick the one page Google already sends people to. Run it through PageSpeed Insights on mobile, then open that same page on your phone. Compare the report with what you felt. Fix the largest image or the button that hesitates before you worry about a perfect score.",
          "Core Web Vitals are a shared language between your site and the person searching. They are worth understanding because they describe a real visit, not because a dashboard asked for a number.",
        ],
      },
    ],
  },
  {
    slug: "waitlists-delivery-and-reservations",
    section: "Websites",
    title: "Waitlists, Delivery, and Reservations for a Local Restaurant",
    description:
      "How an Orange County restaurant can choose a Yelp waitlist, a DoorDash link, or a reservation path, and when a PDF menu gets in the way.",
    date: "2026-09-15",
    author: {
      name: "Andy Trinh Phung",
      jobTitle: "Lead Full-Stack Software Engineer",
      locality: "Santa Ana",
      bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
    },
    cta: "Put the path you want guests to use on the first screen, and name it the way the host stand already says it.",
    sections: [
      {
        paragraphs: [
          "A guest who finds a restaurant on their phone is usually trying to answer one question: can I eat here, and how? They are not browsing. They want a menu they can read, a wait they can join, or a way to order from the couch.",
          "Yelp, DoorDash, and a reservation book are all reasonable tools. The trouble starts when the website hides them, or when every option is offered at once and none of them is the one the staff actually wants. This is a planning note for owners and hosts, not a build manual.",
        ],
      },
      {
        heading: "1. Decide the job of the page before you add a button",
        paragraphs: [
          "Walk through a Friday night the way a guest does. If the dining room fills up and the host stand lives on a waitlist, the site should offer that waitlist. If most of the business is takeout, the site should make ordering obvious. If you take reservations for parties and walk-ins for everyone else, say that in a sentence.",
          "A page that shows \"Order,\" \"Reserve,\" \"Waitlist,\" \"Catering,\" and \"Gift cards\" in one row is asking the guest to do the sorting. Pick the one action that matches tonight's service, and let the others live one tap further down.",
        ],
        list: [
          "Full dining room: a waitlist or a reservation link belongs on the first screen.",
          "Mostly takeout: the menu and the order link belong on the first screen.",
          "Both, depending on the night: say which one is which, in the same words the host uses.",
        ],
      },
      {
        heading: "2. A PDF menu is fine until the phone has to pinch it",
        paragraphs: [
          "A PDF is a normal way to publish a menu that changes. It fails when the file is a photo of a printed menu, sideways, and the guest has to zoom to find the price. On a phone, that is the moment they leave for a place with a menu they can scroll.",
          "If the PDF is a real document with text, a clear link that says \"Menu\" is enough. Put it where the thumb lands, not under a paragraph about the restaurant's story. If the file is a scan, retype the current menu or export it as text. Guests are not grading the design. They are looking for a dish.",
          "The same test applies to a DoorDash or similar handoff. A link that opens the store they already use is a kindness. A link that opens a general homepage, or a store that is closed, is a dead end. Check the link on a phone the way a guest will, including the hours.",
        ],
      },
      {
        heading: "3. Match the button to the tool the staff already trusts",
        paragraphs: [
          "A Yelp waitlist only helps if the host stand is actually seating from it. A reservation widget only helps if someone is confirming those reservations. Guests forgive a simple page. They do not forgive a button that promises a table the restaurant is not holding.",
          "Before you add the button, ask the people on the floor what they will do with it on a busy night. If the answer is \"we will ignore it,\" leave it off the site. An honest \"call the host stand after 5\" is better than a form nobody opens.",
          "Name the button the way a person would say it: \"Join the waitlist,\" \"See the menu,\" \"Order for pickup.\" Avoid a label that could mean two things. A guest in a parking lot in Orange County should not have to guess whether \"Book\" means a table, a party, or a catering tray.",
        ],
      },
      {
        heading: "A check you can do before Friday",
        paragraphs: [
          "Open the site on a phone. Count the taps from the first screen to the menu, and from the first screen to the action you want tonight. If either path takes more than two taps, or the words do not match what the host stand says, fix the words before you add another tool.",
          "The tools are optional. The clear path is not. Guests already know how to wait, order, and reserve. The site's job is to point at the one your restaurant is ready to honor.",
        ],
      },
    ],
  },
  {
    slug: "what-to-connect-on-a-professional-firm-website",
    section: "Websites",
    title: "What to Connect on a Professional Firm's Website",
    description:
      "What a law office or similar practice should connect to its website: a map, a real contact path, and an intake form the staff will actually read.",
    date: "2026-09-22",
    author: {
      name: "Andy Trinh Phung",
      jobTitle: "Lead Full-Stack Software Engineer",
      locality: "Santa Ana",
      bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
    },
    cta: "If the map, the phone number, and the form all agree with the front desk, the site is already doing its job.",
    sections: [
      {
        paragraphs: [
          "People do not visit a law office website to admire it. They are trying to decide whether this is the right practice, whether the office is near them, and how to start a conversation without getting lost.",
          "Three connections cover that visit for most professional firms: a map, a contact path a person answers, and a short intake form. Everything else can wait. This note is for the attorney, the office manager, or anyone else who has been handed a website and asked to \"add the integrations.\"",
        ],
      },
      {
        heading: "1. A map that matches the door people use",
        paragraphs: [
          "The map on the site and the pin on Google should describe the same entrance. If clients are told to park behind the building, the listing and the page should say that. A pin on the street, with a suite number only in the footer, is how people call from the wrong lobby.",
          "Use the same name, address, and phone number on the website, the Google Business Profile, and the email signature. Search engines and clients both treat small differences as a reason to doubt the listing. Write the address the way it appears on the door, including the suite.",
          "A link that opens directions in Google Maps is enough. You do not need a custom map. You do need the hours next to it, including a note when the phone is answered but the office is closed.",
        ],
      },
      {
        heading: "2. A contact path someone is responsible for",
        paragraphs: [
          "A phone number only works if a person or a service answers it during the hours you publish. An email address only works if someone reads it the same day. Put one primary path on the first screen, and make sure the staff knows it is theirs.",
          "If the firm uses a shared inbox, say so in the office, not necessarily on the site. What the visitor needs is a response. A form that lands in a mailbox nobody checks is worse than a phone number, because the visitor thinks they have started something.",
        ],
        list: [
          "One phone number on the first screen, the same one as the Google listing.",
          "Hours that match the listing, including lunch or court days if the phone is dark.",
          "A named person, or a shared desk, who owns replies before the end of the day.",
        ],
      },
      {
        heading: "3. An intake form that asks only what the first call needs",
        paragraphs: [
          "An intake form is not the whole client interview. It is the note the staff needs before they call back: who is writing, how to reach them, and what kind of matter it is. Five or six fields are plenty. A form that asks for documents, a timeline, and a novel will be abandoned on a phone.",
          "Tell the visitor what happens next, in one sentence under the button. \"We read these on business days and call you back\" is more useful than a thank-you page that says the message was sent. If the matter is urgent, say to call, and do not make the form the only door.",
          "Sensitive details do not belong in a general website form. If the practice handles matters people would not want in a normal inbox, the form should collect contact information and the type of matter, then move the rest of the conversation to a channel the firm already trusts. The staff should be able to explain that in their own words.",
        ],
      },
      {
        heading: "What can wait",
        paragraphs: [
          "Chat widgets, client portals, and appointment calendars are useful later, when the office has agreed who watches them. Adding them on day one, before the map and the phone number agree, gives visitors more places to get stuck.",
          "Connect the map, the phone number, and a short form. Read one real submission with the person who will answer it. If those three pieces match the front desk, the site is already helping the community find the right office.",
        ],
      },
    ],
  },
  {
    slug: "google-business-profile-for-a-service-area-business",
    title: "Google Business Profile for a Service-Area Business",
    section: "Local SEO",
    description:
      "How a contractor, plumber, or landscaper sets up Google Business Profile and Maps without publishing a home address, and what has to match the website.",
    date: "2026-09-29",
    author: {
      name: "Andy Trinh Phung",
      jobTitle: "Lead Full-Stack Software Engineer",
      locality: "Santa Ana",
      bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
    },
    cta: "Fix the name, phone number, and hours on the listing and the site before you spend money on ads.",
    sections: [
      {
        paragraphs: [
          "When someone searches for a plumber, a landscaper, or a garage organizer, they often pick from the map. They are not reading a homepage first. They look at the name, the stars, the hours, and whether the pin is somewhere they can picture.",
          "That map result is a Google Business Profile. For a shop with a public door, the pin should sit on that door. For a contractor who drives to the job, the pin should not sit on the house. This note is for that second case: trades that work across a service area and do not want a home address on the internet.",
        ],
      },
      {
        heading: "1. The listing is a second homepage",
        paragraphs: [
          "People decide from the listing before they ever reach your site. The business name should be the name on the truck and the invoice, not a keyword stuffed in front of it. \"Orange County Best Plumbing Services Near Me\" looks like an ad. The real name looks like a business.",
          "Choose one primary category that matches the search you want. A plumber who also clears drains can add drain cleaning as an extra category. A pile of loosely related categories, from locksmith to roofer, makes the listing harder to trust.",
          "Write a short description in plain words: what you do, and the cities you actually drive to. Set hours to the times a person answers the phone. Photos should be finished work, the truck, and the crew, not a stock kitchen. A listing with no photos looks closed.",
        ],
      },
      {
        heading: "2. Hide the address when the storefront is a home",
        paragraphs: [
          "Google lets a service-area business hide the street address and show the cities or regions it serves instead. Use that when customers do not visit you. A pin on a house sends people to a driveway that is not a shop, and it publishes an address you may not want public.",
          "List the cities you will drive to on a normal day. Do not add a whole county because it looks bigger. If you will not take a job in that city, leave it off. A customer who calls from outside your real area wastes the call, and a listing that claims everywhere is less believable than one that names a few towns.",
          "If you do have a small shop or a yard customers can visit, show that address and skip the hide option. The rule is simple: publish the place people are invited to stand, and hide the place they are not.",
        ],
      },
      {
        heading: "3. Make the listing and the website agree",
        paragraphs: [
          "Searchers and Google both notice when the map says one phone number and the website says another. The business name, the phone number, and the hours should match on the listing, the contact page, and the footer. If the site still shows an old cell number, fix the site the same day you fix the listing.",
          "Open the three places on a phone and read them out loud. They should sound like the same business.",
        ],
        list: [
          "Business name on the Maps listing, the site header, and the invoice.",
          "One phone number, the one a person answers during the hours you publish.",
          "Hours that match, including days you are on jobs and the phone is off.",
          "Cities on the listing that also appear, in the same words, on the contact page.",
        ],
        paragraphsAfter: [
          "A website link on the listing should open the page that explains the work, not a social profile and not a broken address. If you offer two different trades, link to the page for the one in your primary category.",
        ],
      },
      {
        heading: "Before you pay for ads",
        paragraphs: [
          "An ad can put you at the top of a search for a week. It cannot repair a listing that shows the wrong number. Spend an hour on the name, the category, the service area, and the match between the listing and the site.",
          "When those agree, the map is already doing the job a nearby customer needs: they can see what you do, where you work, and how to call.",
        ],
      },
    ],
  },
  {
    slug: "what-to-put-on-a-local-service-page",
    title: "What to Put on a Local Service Page",
    section: "Local SEO",
    description:
      "What a contractor, salon, or clinic should put on each service page so a nearby Google search explains the work and gives a way to call.",
    date: "2026-10-06",
    author: {
      name: "Andy Trinh Phung",
      jobTitle: "Lead Full-Stack Software Engineer",
      locality: "Santa Ana",
      bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
    },
    cta: "Read the page on a phone. If you cannot tell what to do in a few seconds, a ranking will not turn into a call.",
    sections: [
      {
        paragraphs: [
          "A homepage can introduce the business. It cannot rank for every job you do. A plumber who also clears drains, or a salon that does both manicures and brows, needs a page for each service, written the way a customer would search for it.",
          "This note is for contractors, salons, and clinics whose customers start on Google and decide from one page. The page has two jobs: explain the work, and make the call obvious.",
        ],
      },
      {
        heading: "1. One page, one job",
        paragraphs: [
          "Give the page a title a person would type. \"Drain cleaning in Santa Ana\" is a search. \"Our comprehensive solutions\" is not. The first paragraph should name the service and the area you actually cover, in ordinary sentences, not a block of city names.",
          "Skip a list of every city in Orange County at the bottom of the page. That list does not help someone decide, and it does not make the page more local. Name the cities you will take a job in, the same ones on your Google listing. If the work is different in each city, say how. If it is the same work, one honest area is enough.",
          "Link related services to their own pages. A drain page can mention water heaters and point to that page. It should not try to be both.",
        ],
      },
      {
        heading: "2. Answer the questions that happen before a call",
        paragraphs: [
          "People call when they can picture the job. They want to know what is included, how you charge, how soon you can come, and whether you come to them. A page that only says the service is \"professional and reliable\" has not answered any of those.",
          "You do not need a full price list if the work varies. You do need a sentence about how pricing works: a flat trip charge, a quote after a look, or a starting price for the common job. Say what you do not do, if that saves a wasted call.",
        ],
        list: [
          "What the visit includes, in a few concrete lines.",
          "How pricing works, even if the final number comes after a look.",
          "How soon you can usually come, and how to book.",
          "Which cities you serve, matching the Google listing.",
        ],
      },
      {
        heading: "3. Put the next step where the thumb is",
        paragraphs: [
          "On a phone, the first screen should show the phone number and a short form. The number has to be the same one on the Google listing. A second number \"for the office\" is how calls go to a line nobody watches.",
          [
            "The listing and the page are one system. The note on a ",
            {
              text: "Google Business Profile for a service-area business",
              href: "/blog/google-business-profile-for-a-service-area-business",
            },
            " covers the map side: hide a home address, name the cities you drive to, and keep the name, phone, and hours identical.",
          ],
          "The form can ask for a name, a callback number, the city, and the job. That is enough to return the call. A long questionnaire belongs after you have spoken, not before.",
        ],
      },
      {
        heading: "Read it the way a customer will",
        paragraphs: [
          "Publish the page you want Google to send people to, then open it on a phone. In a few seconds you should be able to say what the service is, where you work, and how to reach you.",
          "If you cannot, fix those three things before you add more pages. A clear page gives a nearby search somewhere useful to land.",
        ],
      },
    ],
  },
  ...archivePosts,
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
