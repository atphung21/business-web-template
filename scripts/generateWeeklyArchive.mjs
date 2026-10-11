import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/content/blogArchive");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const trades = [
  { name: "contractor", desk: "the person who answers the phone" },
  { name: "salon", desk: "the front desk" },
  { name: "clinic", desk: "the front desk" },
  { name: "restaurant", desk: "the host stand" },
  { name: "law office", desk: "the person who answers the phone" },
  { name: "retail shop", desk: "the counter" },
];

const classic = [
  {
    slug: "google-hours-match-the-door",
    title: "Make Google hours match the door",
    focus: "the hours on your Google listing",
    h1: "Read the hours the way a customer will",
    h2: "Fix the mismatch the same day",
    points: [
      "The hours on the listing, the website, and the door.",
      "A note for lunch, court, or a day the phone is off.",
      "A holiday week written out, not left as a regular week.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year}, people still decide whether to come by the hours they see on a phone. If the listing says you are open and the door says you are not, they remember the wrong one. A ${c.trade} can fix this without a new site: open the listing, open the contact page, and read both out loud.`,
  },
  {
    slug: "click-to-call-on-a-phone",
    title: "Put a real click-to-call number on the first screen",
    focus: "the phone number on a phone-sized screen",
    h1: "The number has to start a call",
    h2: "One number, the one a person answers",
    points: [
      "Tap the number on a phone that is not on the shop Wi-Fi.",
      "The same number on the listing, the site, and the truck or card.",
      "No second number that nobody watches.",
    ],
    body: (c) =>
      `A ${c.trade} found in ${c.month} ${c.year} is usually found on a phone. The first screen should show a number that starts a call when tapped. A picture of a number, or a number buried under a paragraph, is a number people will not use.`,
  },
  {
    slug: "menu-or-services-you-can-read",
    title: "Publish a menu or service list a phone can read",
    focus: "the list of what you actually offer",
    h1: "Text beats a sideways photo",
    h2: "Name the work in customer words",
    points: [
      "A person can find a price or a starting price without zooming.",
      "The file or page uses the words people search.",
      "Last season's offer is gone if you no longer do it.",
    ],
    body: (c) =>
      `By ${c.month} ${c.year}, a PDF that is a photo of a printed menu is already a problem on a phone. The same is true of a service list that says "solutions" and never names the job. Write the current offer in text. ${c.desk} should recognize every line.`,
  },
  {
    slug: "reviews-you-can-answer",
    title: "Answer the reviews customers already left",
    focus: "recent reviews on your listing",
    h1: "A reply is part of the listing",
    h2: "Do not argue, and do not ignore a pattern",
    points: [
      "Reply to the newest review in a full sentence.",
      "If three reviews mention the same wait, the wait is the work.",
      "Ask a happy customer this week, without a script full of keywords.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} a review is often read before the website. A ${c.trade} with no replies looks unattended. A short, specific reply is enough. Thank them for the job they named, and if something went wrong, say how to reach ${c.desk}.`,
  },
  {
    slug: "photos-of-finished-work",
    title: "Show photos of finished work, not a stock room",
    focus: "the photos on your listing and site",
    h1: "People trust what they can see",
    h2: "Replace the photo that no longer matches",
    points: [
      "At least a few photos of real work from this year.",
      "The outside of the shop, if customers visit.",
      "No stock photo that could belong to any business.",
    ],
    body: (c) =>
      `A listing in ${c.month} ${c.year} with no photos looks closed. A ${c.trade} can use a phone picture of finished work, the truck, or the room customers walk into. Label it in ordinary words. Old holiday decor left up in the photos makes the business look paused.`,
  },
  {
    slug: "name-address-phone-agree",
    title: "Use one business name, address, and phone number",
    focus: "the name, address, and phone number",
    h1: "Small differences look like two businesses",
    h2: "Write the address the way it is on the door",
    points: [
      "The name on the listing matches the invoice.",
      "The suite number is on the site, not only on the door.",
      "The phone number is the same in the footer and on the listing.",
    ],
    body: (c) =>
      `Searchers in ${c.month} ${c.year} compare the listing with the website. If one says "Inc" and the other does not, or the suite is missing, they hesitate. Pick the name on the invoice and use it everywhere a customer looks.`,
  },
  {
    slug: "service-area-without-a-storefront",
    title: "Say where you drive, and hide a home address",
    focus: "the service area on your listing",
    h1: "Publish the cities you will actually take",
    h2: "A pin on a house is not a shop",
    points: [
      "Cities you will drive to on a normal day.",
      "No county you will not serve.",
      "The same cities named on the contact page.",
    ],
    body: (c) =>
      `If customers do not visit you, a ${c.trade} in ${c.month} ${c.year} should not publish a home street. Google lets a service-area business hide the address and list cities instead. List the ones you will take. A longer list is not a better listing.`,
  },
  {
    slug: "first-screen-on-a-phone",
    title: "Say what you do on the first phone screen",
    focus: "the first screen of your website",
    h1: "Name, service, and a way to reach you",
    h2: "Move the story below that",
    points: [
      "The business name is visible without scrolling.",
      "The job you want calls for is named.",
      "A button or number is where a thumb can tap it.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} most first visits are on a phone. If the first screen is a slideshow or a paragraph about the founding year, the customer still does not know whether you can help today. Put the job and the phone number above the story.`,
  },
  {
    slug: "page-speed-on-a-cellular-connection",
    title: "Open your site on a cellular connection",
    focus: "how fast the main page appears on a phone",
    h1: "The heavy photo is usually the delay",
    h2: "Test the page Google already sends people to",
    points: [
      "Load the homepage on cellular, not only office Wi-Fi.",
      "Note which image arrives last.",
      "The phone number should not jump down after the page looks ready.",
    ],
    body: (c) =>
      `Speed in ${c.month} ${c.year} is not a lab score first. It is whether a ${c.trade} page shows the name and the number before a person goes back to the map. A huge photo at the top is the usual reason it does not.`,
  },
  {
    slug: "one-page-per-service",
    title: "Give each main service its own page",
    focus: "whether each job you want has its own page",
    h1: "The homepage cannot rank for every job",
    h2: "Use the words a customer would type",
    points: [
      "One page for the job you want more calls for.",
      "The title names the service and the area you cover.",
      "A related job links to its own page instead of sharing this one.",
    ],
    body: (c) =>
      `A ${c.trade} in ${c.month} ${c.year} often offers three jobs and explains them in one paragraph. Searchers look for one job. Give that job a page with a plain title, what is included, and how to call.`,
  },
  {
    slug: "contact-form-short-enough",
    title: "Shorten the form to what the first call needs",
    focus: "the form a new customer has to finish",
    h1: "Name, number, city, and the job",
    h2: "Say what happens after they send it",
    points: [
      "Five or six fields, not a questionnaire.",
      "A sentence under the button about when you reply.",
      "Someone at the desk reads the form the same day.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} a long form is where a phone visit ends. Ask for a name, a callback number, the city, and the job. ${c.desk} should know the form is theirs. If nobody reads it, take the form down and publish the phone number.`,
  },
  {
    slug: "google-posts-for-this-week",
    title: "Tell Google what is true this week",
    focus: "a short update on your listing",
    h1: "An update is not an ad",
    h2: "Take down the offer that ended",
    points: [
      "One or two sentences about hours, a seasonal service, or a full book.",
      "The date on the update is this month.",
      "An old holiday offer is removed.",
    ],
    body: (c) =>
      `A Google post in ${c.month} ${c.year} is a note on the listing, not a second website. Use it when something changed: a storm week, a booked-out Friday, a seasonal service. If the post is six months old, it is telling people the wrong month.`,
  },
  {
    slug: "directions-that-match-the-entrance",
    title: "Point the map at the entrance people use",
    focus: "the pin and the directions",
    h1: "The pin and the door should be the same place",
    h2: "Write the parking note next to the address",
    points: [
      "Open directions on a phone and walk them once.",
      "Suite, floor, or rear parking is written on the site.",
      "The hours sit next to the address.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} a wrong pin is how people call from the wrong lobby. If customers visit a ${c.trade}, the pin should be the entrance you tell them to use. If they do not visit, do not drop a pin on a house.`,
  },
  {
    slug: "tracking-you-can-explain",
    title: "Know which visits came from the listing",
    focus: "a simple count of calls and form notes",
    h1: "You do not need a dashboard to start",
    h2: "Ask how they found you",
    points: [
      "A tally of calls that mention Google or the website.",
      "The form stores the date and the job.",
      "A tool you do not open is not a measurement.",
    ],
    body: (c) =>
      `By ${c.month} ${c.year}, privacy changes have already made some ad tracking less precise. A ${c.trade} can still learn the useful fact: did the phone ring, and did the person say they found you on the map? Write that down for a week before you buy a report.`,
  },
  {
    slug: "seasonal-offer-without-clutter",
    title: "Put the seasonal offer where it can be seen",
    focus: "the one offer that matters this month",
    h1: "One seasonal line, not a stack of banners",
    h2: "Remove it when the season ends",
    points: [
      "The offer is named in one sentence.",
      "It does not cover the phone number.",
      "Last season's banner is gone.",
    ],
    body: (c) =>
      `${c.month} ${c.year} has its own reason people call a ${c.trade}. Say that reason once, near the top. A stack of old banners teaches people to ignore the page. When the week is over, take the line down.`,
  },
  {
    slug: "staff-can-explain-the-site",
    title: "Make sure the staff can explain the website",
    focus: "whether the people on the floor know the site",
    h1: "The button should match what they say",
    h2: "If they will ignore a form, do not offer it",
    points: [
      "Ask the people on the floor what the main button does.",
      "The words on the site match the words they use.",
      "A tool nobody watches is removed.",
    ],
    body: (c) =>
      `A website in ${c.month} ${c.year} fails when it promises a path ${c.desk} will not honor. Before you add a booking link or a waitlist, ask the people who would receive it. An honest sentence is better than a button that lands in a mailbox nobody opens.`,
  },
  {
    slug: "local-pages-without-city-lists",
    title: "Name the cities you serve without a city dump",
    focus: "how your pages name the area",
    h1: "A list of every city is not a local page",
    h2: "Match the cities on the listing",
    points: [
      "The cities you will take a job in, in a sentence.",
      "No block of town names at the bottom.",
      "The listing and the page use the same list.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} stuffing a page with every city in the county does not make a ${c.trade} more local. Name the area you cover the way you would say it on the phone. If you will not drive there, leave it off.`,
  },
  {
    slug: "secure-page-and-a-clear-form",
    title: "Check that the site is secure and the form still sends",
    focus: "the lock on the address and a test message",
    h1: "Send yourself one message",
    h2: "Read it where the staff will read it",
    points: [
      "The address shows a secure connection.",
      "A test from your phone arrives.",
      "The reply path is a person, not only an autoresponder.",
    ],
    body: (c) =>
      `A ${c.trade} site in ${c.month} ${c.year} can look fine and still drop messages. Send one note from a phone. If it does not arrive where ${c.desk} looks, the form is a dead end. Fix that before you ask for more visits.`,
  },
];

const earlyAi = [
  {
    slug: "drafting-help-still-needs-your-facts",
    title: "If you try a writing tool, start from your own facts",
    focus: "any new writing help you have heard about",
    h1: "The tool does not know your hours",
    h2: "Read it out loud before you publish",
    points: [
      "You supply the services, cities, and prices.",
      "You delete anything you would not say at the counter.",
      "The page still has your phone number and your name.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} some owners are trying software that drafts sentences. It can speed a first pass. It does not know what a ${c.trade} actually does this week. If you use it, give it your facts and then read the result as ${c.desk} would.`,
  },
  {
    slug: "search-is-testing-written-answers",
    title: "Search is starting to show written answers above the links",
    focus: "the answers that appear above ordinary results",
    h1: "Your page still has to be the clear source",
    h2: "Do not rewrite the site around a test",
    points: [
      "The page names the service in the first paragraph.",
      "The facts match the listing.",
      "You keep the phone number where a tap can reach it.",
    ],
    body: (c) =>
      `By ${c.month} ${c.year}, Google is experimenting with short written answers above the usual links. A ${c.trade} does not control that box. What you control is a page that states the job, the area, and how to call, so a person who does click still lands somewhere useful.`,
  },
];

const laterAi = [
  {
    slug: "ai-overviews-still-need-your-page",
    title: "An AI Overview does not replace your page",
    focus: "the summary Google may show above the links",
    h1: "Write the answer on your own page first",
    h2: "Keep the next step obvious",
    points: [
      "The service, the area, and the price pattern are in the first screen.",
      "The phone number matches the listing.",
      "You can still explain the page without the summary.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} some searches show an AI Overview before the links. A ${c.trade} can still be chosen when the page says the same thing a person would say on the phone. The summary is not your website. The page underneath is.`,
  },
  {
    slug: "draft-with-software-then-edit",
    title: "Use drafting software only after the facts are yours",
    focus: "a draft you did not write from scratch",
    h1: "Start with the job, the cities, and the price pattern",
    h2: "Cut anything you would not say out loud",
    points: [
      "No city you do not serve.",
      "No promise the staff will not keep.",
      "Your name and number stay in your words.",
    ],
    body: (c) =>
      `Drafting tools are ordinary by ${c.month} ${c.year}. They are useful for a first paragraph and risky for facts. A ${c.trade} should type the real offer first, then let software smooth a sentence, then have a person read it.`,
  },
  {
    slug: "customers-ask-a-tool-then-call",
    title: "Customers may ask a tool, then still need to call you",
    focus: "the path from a written answer to your phone",
    h1: "Assume they arrive with a half answer",
    h2: "Make the correction easy",
    points: [
      "The page states what you do and what you do not do.",
      "Hours and the phone number are current.",
      "The staff knows people may have read a summary first.",
    ],
    body: (c) =>
      `In ${c.month} ${c.year} a customer may show up having already read a generated answer. Treat that as a head start, not a finished decision. Your page and ${c.desk} should be able to confirm the job, the timing, and the price pattern in a few seconds.`,
  },
];

function season(monthIndex) {
  if (monthIndex <= 1 || monthIndex === 11) return "winter";
  if (monthIndex <= 4) return "spring";
  if (monthIndex <= 7) return "summer";
  return "fall";
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function dates() {
  const start = new Date(2020, 7, 3);
  const end = new Date(2026, 7, 31);
  const list = [];
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 7)) {
    list.push(new Date(d));
  }
  return list;
}

function chooseTopic(date, index) {
  const iso = date.toISOString().slice(0, 10);
  if (iso < "2022-11-07") return classic[index % classic.length];
  if (iso < "2024-01-01") {
    return index % 4 === 0 ? earlyAi[index % earlyAi.length] : classic[index % classic.length];
  }
  return index % 3 === 0 ? laterAi[index % laterAi.length] : classic[index % classic.length];
}

const searchPhrase = {
  "google-hours-match-the-door": "Google Business Profile hours",
  "click-to-call-on-a-phone": "click-to-call phone number",
  "menu-or-services-you-can-read": "mobile-friendly service menu",
  "reviews-you-can-answer": "Google review replies",
  "photos-of-finished-work": "Google Business Profile photos",
  "name-address-phone-agree": "name, address, and phone consistency",
  "service-area-without-a-storefront": "service-area Google listing",
  "first-screen-on-a-phone": "homepage first screen",
  "page-speed-on-a-cellular-connection": "mobile page speed",
  "one-page-per-service": "service page for local SEO",
  "contact-form-short-enough": "short contact form",
  "google-posts-for-this-week": "Google Business Profile posts",
  "directions-that-match-the-entrance": "Google Maps directions",
  "tracking-you-can-explain": "website call tracking",
  "seasonal-offer-without-clutter": "seasonal offer on a local website",
  "staff-can-explain-the-site": "staff-friendly business website",
  "local-pages-without-city-lists": "local service area pages",
  "secure-page-and-a-clear-form": "secure contact form",
  "drafting-help-still-needs-your-facts": "editing AI website copy",
  "search-is-testing-written-answers": "written answers in Google search",
  "ai-overviews-still-need-your-page": "AI Overviews for a local business",
  "draft-with-software-then-edit": "editing drafted website copy",
  "customers-ask-a-tool-then-call": "customers who search with AI then call",
};

const articleSection = {
  "google-hours-match-the-door": "Local SEO",
  "reviews-you-can-answer": "Local SEO",
  "photos-of-finished-work": "Local SEO",
  "name-address-phone-agree": "Local SEO",
  "service-area-without-a-storefront": "Local SEO",
  "google-posts-for-this-week": "Local SEO",
  "directions-that-match-the-entrance": "Local SEO",
  "local-pages-without-city-lists": "Local SEO",
  "page-speed-on-a-cellular-connection": "Site speed",
  "tracking-you-can-explain": "Site speed",
  "drafting-help-still-needs-your-facts": "Search",
  "search-is-testing-written-answers": "Search",
  "ai-overviews-still-need-your-page": "Search",
  "draft-with-software-then-edit": "Search",
  "customers-ask-a-tool-then-call": "Search",
};

const gbp = {
  title: "Google Business Profile for a Service-Area Business",
  href: "/blog/google-business-profile-for-a-service-area-business",
};
const servicePage = {
  title: "What to Put on a Local Service Page",
  href: "/blog/what-to-put-on-a-local-service-page",
};
const vitals = {
  title: "Core Web Vitals for a Local Service Business",
  href: "/blog/core-web-vitals-for-a-local-service-business",
};
const firm = {
  title: "What to Connect on a Professional Firm's Website",
  href: "/blog/what-to-connect-on-a-professional-firm-website",
};
const restaurant = {
  title: "Waitlists, Delivery, and Reservations for a Local Restaurant",
  href: "/blog/waitlists-delivery-and-reservations",
};

function pillarFor(topicSlug, tradeName) {
  if (
    [
      "google-hours-match-the-door",
      "reviews-you-can-answer",
      "photos-of-finished-work",
      "name-address-phone-agree",
      "service-area-without-a-storefront",
      "google-posts-for-this-week",
      "directions-that-match-the-entrance",
      "local-pages-without-city-lists",
      "seasonal-offer-without-clutter",
    ].includes(topicSlug)
  ) {
    return gbp;
  }
  if (topicSlug === "page-speed-on-a-cellular-connection" || topicSlug === "tracking-you-can-explain") {
    return vitals;
  }
  if (topicSlug === "menu-or-services-you-can-read" && tradeName === "restaurant") return restaurant;
  if (
    (topicSlug === "contact-form-short-enough" || topicSlug === "secure-page-and-a-clear-form") &&
    tradeName === "law office"
  ) {
    return firm;
  }
  return servicePage;
}

function buildPost(date, index) {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const month = months[monthIndex];
  const day = date.getDate();
  const iso = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const trade = trades[index % trades.length];
  const topic = chooseTopic(date, index);
  const ctx = {
    month,
    year,
    season: season(monthIndex),
    trade: trade.name,
    tradeCap: trade.name.charAt(0).toUpperCase() + trade.name.slice(1),
    desk: trade.desk,
  };
  const fill = (line) => line;
  const phrase = searchPhrase[topic.slug];
  const phraseTitle = phrase.charAt(0).toUpperCase() + phrase.slice(1);
  const title = `${topic.title}, ${month} ${day}, ${year}`;
  const seoTitle = `${phraseTitle} (${trade.name}, ${month} ${day}, ${year})`;
  const lead = phrase.includes("for a")
    ? `${phraseTitle}, ${trade.name}, ${month} ${day}, ${year}`
    : `${phraseTitle} for a ${trade.name} on ${month} ${day}, ${year}`;
  const description = `${lead}. What to check so the website and Google listing agree.`;
  const cta = `This week, look at ${topic.focus}. If it matches what ${trade.desk} would say, you are already ahead of a stale page.`;
  return {
    slug: `${topic.slug}-${iso}`,
    topic: topic.slug,
    title,
    seoTitle,
    description,
    section: articleSection[topic.slug] || "Websites",
    date: iso,
    cta,
    sections: [
      {
        paragraphs: [
          topic.body(ctx),
          `This ${month} ${day}, ${year} note is for a ${trade.name}. The check is ${phrase}: ${topic.focus}, read the way a new customer would on a phone.`,
        ],
      },
      {
        heading: `1. ${topic.h1}`,
        paragraphs: [
          `Open the listing and the website on a phone. Look only at ${topic.focus}. In ${month} ${year} that is the piece a new customer is most likely to trust or doubt.`,
          `Say the sentence out loud the way ${trade.desk} would say it. If the page uses a different name for the job, change the page, not the staff.`,
        ],
        list: topic.points.map(fill),
      },
      {
        heading: `2. ${topic.h2}`,
        paragraphs: [
          `A mismatch on ${phrase} is worth more than a redesign. Fix that one line for this ${trade.name} and leave the rest of the site alone until the listing and the page agree.`,
          `Then look again tomorrow. Listings and pages sometimes show the old text for a day. The version a customer sees is the one that counts.`,
        ],
      },
      {
        heading: "A check you can finish this week",
        paragraphs: [
          `Pick one ${trade.name} page and the Google listing. Compare ${topic.focus}. Write down the one line that disagrees, and change it before you add anything new.`,
          `The tools of ${month} ${year} only help if they describe the business you are actually running.`,
        ],
      },
    ],
  };
}

const posts = dates().map(buildPost);
const bannedEarly = /\b(AI|ChatGPT|artificial intelligence|AI Overview)\b/;
for (const post of posts) {
  if (post.date < "2022-11-07") {
    const text = JSON.stringify(post);
    if (bannedEarly.test(text)) {
      throw new Error(`AI mention before Nov 2022 in ${post.date} ${post.slug}`);
    }
  }
}
const slugs = new Set();
const descriptions = new Set();
for (const post of posts) {
  if (slugs.has(post.slug)) throw new Error(`duplicate slug ${post.slug}`);
  if (descriptions.has(post.description)) throw new Error(`duplicate description ${post.date}`);
  if (post.description.length > 170) throw new Error(`description too long ${post.slug}`);
  slugs.add(post.slug);
  descriptions.add(post.description);
}

const lastByTopic = new Map();
for (const post of posts) {
  const related = [];
  const earlier = lastByTopic.get(post.topic);
  if (earlier) related.push({ title: earlier.title, href: `/blog/${earlier.slug}` });
  const pillar = pillarFor(post.topic, post.description.includes("law office") ? "law office" : post.description.includes("restaurant") ? "restaurant" : "");
  if (!related.some((item) => item.href === pillar.href)) related.push(pillar);
  post.relatedHeading = "Related notes";
  post.relatedIntro = "These notes cover the same kind of check, with a longer guide when you want the full version.";
  post.upcoming = related;
  lastByTopic.set(post.topic, post);
  delete post.topic;
}

fs.mkdirSync(root, { recursive: true });
const byYear = new Map();
for (const post of posts) {
  const year = post.date.slice(0, 4);
  if (!byYear.has(year)) byYear.set(year, []);
  byYear.get(year).push(post);
}

const years = [...byYear.keys()];
for (const year of years) {
  const body = `export const posts = ${JSON.stringify(byYear.get(year), null, 2)};\n`;
  fs.writeFileSync(path.join(root, `${year}.js`), body);
}

const imports = years
  .map((year) => `import { posts as posts${year} } from "./${year}";`)
  .join("\n");
const spread = years.map((year) => `...posts${year}`).join(", ");
fs.writeFileSync(
  path.join(root, "index.js"),
  `import { withAuthor } from "./withAuthor";
${imports}

export const archivePosts = [${spread}].map(withAuthor);
`
);

const author = `export const archiveAuthor = {
  name: "Andy Trinh Phung",
  jobTitle: "Lead Full-Stack Software Engineer",
  locality: "Santa Ana",
  bio: "Andy Trinh Phung is a Lead Full-Stack Software Engineer and technology consultant based in Santa Ana, CA. Through ATP Consulting Services, he helps local businesses bridge the gap between their operations and modern web technologies to drive measurable growth.",
};

export function withAuthor(post) {
  return { ...post, author: archiveAuthor };
}
`;
fs.writeFileSync(path.join(root, "withAuthor.js"), author);

const sitemapPath = path.resolve(root, "../../../public/sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
const alreadyListed = sitemap.includes("/blog/google-hours-match-the-door-2020-08-03");
const block = posts
  .map(
    (post) => `  <url>
    <loc>https://www.atpconsultingservices.com/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  )
  .join("\n");
if (!alreadyListed) {
  sitemap = sitemap.replace(
    "  <url>\n    <loc>https://www.atpconsultingservices.com/work</loc>",
    `${block}\n  <url>\n    <loc>https://www.atpconsultingservices.com/work</loc>`
  );
  fs.writeFileSync(sitemapPath, sitemap);
}

console.log(`wrote ${posts.length} posts, ${posts[0].date} to ${posts[posts.length - 1].date}`);
