const pillars = { g: "gbp", s: "service", v: "vitals", m: "menu", f: "form", a: "search" };
const sections = {
  g: "Local SEO",
  s: "Websites",
  v: "Site speed",
  m: "Websites",
  f: "Websites",
  a: "Search",
};

function topic(slug, title, search, focus, opening, code = "s") {
  const pillar = pillars[code] || "service";
  return {
    slug,
    title,
    search,
    focus,
    opening,
    pillar,
    section: sections[code] || "Websites",
    h1: `Look at ${focus}`,
    h2: `Fix ${focus} before you add anything`,
    points: [
      `${focus[0].toUpperCase()}${focus.slice(1)} on the Google listing.`,
      "The same fact on the website, in the same words.",
      "What the person answering the phone would say this week.",
    ],
  };
}

function iso(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function mondayOf(year, monthIndex, day) {
  const date = new Date(year, monthIndex, day);
  const back = date.getDay() === 0 ? 6 : date.getDay() - 1;
  date.setDate(date.getDate() - back);
  date.setHours(0, 0, 0, 0);
  return date;
}

function nthWeekday(year, monthIndex, weekday, n) {
  const date = new Date(year, monthIndex, 1);
  let seen = 0;
  while (date.getMonth() === monthIndex) {
    if (date.getDay() === weekday) {
      seen += 1;
      if (seen === n) return new Date(date);
    }
    date.setDate(date.getDate() + 1);
  }
  return null;
}

function lastWeekday(year, monthIndex, weekday) {
  const date = new Date(year, monthIndex + 1, 0);
  while (date.getDay() !== weekday) date.setDate(date.getDate() - 1);
  return date;
}

function pin(map, date, item, dates) {
  const key = iso(date);
  if (!dates.some((itemDate) => iso(itemDate) === key)) return;
  if (map.has(key)) return;
  map.set(key, item);
}

function pinNextFree(map, date, item, mondays) {
  const cursor = new Date(date);
  for (let i = 0; i < 6; i += 1) {
    const key = iso(cursor);
    if (mondays.some((itemDate) => iso(itemDate) === key) && !map.has(key)) {
      map.set(key, item);
      return;
    }
    cursor.setDate(cursor.getDate() + 7);
  }
}

const byMonth = {
  0: [
    ["remove-december-special-hours", "Take December special hours off the listing", "January Google hours", "the old holiday hours", "January is underway. If Thursday in December is still marked closed, or a holiday banner is still the first thing on the site, fix that before you announce anything new.", "g"],
    ["january-homepage-holiday-banner", "Retire the holiday banner on the homepage", "holiday banner on a homepage", "the holiday banner", "A December offer still sitting in the header teaches people the site is stale. One January line about what you are booking now is enough.", "s"],
    ["gift-card-link-after-the-rush", "See whether the gift card link still works", "gift card link", "the gift card link", "People still try to redeem what they were given. Open the link on a phone and make sure it lands on a balance or a booking, not a dead page.", "s"],
    ["winter-closure-on-the-listing", "Say so if a winter day is actually closed", "winter closure hours", "a weather closure", "If ice or a short staff day shut the door, the listing has to say that. A regular weekly schedule will still show you open.", "g"],
    ["january-prices-match", "Match January prices on the page and the listing", "January prices", "the price you are charging now", "A new year price that exists only in the shop, not on the page, is how a quote turns into an argument.", "s"],
    ["booking-calendar-year", "Open the booking calendar on this year", "booking calendar year", "the year on the booking calendar", "A calendar still sitting on last year sends people to dates that already passed. Click through on a phone before you share the link again.", "s"],
    ["old-season-photos", "Swap photos that still show last season", "seasonal business photos", "photos from the season you are in", "Snow on the awning in a July photo is a different problem. In January, a summer patio shot as the cover makes the place look closed.", "g"],
    ["short-staff-hours", "Publish the shorter hours a small crew can keep", "short-staff hours", "hours a small crew can actually keep", "Post the hours you can answer the phone for. A full schedule you cannot staff creates a missed call and a bad review.", "g"],
    ["january-demand", "Name the job people are asking for this month", "January service demand", "the job people are asking for now", "The homepage should lead with the work this month actually brings in, not a service you only did in summer.", "s"],
    ["one-january-offer", "Keep the January offer to a single line", "January promotion", "one current offer", "One sentence about a slow-month opening is useful. A stack of banners is how the phone number gets pushed below the fold.", "s"],
    ["form-after-the-break", "Send a test message after the break", "contact form test", "a test message from the form", "Send one message to yourself. If it lands in spam, or nowhere, the form is not a way to reach you.", "f"],
    ["first-week-phone-test", "Call the listing number in the first week back", "listing phone number", "the number on the listing", "Tap the number on the listing from a phone that is not on shop Wi-Fi. It has to ring the person who is actually there.", "g"],
    ["holiday-rush-reviews", "Answer the reviews that came in over the holidays", "holiday review replies", "reviews from the last few weeks", "A December visit that never got a reply is still the first thing a January customer reads.", "g"],
    ["footer-year", "Update the year in the footer", "website footer year", "the year printed on the site", "A footer that still says a year you have left makes the rest of the page look unattended. Change the year, then stop.", "s"],
  ],
  1: [
    ["valentine-offer-one-line", "Keep a Valentine offer to one line", "Valentine's Day offer", "one Valentine line", "If you run a February offer, put it in one sentence with the date it ends. Do not rename the business around the holiday.", "s"],
    ["after-valentine-takedown", "Take the February offer down when it ends", "expired Valentine offer", "an offer that already ended", "The Monday after the holiday, the banner should be gone. An expired deal is a reason to doubt the hours too.", "s"],
    ["february-monday-holiday", "Set hours for the February Monday holiday", "February holiday hours", "hours for a Monday holiday", "If the shop is closed for the Monday holiday, write it as a special hour. The weekly Monday schedule will not do that for you.", "g"],
    ["february-menu", "Check the February menu or service list", "February service list", "the list of what you offer now", "Winter items you no longer sell should come off the page. What you do have should be readable on a phone, not locked in a PDF.", "m"],
    ["pair-booking", "Say whether people can book together", "booking for two", "whether two people can book together", "If couples or pairs ask every February, the page should say how that works. If you do not do it, do not imply that you do.", "s"],
    ["dark-afternoon-photos", "Use photos that match a short winter day", "winter business photos", "photos that match the light this month", "A cover photo of a bright patio is a different season. Show the room, the chair, or the truck as they look now.", "g"],
    ["rain-delay-note", "Explain a rain delay before people drive over", "rain delay notice", "how you handle a rain day", "Outdoor work slips in a wet week. A listing post that says you will call to reschedule beats a locked door.", "g"],
    ["february-reminders", "Check reminders for the right month", "appointment reminders", "the month named in reminders", "A reminder that still says January, or sends people to last year's address, undoes the booking.", "s"],
    ["gift-cards-expiring", "Say if gift cards or credits expire", "gift card expiration", "whether a credit expires", "If a card expires, say so where people redeem it. If it does not expire, say that too.", "s"],
    ["popup-over-february-offer", "Do not let a popup cover the phone", "popup over a phone number", "a popup covering the number", "A holiday graphic that sits on top of the number costs calls. The offer can live under the number, not on it.", "s"],
    ["february-staffing", "Match February hours to who is working", "February staffing hours", "hours that match who is in", "A short month with people out is a shorter public schedule. Publish the hours you can keep.", "g"],
    ["no-valentine-in-the-name", "Leave the holiday out of the business name", "business name on Google", "the business name", "Adding a holiday to the name on the listing is how reviews and the map listing get split. Keep the real name.", "g"],
    ["february-entrance", "Check the entrance photo after winter weather", "entrance photo", "the entrance people should use", "A photo of a door you no longer use, or a walkway that flooded, sends the pin visit to the wrong place.", "g"],
    ["february-form-fields", "Ask only what February bookings need", "short booking form", "the fields on the form", "Name, number, the day they want, and the job. A long form in a short month is a form people abandon.", "f"],
  ],
  2: [
    ["spring-services-you-sell", "Lead with the work you are booking this spring", "spring services", "the work you are booking now", "March is when the job mix changes. The first screen should name the work you want calls for this month.", "s"],
    ["daylight-photos", "Replace the cover photo as the light changes", "spring business photos", "a current cover photo", "A photo from a dark winter afternoon is no longer what the street looks like. Take one new photo of the real entrance.", "g"],
    ["spring-break-hours", "Write spring-break hours if the week is different", "spring break hours", "hours during a school break", "If you close, open late, or get a rush during the break, say so on the listing. A normal week template will not.", "g"],
    ["march-holiday-monday", "Set hours if you close for a March Monday", "March holiday hours", "a Monday you are closed", "A Monday closure that lives only on a paper sign is invisible to the map. Add it as a special hour.", "g"],
    ["outdoor-season-prep", "Say when outdoor work or seating starts", "outdoor season hours", "when outdoor service starts", "If the patio, the lot, or the exterior jobs start this month, the page should say when. If they do not, do not promise them.", "s"],
    ["weather-change-demand", "Name what people book when the weather turns", "seasonal demand", "the job the weather is creating", "Write the service people are calling about, in their words. A generic list from last year will not match the calls.", "s"],
    ["do-not-pause-for-a-redesign", "Keep the phone number up while you edit", "phone number during an edit", "the number while the page is being edited", "March is a bad time to take the site down for a rebuild. Change the one wrong line and leave the number where it is.", "s"],
    ["wet-weather-jobs", "Say how wet weather changes the schedule", "wet weather schedule", "how rain changes the day", "If rain moves a job, say how you tell the customer. A listing that still says you arrive at nine will be wrong by noon.", "g"],
    ["march-price-list", "Update the March price or starting rate", "March prices", "the rate you quote now", "If the visit has a starting price, publish the one you say on the phone. Last spring's number is a different offer.", "s"],
    ["reviews-as-work-picks-up", "Ask for a review after a finished March job", "asking for a Google review", "when you ask for a review", "Ask after the work is done, not before. One sentence and the review link is enough for the person at the desk.", "g"],
    ["entrance-after-winter", "Move the pin if winter construction changed the door", "Google Maps pin", "the door the pin should mark", "If the entrance moved, drop the pin on the door people use now. The old walkway is how cars stop at the wrong building.", "g"],
    ["clear-winter-banners", "Clear winter banners off the homepage", "old homepage banner", "a banner from a season that ended", "A storm-closure or holiday strip that is still at the top of the page is the first thing a March visitor believes.", "s"],
    ["one-spring-offer", "Publish one spring offer, with an end date", "spring promotion", "one dated spring offer", "Name the offer and the last day. An open-ended sale becomes the thing you forget to take down in July.", "s"],
    ["march-form", "Make sure the form matches a spring booking", "spring booking form", "what the form asks", "Ask for the job and the city. Do not ask for a life story before you have agreed to come out.", "f"],
  ],
  3: [
    ["easter-week-follow-up", "Put regular hours back after the spring holiday", "hours after a spring holiday", "hours after the holiday week", "The special closure should expire. If Monday still looks closed, people will not come.", "g"],
    ["april-showers-note", "Tell people how a rainy week changes arrival", "rainy week schedule", "arrival on a rainy week", "If you still come out, say so. If you move the job, say how you will tell them. Silence reads as a no-show.", "g"],
    ["outdoor-hours", "Publish outdoor seating or job hours separately", "outdoor hours", "hours for the outdoor part of the business", "If the patio or the exterior crew stops earlier than the front door, write both. One schedule will be wrong for someone.", "g"],
    ["busy-season-inquiries", "Say how far out you are booking", "how far out you are booked", "the wait for an appointment", "April calls ask 'how soon.' Put the real wait on the page. 'Call for availability' with no hint wastes the call.", "s"],
    ["spring-photos-of-work", "Show work you finished this spring", "photos of recent work", "photos of work from this season", "A gallery of jobs from two years ago is a different business. Add a few photos of what you just completed.", "g"],
    ["event-bookings", "Explain event or party bookings on their own", "event booking", "how a party or event is booked", "If you take groups, say the headcount and how to reserve. If you do not, say the ordinary visit is what you do.", "s"],
    ["april-menu-switch", "Switch the menu or service list for the season", "seasonal menu", "the current menu or service list", "Items you cannot make this month should come off. What remains should be text a phone can read.", "m"],
    ["seasonal-work-you-are-booking", "Name the seasonal work you are actually booking", "seasonal work", "the seasonal job you are taking", "Exterior, events, and busy-season visits need their own sentence. Do not leave them inside a paragraph about something else.", "s"],
    ["longer-daylight-hours", "Lengthen the posted hours only if you stay later", "evening hours", "whether you are open later", "Longer days are not longer hours unless the door is actually open. Change the listing only to match the lock.", "g"],
    ["april-review-photos", "Add a photo to the listing with a finished job", "new listing photo", "one new photo on the listing", "A single current photo does more than a paragraph. Use a job you have permission to show.", "g"],
    ["spring-homepage-lead", "Put this month's job in the first sentence", "homepage first sentence", "the first sentence on the phone", "In one breath: what you do, where, and how to call. April visitors will not scroll for it.", "s"],
    ["allergy-season-indoor", "Say what is different about an indoor visit now", "indoor visit details", "what an indoor visit is like", "If the wait, the room, or the hours changed with the season, say the current version. Do not describe last fall.", "s"],
    ["april-deposit", "State the deposit or trip charge in one sentence", "deposit or trip charge", "the deposit or trip charge", "If you charge to come out, say so before they book. A surprise fee is a review you have to answer later.", "s"],
    ["clear-the-spring-popup", "Remove a popup that blocks the April offer", "popup blocking the page", "anything covering the number", "The offer and the number both have to be tappable. If a graphic covers either one, delete the graphic.", "s"],
  ],
  4: [
    ["graduation-hours", "Publish hours for graduation and ceremony weeks", "graduation week hours", "hours during a ceremony week", "Schools let out in clumps. If you close or add a seating, write the special hours instead of hoping the weekly schedule is close enough.", "g"],
    ["summer-hiring-page", "Keep hiring off the customer homepage", "hiring versus the homepage", "where a job posting lives", "A help-wanted banner as the first thing on the site sends customers away. Put hiring on its own page and leave the phone for clients.", "s"],
    ["may-service-list", "Edit the May service list down to what you can do", "May service list", "services you can do this month", "Take off anything booked out until fall or discontinued. A long list you cannot honor is a listing problem too.", "m"],
    ["wedding-season-page", "Say how wedding or event season booking works", "event season booking", "how event bookings work", "If this is the month inquiries spike, say the lead time and what you need to hold a date. If it is not your work, do not borrow it.", "s"],
    ["cooling-season", "Name cooling, shade, or midday changes", "hot-weather schedule", "how heat changes the day", "If crews start earlier or the shop midday is different, publish that. Last winter's hours are the wrong sign.", "g"],
    ["patio-open", "Say the day outdoor seating or work resumes", "opening day for outdoor service", "the day outdoor service starts", "Pick a date and put it on the listing and the page. 'Soon' is not a day someone can plan around.", "s"],
    ["may-outdoor-photos", "Photograph the outside in this month's light", "May photos of the business", "a photo taken this month", "Blossoms, a clear sidewalk, or the real truck in the lot. The cover should look like a visit this week.", "g"],
    ["school-year-ending", "Adjust hours as school schedules change", "end of school year hours", "hours as school lets out", "After-school rushes and earlier dinners show up now. If your busy hours moved, move them on the listing.", "g"],
    ["may-sale-under-the-number", "Put a May offer under the phone number", "May promotion placement", "where the offer sits", "The number stays first. The offer can follow it. The other way around loses the call.", "s"],
    ["may-wait-time", "Publish the real wait for a May appointment", "May appointment wait", "how long until the next opening", "If you are two weeks out, say two weeks. A 'same day' line you cannot keep is the review.", "s"],
    ["memorial-week-follow", "Restore normal hours after the long weekend", "hours after Memorial Day", "the week after a long weekend", "Special hours should end when the weekend ends. Check Monday morning that the listing is back to the real week.", "g"],
    ["may-categories", "Check the listing category before summer", "Google listing category", "the primary category", "The category should name the work you want this summer, not a side service. Extra categories have to be true too.", "g"],
    ["may-city-list", "Name the cities you will drive to this season", "cities you serve", "the cities you will take this season", "Travel range changes when the calendar fills. List the places you will go, not every town in the county.", "g"],
    ["may-form-city", "Ask for the city on the form", "city field on a form", "the city field", "A name and a number without the city makes you call back to learn if you even travel there.", "f"],
  ],
  5: [
    ["summer-hours-begin", "Switch the listing to summer hours", "summer hours", "the summer schedule", "If the door time changed for the season, change the weekly hours. Leaving spring hours up is how you miss the first hot week.", "g"],
    ["fathers-day-follow", "Take the mid-June offer down on time", "expired June offer", "an offer after its end date", "If you ran a short June promotion, the day after it ends the page should look normal again.", "s"],
    ["wedding-peak", "State the lead time at the peak of the season", "peak season lead time", "how far ahead people must book", "Peak month is when the page needs the real wait. Update it when the calendar fills, not in the fall.", "s"],
    ["midday-heat-break", "Publish a midday break if the heat stops work", "midday closure", "a midday break", "If you stop for the hottest hours, write that break on the listing. Customers read a continuous block as 'come whenever.'", "g"],
    ["kids-out-hours", "Change hours if summer days run differently", "summer daily hours", "hours now that school is out", "Earlier lunches, later jobs, a different rush. Put the pattern you are living on the listing.", "g"],
    ["june-menu", "Publish the June menu or service list as text", "June menu", "this month's list", "A photo of a printed menu from May will be wrong, and a phone cannot read it. Type the current list.", "m"],
    ["early-start", "Say if crews or the shop start earlier", "early opening hours", "the time you actually start", "An earlier start that is only in your head still shows the old opening time on the map.", "g"],
    ["summer-daylight-photo", "Use a photo taken in full summer light", "summer photo of the shop", "a photo from this month", "Shade, signage, and the lot look different now. One new photo keeps the listing from looking abandoned.", "g"],
    ["vacation-coverage", "Name who covers the phone during vacations", "vacation phone coverage", "who answers during a vacation", "If the lead tech or the owner is out, the listing still needs a person. Say the hours that person keeps.", "g"],
    ["friday-half-day", "Write Friday's real close if it is early", "Friday closing time", "Friday's close", "A Friday that ends at three has to say three. The weekly template that says six is the mistake.", "g"],
    ["june-starting-price", "Put the current starting price on the page", "starting price", "the starting price", "If you quote a starting point on the phone, the page should quote it too. A blank 'call for pricing' on everything is a weaker page.", "s"],
    ["june-cellular-test", "Load the site on a phone off Wi-Fi", "mobile page speed", "how fast the page opens on cellular", "Summer customers are in a car or on a sidewalk. If the first screen takes most of a minute, they call someone else.", "v"],
    ["large-photo-files", "Shrink the photo that makes the page wait", "oversized photo", "the photo slowing the page", "One huge picture of the shop is a common reason a phone spins. Use a smaller image of the same place.", "v"],
    ["june-buttons", "Make the call button easy to hit", "tap target for the phone number", "the size of the call button", "A tiny number crammed against another link is a misdial or a give-up. Give it room.", "s"],
  ],
  6: [
    ["after-july-fourth", "Remove Independence Day hours when the week ends", "hours after July 4", "hours once the holiday week ends", "The special close should not leak into the next week. Open the listing on the following Monday and read it.", "g"],
    ["midsummer-hours", "Confirm midsummer hours against the door", "midsummer hours", "hours in the middle of summer", "Walk the sign on the door and the listing in the same hour. They drift in July more than people expect.", "g"],
    ["vacation-week", "Mark a vacation week as special hours", "vacation week hours", "a week you are away", "A week away is not a normal week with hope. Mark it closed or shortened before someone drives over.", "g"],
    ["heat-schedule", "Publish the heat schedule you are actually using", "heat schedule", "the schedule you use in the heat", "Earlier starts and stopped afternoons need to be on the listing the week you start doing them.", "g"],
    ["july-photo", "Add a July photo of a finished job", "July work photo", "a photo from this month", "Show a job, a plate, or a service you did in this heat. Stock art of a handshake does not help.", "g"],
    ["visitor-note", "Tell visitors how to find you in a busy month", "directions for a first visit", "how a first-timer finds the door", "If traffic or a festival changes the approach, say which entrance. The pin alone will put them on the wrong curb.", "g"],
    ["one-summer-sale", "Limit the summer sale to one sentence", "summer sale", "one summer offer", "Say the offer and the end date under the phone number. A full-screen takeover is how you hide the call.", "s"],
    ["booking-during-vacation", "Block vacation days on the public calendar", "blocked vacation days", "days the calendar still shows as open", "If the book-online link still offers a day you are gone, that is the day people will pick.", "s"],
    ["outdoor-delay", "Say how you notify people when outdoor work slips", "outdoor work delay", "how you send a delay", "Text, call, or a listing post. Pick one and do it before they are in the driveway.", "g"],
    ["july-menu", "Update the July menu or service list", "July menu", "what you are serving or selling now", "Seasonal items change. The list on the site has to match the one the counter is using today.", "m"],
    ["longer-july-waits", "Tell the truth about July wait times", "July wait time", "the wait this month", "If you are further out than June, change the sentence. Leaving the old wait up books people you cannot take.", "s"],
    ["shop-hours-versus-crew", "Separate shop hours from crew hours", "shop hours versus job hours", "which hours are which", "The office can be open when the crew is on a job, or the reverse. Write the one a customer can use.", "g"],
    ["july-reviews", "Reply to reviews that mention a wait", "replies to wait-time reviews", "reviews that mention a wait", "A note that says you were behind in July needs a calm reply and, if it is true, a page that warns the next person.", "g"],
    ["july-tracking", "Know which calls came from the listing", "calls from the listing", "whether listing calls are counted", "You do not need a complicated setup. You do need to know if the number on the listing is the one that rings.", "v"],
  ],
  7: [
    ["late-summer-hours", "Set late-summer hours before the schedule flips", "late summer hours", "hours at the end of summer", "August is when school nights and earlier closes sneak in. Write them before the first shortened day.", "g"],
    ["august-pace", "Say whether August is a rush or a slowdown", "August availability", "how busy August actually is", "Some shops slam full and some go quiet. The page should match the calls you are getting, not last August's memory.", "s"],
    ["school-night-hours", "Publish school-night hours", "school-night hours", "hours once school is back", "If evenings change when classes start, change the listing that week. Parents book from the hours they see at dinner.", "g"],
    ["last-summer-offer", "End the summer offer on the day you chose", "end date for a summer offer", "the last day of the summer offer", "Put the end date in the sentence. When it hits, take the sentence down.", "s"],
    ["fall-booking-open", "Open fall bookings on the page when you open them", "fall bookings", "when fall appointments open", "If you are taking September dates, say so. A page that still says 'summer books are open' is a month behind.", "s"],
    ["august-photo", "Photograph the storefront in August", "August storefront photo", "a storefront photo from this month", "Awnings, hours on the door, and the light are enough. People compare the photo to the building.", "g"],
    ["back-from-vacation", "Turn regular hours back on after vacation", "hours after vacation", "hours once you are back", "The special closure should be gone the morning you reopen. Check it before the first customer does.", "g"],
    ["menu-into-fall", "Start the fall list when the kitchen or shop does", "fall menu", "the list you are switching to", "Do not leave July's list up as the only list. Publish the one you can make this week.", "m"],
    ["still-hot", "Keep the heat note only while it is true", "heat notice", "a heat note that may be stale", "If the midday break ended, remove it. A warning about a problem you no longer have looks careless.", "g"],
    ["august-event", "Post one August event with a time and a door", "August event", "one event's time and entrance", "Time, date, and which door. An event with none of those is a post people cannot use.", "g"],
    ["staff-returning", "Update the page if the person customers ask for is back", "who is working", "who customers can book", "If people book a person, the page should name who is available. A name that is still on vacation will be requested anyway.", "s"],
    ["prepare-fall-hours", "Draft fall hours before the first fall week", "fall hours", "the hours you will keep in the fall", "Write them down and put them on the listing the week they start, not after a week of wrong calls.", "g"],
    ["august-form", "Test the form during the late-summer week", "August form test", "a form test this week", "Send one message. Late summer inboxes get ignored. Know where the mail lands.", "f"],
    ["august-categories", "Recheck categories before the fall rush", "listing categories", "categories before fall", "The primary category should still be the work you want in September. Side categories that are no longer true should go.", "g"],
  ],
  8: [
    ["fall-hours", "Publish fall hours the week they start", "fall hours", "the fall schedule", "Earlier evenings and a different close belong on the listing the first day they are true.", "g"],
    ["new-season-menu", "Post the new-season menu as text", "fall service list", "the new-season list", "Type it. A photo of a chalkboard is not a menu a phone can search or read aloud.", "m"],
    ["september-photos", "Add September photos of the current work", "September photos", "photos from this month", "Show the season you are in. A beach photo in a fall gallery is the wrong promise.", "g"],
    ["after-school-hours", "State after-school hours if that is the rush", "after-school hours", "the after-school rush", "If the chairs or the tables fill at three, the listing can say when you can still take a walk-in, if you can.", "g"],
    ["fall-services", "Lead with the fall job, not the summer one", "fall services", "the job this season is for", "The first sentence should match the calls. Summer's lead is now in the way.", "s"],
    ["patio-closing", "Say the last day for outdoor seating or work", "last day for outdoor service", "when outdoor service ends", "Give a date. 'While weather allows' is not something the listing can show.", "s"],
    ["september-offer", "Run one September offer under the number", "September offer", "one September offer", "One line, one end date, under the phone number. Then stop adding strips to the header.", "s"],
    ["school-traffic-entrance", "Tell people which entrance to use in school traffic", "entrance during school traffic", "the entrance during a busy drop-off", "If the usual curb is blocked at eight and three, say the door that works. Update the pin if the door changed.", "g"],
    ["weekend-rush", "Publish weekend hours that match the fall rush", "weekend hours", "weekend hours this month", "A weekend that now runs later, or stops taking walk-ins, has to be written that way.", "g"],
    ["cooler-weather-work", "Name the job that starts when the weather cools", "cool-weather service", "the job cooler weather brings", "Put that service in the first screen if it is what you want to be called for. Leave it off if you are already booked out.", "s"],
    ["september-prices", "Align September prices with the quote", "September prices", "the price on the page", "If the seasonal price changed, change the page the same day. The listing description should not contradict it.", "s"],
    ["review-cleanup", "Clear unanswered reviews from the summer", "unanswered reviews", "reviews still waiting on a reply", "Anything from June that still has no reply is part of the September first impression.", "g"],
    ["september-holiday", "Write hours for a September holiday that is not Labor Day", "September holiday hours", "a mid-month holiday closure", "If you close for another September holiday, add that special hour. Labor Day alone does not cover it.", "g"],
    ["q3-phone-check", "Call the number on the website and the listing", "matching phone numbers", "both phone numbers", "They should be the same call. A second number 'for the office' is how September leads die.", "g"],
  ],
  9: [
    ["halloween-hours", "Publish Halloween hours for the door you will open", "Halloween hours", "Halloween hours", "If you close early or stay late for the evening, write both the close and the door. A normal Thursday schedule will be wrong.", "g"],
    ["fall-menu-october", "Update the October menu or service list", "October menu", "the October list", "What you can do this month, in text. Pull items you dropped when the season turned.", "m"],
    ["october-photos", "Use an October photo of the real entrance", "October entrance photo", "the entrance this month", "Decorations are fine if they are really there. The door and the hours in the frame matter more.", "g"],
    ["event-night-hours", "Post the hours for a late event night", "event night hours", "hours for a late night", "A later close for one night is a special hour plus a post. Do not change the whole week to match one evening.", "g"],
    ["seasonal-product", "Show the seasonal product you actually have", "seasonal product", "a product you have in stock", "If it can sell out, say what happens when it does. A page for an item you cannot get is a wasted visit.", "s"],
    ["earlier-dusk", "Photograph the sign so it reads after dusk", "evening photo of the sign", "whether the sign can be read at dusk", "October evenings start during business hours. A photo of a dark front is a reason to drive past.", "g"],
    ["october-monday-holiday", "Set hours for the October Monday holiday", "October Monday holiday hours", "the October Monday holiday", "If that Monday is closed, mark it. The weekly Monday hours will still say open.", "g"],
    ["seasonal-display", "Match the listing photo to the display people will see", "seasonal display photo", "the display in the window", "People use the photo to decide they are in the right place. A bare window in the photo and a full one on the street is a small confusion that adds up.", "g"],
    ["fall-maintenance", "Describe the fall maintenance visit in a few lines", "fall maintenance visit", "what a fall visit includes", "What you check, how you charge, and how soon you can come. Three lines beat a slogan.", "s"],
    ["earlier-october-close", "Write the earlier close if the day ends sooner", "earlier closing time", "the new closing time", "If you lock the door at five now, the listing cannot keep saying seven.", "g"],
    ["october-offer", "Date the October offer", "October promotion", "an offer with an end date", "An offer without an end becomes litter. Name the last day in the same sentence.", "s"],
    ["trick-or-treat-hours", "Say whether the door is open for the evening crowd", "evening hours on Halloween", "whether you are open that evening", "Retail and restaurants get this question. Answer it on the listing, including a close time.", "g"],
    ["october-popup", "Remove a graphic that covers the number", "graphic covering the phone number", "a graphic on top of the number", "A seasonal illustration is optional. The number is not. If they overlap, move the art.", "s"],
    ["october-cities", "Confirm the cities you will still drive to", "October service area", "cities you will drive to", "Shorter days change how far you go. Update the list to the trips you will take.", "g"],
  ],
  10: [
    ["weekly-schedule-versus-thursday", "Do not leave a holiday Thursday on the weekly schedule", "holiday versus weekly hours", "a holiday still showing as a normal day", "Special hours are for the day you close. The weekly schedule should stay the normal week so the following Thursday is right.", "g"],
    ["early-retail-hours", "Publish earlier holiday shopping hours only if you keep them", "holiday shopping hours", "extended hours you will really work", "If you open early, write the early time. If you only talked about it, leave the listing alone.", "g"],
    ["november-menu", "Publish the November menu or service list", "November menu", "the November list", "Holiday plates, packages, or services need a text list. A PDF from last November will be wrong and hard to open.", "m"],
    ["gift-page", "Give gifts their own short page", "holiday gift page", "a page for gifts", "What it is, what it costs or how it is redeemed, and how to buy it. Do not bury that under a December story.", "s"],
    ["monday-after-thanksgiving", "Set hours for the Monday after Thanksgiving", "Monday after Thanksgiving hours", "the Monday after the holiday", "That Monday is often shortened or closed and often forgotten on the listing. Write it before the weekend.", "g"],
    ["november-photos", "Show the shop dressed for this month, if it is", "November photos", "a current photo", "If you decorate, photograph that. If you do not, do not use a stock table setting.", "g"],
    ["holiday-calendar", "Open the holiday booking calendar", "holiday booking calendar", "dates people can still book", "Blocked days should look blocked. An open slot on a day you are closed will get picked.", "s"],
    ["no-holiday-in-the-name", "Keep the holiday out of the business name", "Google business name", "the name on the listing", "A holiday phrase in the name can split the listing. Use a post for the greeting.", "g"],
    ["large-orders", "Explain large or holiday orders", "large order instructions", "how a large order works", "Lead time, how to pay, and when it is ready. If you cannot take them, say that on the page people are reading.", "m"],
    ["shorter-november-staff", "Shorten public hours to match the holiday crew", "holiday crew hours", "hours the smaller crew can keep", "A full schedule with half the people is a missed visit. Publish the shorter day.", "g"],
    ["winter-service-starts", "Say that winter work has started", "winter service", "the winter job you are taking", "If the seasonal work has begun, lead with it. If you are booked through the month, say that instead of inviting more calls you cannot take.", "s"],
    ["november-price", "Check holiday pricing against the page", "holiday pricing", "the holiday price", "A seasonal package price has to match the phone quote. Put the number on the page or do not mention the package.", "s"],
    ["greeting-hides-button", "Move a holiday greeting below the button", "holiday greeting placement", "where the greeting sits", "The greeting can be warm and still be under the call button. Above it, with no number, it is a poster.", "s"],
    ["november-form", "Keep the holiday form short", "holiday contact form", "the holiday form", "Name, number, date, and what they want. A questionnaire in a peak week will not get finished.", "f"],
  ],
  11: [
    ["december-holiday-hours", "Write the hours between the holidays", "hours between holidays", "the days between the holidays", "Christmas week and New Year's week are not the same schedule. Write each day you are closed.", "g"],
    ["gift-cards-december", "Test the December gift card purchase", "December gift cards", "buying a gift card on a phone", "Go through the whole purchase on a phone. A card that errors at the last step is a lost sale and a bad afternoon.", "s"],
    ["pickup-cutoff", "Publish the last day for pickup or delivery promises", "pickup cutoff", "the last day you can promise", "Say the date after which you cannot promise the holiday. Update it if you sell out sooner.", "s"],
    ["party-bookings", "Explain December party bookings", "December party booking", "how a December party is booked", "Headcount, deposit, and the last day to reserve. If the month is full, say full.", "s"],
    ["december-photos", "Use a December photo of your real space", "December photo", "a photo from this month", "Lights are fine if they are yours. A catalog photo of a table you do not have will not match the visit.", "g"],
    ["extended-hours", "Add extended hours only on the days you stay", "extended December hours", "days you stay open later", "Change those days. Do not stretch the whole month to match one Saturday.", "g"],
    ["christmas-eve-versus-day", "Separate Christmas Eve from Christmas Day", "Christmas Eve hours", "Christmas Eve versus Christmas Day", "They are different days and often different hours. Special hours can say both. One note that says 'closed for Christmas' is too vague.", "g"],
    ["new-years-eve-hours", "Set New Year's Eve hours on their own", "New Year's Eve hours", "New Year's Eve", "If you close early or take reservations only, write that. A normal Tuesday schedule is the wrong information.", "g"],
    ["staff-party-closure", "Mark a staff party like any other closure", "staff party closure", "a staff closure", "If the door is locked, the listing should say closed. A private note in the group text does not reach customers.", "g"],
    ["december-popup", "Keep the December popup from covering the number", "December popup", "a popup over the number", "The busiest month is the worst month to hide the tap-to-call control.", "s"],
    ["december-menu", "Publish the December menu people are ordering from", "December menu", "the menu you are serving", "Holiday plates in, retired plates out, as text. Do it the week the kitchen changes, not after.", "m"],
    ["after-christmas-listing", "Reopen the listing the morning you reopen", "hours after Christmas", "the first open day after Christmas", "If you are open the 26th, the special hours should not still say closed. Check before you unlock the door.", "g"],
    ["december-phone-tree", "Match the phone greeting to December hours", "phone greeting hours", "the greeting on the phone", "The recording and the listing should name the same closed days. People trust whichever they hear first.", "g"],
    ["year-end-number", "Confirm the public number before the year turns", "public phone number", "the number you will use next month", "If you are changing lines in January, do not change the listing until the new line is in a person's hand.", "g"],
  ],
};

const general = [
  ["listing-hours-match-door", "Make the listing hours match the door", "Google listing hours", "the hours on the listing and the door", "Open the listing and look at the door the same morning. They should tell the same day.", "g"],
  ["tap-to-call", "Put a tap-to-call number on the first screen", "tap-to-call number", "a number that starts a call", "A picture of a phone number is not a call. The first screen needs a number the phone can dial.", "s"],
  ["text-menu", "Publish the menu or service list as text", "text menu", "a list a phone can read", "If the only copy is a PDF or a photo, a phone will not read it and a customer will not zoom in.", "m"],
  ["answer-this-weeks-reviews", "Answer the reviews left this week", "Google review replies", "reviews from this week", "Reply while the visit is still true. A month-late reply reads like no one is watching.", "g"],
  ["photos-of-real-work", "Show photos of work you actually did", "photos of real work", "photos of finished work", "Use the job, the plate, or the chair. A stock room and a handshake do not tell people what they will get.", "g"],
  ["one-nap", "Use one name, one address, and one phone number", "name address phone consistency", "the name, address, and phone number", "The listing, the site, and the card should match. A second version splits the calls.", "g"],
  ["hide-home-pin", "Hide a home address if you travel to the customer", "service area listing", "whether a home address is public", "If you do not want customers at the house, the listing should show the area you serve instead of the pin on your door.", "g"],
  ["first-sentence", "Say what you do in the first sentence", "homepage first sentence", "the first sentence", "What you do, where, and how to start. If that takes a paragraph, the first screen failed.", "s"],
  ["cellular-load", "Open the site on a cellular connection", "mobile loading", "how the site loads off Wi-Fi", "Shop Wi-Fi hides a slow page. Try it the way a customer in a parking lot would.", "v"],
  ["one-service-page", "Give the main service its own page", "one page per service", "the page for the main service", "The homepage can introduce you. The job people search for needs its own page with a way to call.", "s"],
  ["four-field-form", "Cut the form down to four fields", "short contact form", "four fields on the form", "Name, number, city, and the job. Anything else can wait until you are talking.", "f"],
  ["listing-post", "Post what is true on the listing this week", "Google listing post", "a short listing post", "One update: a changed hour, a full day, or a service you have. Skip a post that says nothing.", "g"],
  ["pin-the-entrance", "Put the map pin on the entrance people use", "map pin", "the entrance pin", "The dot should be the door, not the rooftop center or the alley. Stand there and check.", "g"],
  ["which-calls", "Notice whether calls come from the listing", "listing calls", "calls that start on the listing", "If you cannot tell a listing call from a typed number, you cannot tell if the listing is working.", "v"],
  ["one-offer", "Keep a single offer on the homepage", "one homepage offer", "the one offer", "One current offer under the number. A second and third offer is how the page becomes a flyer.", "s"],
  ["staff-explains-button", "Ask the staff what the main button does", "staff understanding the website", "whether staff can explain the button", "If the person at the desk cannot say what happens when someone taps the button, the button is wrong.", "s"],
  ["cities-you-serve", "Name cities you serve without a dump of towns", "service area cities", "the cities you actually serve", "List the places you will go. A block of every city in the region helps no one choose you.", "g"],
  ["secure-form", "Check the lock icon and send a test", "secure contact form", "the lock on the page and a test send", "The form page should show a secure connection, and the test message should arrive where a person looks.", "f"],
  ["suite-number", "Include the suite or unit in the address", "suite number on a listing", "the suite or unit", "A building with ten doors needs the unit. The pin will not say it for you.", "g"],
  ["old-address-gone", "Remove the old address after a move", "old business address", "the address you left", "The listing, the footer, and the map embed should all show the new door. One leftover line keeps the old pin alive.", "g"],
  ["voicemail-hours", "Match the voicemail greeting to the hours", "voicemail greeting", "the hours on the greeting", "People who miss you hear the greeting next. It should name the same open days as the listing.", "g"],
  ["after-hours-message", "Say when you will call back", "after-hours message", "when a callback happens", "An after-hours recording that says 'leave a message' and nothing else creates a wait you did not mean to promise.", "g"],
  ["text-if-you-text", "Offer texting only if someone reads the texts", "business texting number", "a text number a person reads", "If you book by text, put that number up. If no one watches it, do not print it.", "s"],
  ["parking-note", "Say where to park or which door to use", "parking and entrance", "where to park and which door", "One sentence saves a loop around the building. Put it on the contact page and in the listing description.", "g"],
  ["payment-types", "List the ways you actually get paid", "payment types", "how people can pay", "Card, cash, or invoice. If you do not take one of them, do not let the listing say you do.", "g"],
  ["how-soon", "Say how soon you can usually come", "how soon you can come", "the usual wait", "A range is enough. 'Soon' is not a plan, and a same-day promise you miss becomes the review.", "s"],
  ["license-where-they-look", "Put the license where customers already look", "license number on a website", "the license number", "If your work requires a license, put the number on the page and the listing description. Do not make people hunt.", "s"],
  ["permissioned-photos", "Use photos you have permission to show", "photos you can publish", "photos you are allowed to use", "A job photo needs a yes from the customer when the work is inside a home or on their face. Skip the rest.", "g"],
  ["testimonial-with-a-city", "Use testimonials with a first name and a city", "testimonials", "a testimonial with a place", "A first name and a city is enough. A logo wall with no words does not help someone decide.", "s"],
  ["ended-promotion", "Take down a promotion that ended", "expired promotion", "a promotion that is over", "If the date passed, delete it today. An old percent-off is a trust problem, not a design problem.", "s"],
  ["popup-on-the-number", "Move any popup off the phone number", "popup over a call button", "a popup on the call button", "Close it yourself on a phone. If the number is under the box, the box has to go.", "s"],
  ["chat-nobody-watches", "Remove a chat box nobody is watching", "unattended chat box", "a chat box with no one behind it", "An unanswered chat is a closed door. Take it off until a person is assigned to it.", "s"],
  ["two-websites", "Pick one website and point everything at it", "one business website", "which site is the real one", "Two sites means two sets of hours. Choose one, and point the listing at that address.", "s"],
  ["facebook-hours", "Match Facebook hours to the listing", "Facebook hours", "hours on Facebook", "People still open the social page. If those hours disagree with the listing, fix the social page today.", "g"],
  ["instagram-destination", "Send the profile link to a page that answers", "social profile link", "where the social link lands", "The link should open hours, a menu, or a way to book. A dead homepage is a wasted tap.", "s"],
  ["right-yelp", "Point to the right location on other directories", "duplicate directory listings", "the correct location on other sites", "A second town's listing with your name will take the call. Claim or correct the one that is actually you.", "g"],
  ["broken-phone-button", "Tap every button that should start a call", "broken call button", "buttons that should dial", "Header, footer, and the listing. Each one should ring the same phone.", "s"],
  ["map-on-contact", "Put a map on the contact page", "map on the contact page", "the map next to the address", "The address in text and a map of that same door. If they disagree, fix the map.", "g"],
  ["lunch-closure", "Write the lunch closure if you lock the door", "lunch closure", "a midday closure", "A locked door at noon with hours that say open all day is a simple listing edit.", "g"],
  ["monday-closed", "Mark Monday closed if Monday is closed", "Monday hours", "Monday's hours", "The weekly editor has a Monday. Set it. Do not rely on a note in the description.", "g"],
  ["estimate-versus-form", "Ask for an estimate, not a questionnaire", "estimate request", "what you need to estimate", "The facts you need to call back, and nothing else. The long form can wait.", "f"],
  ["emergency-line-labeled", "Label an emergency line as emergency", "emergency phone line", "which number is for emergencies", "If one number is for a leaking pipe at night and another is the desk, say which is which.", "s"],
  ["gallery-by-job", "Sort the gallery by the kind of job", "photo gallery", "photos sorted by job", "People looking for one service should see that work first. A mixed reel makes them guess.", "s"],
  ["faq-from-real-calls", "Answer the question you hear every day", "common customer question", "the question you hear every day", "Put that answer on the page in a few lines. It is the FAQ that matters.", "s"],
  ["stars-versus-reviews", "Send people to the reviews, not a badge", "Google reviews", "where reviews live", "A star image you made is not the reviews. Link to the listing reviews or quote a real one.", "g"],
  ["page-title-service", "Name the service in the page title", "service page title", "the title of the service page", "The title should be the job and the area, the way a person would say it. A slogan is a weaker title.", "s"],
  ["footer-number", "Repeat the phone number in the footer", "footer phone number", "the number in the footer", "Long pages lose the header. The footer should dial the same line.", "s"],
  ["email-a-person-reads", "Publish an email a person actually reads", "business email", "an email someone reads", "If the inbox is a stranger to the staff, take the address off the page.", "f"],
  ["form-confirmation", "Show a confirmation after the form sends", "form confirmation", "what people see after they send", "A clear 'we got it' is the difference between a second submission and a phone call asking if it worked.", "f"],
  ["spam-folder", "Look in spam for the form mail", "form email in spam", "whether form mail hits spam", "Send a test and check the junk folder. A form that only arrives as spam will be missed.", "f"],
  ["auto-reply-promise", "Do not let an auto-reply promise a time you miss", "email auto-reply", "what the auto-reply promises", "If the reply says 'within an hour' and you call tomorrow, change the reply.", "f"],
  ["language-customers-use", "Write the page in the language customers use", "page language", "the language of the page", "If your calls are in more than one language, say so and offer that page. Do not hide the number inside a translation widget.", "s"],
  ["team-photo-names", "Name the people in the team photo", "team photo", "names on the team photo", "A photo with first names is enough. An unnamed group shot does not tell anyone who they will meet.", "s"],
  ["owner-on-about", "Put a real name on the about page", "about page name", "who runs the business", "A first and last name beats 'our team of professionals.' People call a person.", "s"],
  ["true-years", "Only claim the years you have actually been open", "years in business", "how long you have been open", "If the page says twenty years, it should be true. Round numbers people invent are easy to doubt.", "s"],
  ["brands-you-carry", "Name brands only if you still carry them", "brands you carry", "brands you still have", "A brand someone searches for should be on the page only while you sell or service it.", "s"],
  ["sold-out", "Take a sold-out item off the page", "sold-out item", "an item you cannot sell", "Leave it up only if you say when it returns. Otherwise delete it.", "s"],
  ["wait-for-a-chair", "Say the wait for a chair or a table", "current wait", "the wait right now", "If walk-ins wait, say how long on a normal day. A surprise hour in the lobby is the review.", "s"],
  ["reservation-or-walkin", "Say whether you take reservations or walk-ins", "reservations versus walk-ins", "how people get a spot", "Pick the one you do. Saying both when you only do one fills the book with the wrong arrivals.", "m"],
  ["delivery-labeled", "Label a delivery link as delivery", "delivery link", "the delivery link", "If the link leaves your site for a delivery app, say that. A button that says 'order' and opens a different brand confuses people.", "m"],
  ["allergen-note", "Put allergy or ingredient notes where the list is", "allergy note", "where ingredient notes live", "Next to the item, not in a footer policy. If you do not list them, do not imply that you do.", "m"],
  ["first-visit", "Explain the first visit in a few lines", "first visit", "what the first visit is", "How long it is, what it costs to start, and what to bring. That is the page that earns the call.", "s"],
  ["deposit-sentence", "Put the deposit rule in one sentence", "deposit policy", "the deposit", "Amount and when it is due. A policy PDF no one opens is not a sentence.", "s"],
  ["cancellation-window", "State the cancellation window", "cancellation policy", "how cancellations work", "How much notice, and what happens inside that window. Put it where people book.", "s"],
  ["visit-includes", "Say what the visit includes", "what a visit includes", "what is included", "Three concrete lines. 'Full service' is not one of them.", "s"],
  ["visit-excludes", "Say what the visit does not include", "what a visit does not include", "what is not included", "The exclusion prevents the argument. One sentence is enough.", "s"],
  ["cities-you-decline", "Say where you will not travel", "areas you do not serve", "places you will not go", "A short no saves a call. You do not need a map of everywhere you refuse.", "g"],
  ["same-day-or-scheduled", "Say if you are same-day or scheduled", "same-day service", "whether you come the same day", "If same-day depends on the morning, say that. A blanket yes is a broken promise by noon.", "s"],
  ["photo-of-the-rig", "Show the truck, chair, or counter people should look for", "photo of your business", "what people should look for", "The thing they will see on arrival. Not a logo on a white field.", "g"],
  ["night-photo", "Add a night photo if you are open after dark", "night photo", "a photo after dark", "If the sign lights up, show it. Daytime-only photos hide an evening business.", "g"],
  ["weekend-differs", "Write weekend hours that differ from weekdays", "weekend hours", "weekend hours", "Saturday is not a copy of Tuesday unless it really is. Set each day.", "g"],
  ["appointment-address", "Make sure reminders use the current address", "appointment reminder address", "the address in reminders", "The text that goes out the day before should match the door you use now.", "s"],
  ["review-link-for-staff", "Give the staff a review link they can send", "review link", "a review link the staff can share", "The link should open your listing's review box. Test it once from a phone that is not yours.", "g"],
  ["ask-after-the-job", "Ask for a review after the job, not before", "when to ask for a review", "the moment you ask for a review", "After they have the result. A request at the greeting feels like a cover charge.", "g"],
  ["one-star-next-step", "Reply to a hard review with a next step", "reply to a negative review", "a reply to a hard review", "Say you will make it right and how to reach you. Do not argue in public.", "g"],
  ["photos-this-month", "Add at least one photo from this month", "new Google photo", "one photo from this month", "Listings with only old photos look closed. One current picture resets that.", "g"],
  ["products-you-sell", "List products you still sell on the profile", "products on the listing", "products you still sell", "Remove the ones you discontinued. A product button for a ghost item wastes the tap.", "g"],
  ["services-on-profile", "Fill in the services on the profile", "services on the Google listing", "services listed on the profile", "Name the real services in a few words each. They should match the pages on the site.", "g"],
  ["missing-website-link", "Put the real website on the listing", "website link on the listing", "the website button", "The button should open your site, not a social app and not a dead link.", "g"],
  ["not-secure-warning", "Fix a page the browser calls not secure", "not secure warning", "a not-secure warning", "If the browser warns people, they will not send the form. The page needs the secure address.", "f"],
  ["too-many-fields", "Delete form fields you do not read", "extra form fields", "fields nobody reads", "If the staff never looks at a box, it should not be on the form.", "f"],
  ["captcha-blocks", "Drop a captcha that blocks real customers", "captcha on a form", "a captcha in the way", "If people cannot pass it on a phone, you do not have a form. Use a lighter check or none.", "f"],
  ["extension-fails", "Avoid a phone extension the mobile call cannot dial", "phone extension", "an extension on the public number", "Many phones will not dial the extension from a listing. Use a direct line.", "g"],
  ["tracking-number-secret", "Do not publish a tracking number as the public number", "public phone number", "the number printed for customers", "The number on the door and the listing should be the one a person answers. A hidden tracking line confuses everyone else.", "g"],
  ["do-not-duplicate-listing", "Do not create a second listing if one vanished", "suspended Google listing", "a missing listing", "A second listing splits reviews. Find out what happened to the first one before you start over.", "g"],
  ["duplicate-listings", "Find and close duplicate listings", "duplicate listings", "a second listing of the same place", "Two listings divide the reviews and the calls. Keep the one customers already use.", "g"],
  ["stranger-edits", "Check edits strangers suggested on the listing", "suggested listing edits", "edits you did not make", "Hours and categories get suggested by other people. Reject the ones that are wrong.", "g"],
  ["keyword-name", "Take city keywords out of the business name", "business name keywords", "extra words in the business name", "The name should be the name on the door. A string of cities looks like spam and can get the listing pulled.", "g"],
  ["stock-handshake", "Replace the stock handshake photo", "stock photo", "a stock photo", "If the image could be any company, it is the wrong image. Use your door.", "g"],
  ["last-years-prices-on-menu", "Retire last year's prices on the menu", "outdated menu prices", "prices on the menu", "A price you no longer charge should not be the one on the phone. Update or remove the line.", "m"],
  ["image-menu", "Stop using a photo as the only menu", "menu photo", "a menu that is only a picture", "Type the items. A picture will not zoom cleanly and will not match a search.", "m"],
  ["slider-hides-services", "Do not hide services inside a moving slider", "homepage slider", "services stuck in a slider", "If the service moves away before it can be tapped, put a still list under it.", "s"],
  ["autoplay-covers-number", "Stop a video from covering the number", "autoplay video", "a video over the number", "Sound and a full-screen clip are how a phone user leaves. The number has to be visible first.", "s"],
  ["music-on-homepage", "Turn off music that plays by itself", "autoplay audio", "sound that starts on its own", "A page that makes noise in a public place gets closed. Leave the sound off.", "s"],
  ["intro-animation", "Skip the animation before the phone number", "intro animation", "anything before the number", "People should see the number without waiting for a logo to finish.", "s"],
  ["type-too-small", "Enlarge type that cannot be read outside", "small text on a phone", "type size on a phone", "If you have to pinch to read the hours, the hours are too small.", "s"],
  ["buttons-too-close", "Separate buttons that sit on top of each other", "cramped buttons", "space around the buttons", "Call and directions should not be so close that a thumb hits the wrong one.", "s"],
  ["contrast-outdoors", "Make the number readable in sunlight", "text contrast", "whether the number can be read outside", "Gray on gray fails in a parking lot. Dark text on a light background is enough.", "s"],
  ["footer-address", "Put the address in the footer", "footer address", "the address in the footer", "The same address as the listing, including the suite.", "g"],
  ["footer-hours", "Put the hours in the footer", "footer hours", "hours in the footer", "They should match the listing exactly, including a day you are closed.", "g"],
  ["no-need-for-a-blog", "You do not need a blog to be found", "service page instead of a blog", "a page that answers the job", "A clear service page beats a neglected blog. Publish the page you want a search to open.", "s"],
  ["coupon-popup", "Retire a coupon popup from last season", "coupon popup", "an old coupon popup", "If the coupon is dead, the popup is a lie. Remove it.", "s"],
  ["personal-cell", "Decide which number is the business number", "business versus personal phone", "the number that represents the business", "Put that one on the listing. A personal cell that changes with the staff will orphan the listing.", "g"],
  ["fax-in-the-header", "Remove a fax number from the header", "fax number", "a fax number in the header", "It steals the spot where the phone number should be. If you still use a fax, put it on the contact page in small type.", "s"],
  ["old-shopping-center", "Update directions if the center was rebuilt", "directions to the door", "directions after a remodel", "Landmark, lot, and door. The old 'next to' may be gone.", "g"],
  ["wheelchair-if-true", "Say if the entrance is step-free, if it is", "step-free entrance", "whether the entrance has a step", "Only claim what is true. A wrong yes is worse than silence.", "g"],
  ["pets-or-kids", "State a kids or pets rule if people ask", "kids or pets policy", "a rule people ask about", "One sentence. If you have no rule, you do not need a paragraph.", "s"],
  ["online-order-versus-phone", "Say whether to order online or by phone", "online order versus phone", "how to place the order", "Pick the path you watch. Offering both when only one is staffed loses the order.", "m"],
  ["class-schedule", "Publish this month's class or provider schedule", "current schedule", "the schedule for this month", "Names and times that are true now. Last quarter's PDF should come down.", "s"],
  ["book-a-person", "Say if people book a specific person", "booking a person", "whether a person can be requested", "If they can, say how. If they cannot, say the next available is the booking.", "s"],
  ["insurance-list", "Publish insurance or plans only if the list is current", "accepted plans", "plans you still accept", "An outdated list creates a front-desk argument. Update it or take it down.", "s"],
  ["financing-sentence", "Explain financing in one sentence if you offer it", "financing", "how financing works", "Who it is through and the next step. A logo with no sentence is not an explanation.", "s"],
  ["warranty-sentence", "State the warranty in one sentence", "warranty", "the warranty", "What is covered and for how long. If it varies, say it varies and how you put it in writing.", "s"],
  ["written-estimate", "Say when a price is a written estimate", "written estimate", "when the price is an estimate", "If the number can change after a look, say that before they book.", "s"],
  ["trip-charge", "Disclose a trip charge before the visit", "trip charge", "the trip charge", "Put it on the service page. A surprise at the door is the review.", "s"],
  ["minimum-job", "State a minimum if you have one", "job minimum", "the smallest job you take", "A sentence saves the call you would have declined anyway.", "s"],
  ["brands-you-skip", "Say which brands or jobs you do not take", "jobs you do not take", "work you decline", "A short list is a kindness. It keeps the calendar for the work you do.", "s"],
  ["residential-or-commercial", "Say if you work homes, businesses, or both", "residential or commercial", "who you work for", "People guess wrong. One line at the top of the service page fixes it.", "s"],
  ["emergency-fee", "Name an after-hours fee if there is one", "after-hours fee", "the after-hours fee", "Say it next to the emergency number. Do not save it for the invoice.", "s"],
  ["same-week", "Say if same-week is still open", "same-week availability", "whether this week is open", "Update the sentence when the week fills. A stale 'this week' is how you overbook.", "s"],
  ["waitlist-explained", "Explain the waitlist in two sentences", "waitlist", "how the waitlist works", "How to join, and how you contact them. A waitlist with no follow-up is a list of people you ghosted.", "m"],
  ["no-show", "State the no-show rule where people book", "no-show policy", "the no-show rule", "Notice required, and the consequence. Hidden rules feel like a penalty.", "s"],
  ["daily-special-today", "Only post a daily special that is today's", "daily special", "today's special", "If it is yesterday's soup, take the post down. A wrong special is a wrong visit.", "m"],
  ["kitchen-versus-door", "Separate kitchen hours from door hours", "kitchen hours", "when the kitchen closes", "The door can be open after the kitchen stops. Write both times.", "m"],
  ["bar-versus-dining", "Separate bar hours from dining hours", "bar hours", "bar hours versus dining hours", "If they differ, the listing description should say so. One close time will be wrong.", "m"],
  ["takeout-window", "Say if takeout uses a different door or time", "takeout window", "how takeout works", "Door, hours, and how to order. Do not make people infer it from the dine-in hours.", "m"],
  ["catering-page", "Give catering its own page if you offer it", "catering page", "the catering page", "Lead time and how to start. It should not be a paragraph at the bottom of the dinner menu.", "m"],
  ["private-events", "Explain private events on their own page", "private events", "private events", "Capacity, the buyout or the room, and who to email or call.", "s"],
  ["what-to-bring", "Say what to bring to the first meeting", "what to bring", "what to bring the first time", "A short list lowers the no-show and the 'I forgot' call.", "f"],
  ["how-you-charge", "Say how you charge, in one sentence", "how you charge", "how pricing works", "Flat, hourly, or a quote after a look. People can accept any of the three if you say which.", "s"],
  ["starting-price-line", "Publish a starting price where you have one", "starting price", "a starting price", "The common job's starting point. You can still say the final number depends on the visit.", "s"],
  ["free-if-free", "Only say free if it is free", "free estimate", "whether the estimate is free", "If you charge to come look, do not say free estimate on the page.", "s"],
  ["caption-the-photo", "Caption a photo so people know what they see", "photo caption", "a caption on the photo", "Say what the job was. A filename is not a caption.", "s"],
  ["neighborhood-names", "Use the neighborhood name people actually say", "neighborhood name", "the name people use for the area", "If locals say the district and the listing says only the city, add the name they use.", "g"],
  ["detour-post", "Post a detour when the usual approach is closed", "detour notice", "a detour to the door", "A listing post with the open entrance beats a week of wrong turns.", "g"],
  ["weather-closure-post", "Post a closure the morning you close for weather", "weather closure", "a weather closure", "Before the commute, not after. Special hours plus a short post.", "g"],
  ["hiring-separate", "Keep the hiring page separate from booking", "hiring page", "the hiring page", "Applicants and customers need different buttons. Do not make them share one form.", "s"],
  ["wholesale-versus-retail", "Say if a price is wholesale or retail", "wholesale versus retail", "who the price is for", "If both exist, label them. One unlabeled number will be read as the customer price.", "s"],
  ["appointment-only", "Say if you are appointment only", "appointment only", "whether you require an appointment", "Put it in the first screen and on the listing description. A walk-up to a locked appointment book is a bad start.", "g"],
  ["walk-ins", "Say if walk-ins are welcome", "walk-in hours", "when walk-ins are welcome", "Name the hours. 'Walk-ins welcome' with a full book is how the wait becomes the complaint.", "g"],
  ["last-seating", "Publish the last seating or last appointment", "last seating", "the last time you will start", "The close time is not the last moment you can start a visit. Say both if they differ.", "m"],
  ["large-party", "State the large-party rule", "large party", "the large-party rule", "How many people need a reservation or a buyout. Put the number where the hours are.", "m"],
  ["second-location-listing", "Give a second location its own listing", "second location listing", "a listing for each location", "Each door needs its own hours and phone. One listing cannot tell the truth about two shops.", "g"],
  ["second-location-on-site", "Show the second location on the site", "second location on the website", "both locations", "Name, hours, and a way to call each one. Do not hide the new shop on the old homepage only.", "s"],
  ["phone-tree", "Match the phone menu to the website", "phone menu", "the phone menu", "The option for appointments should be the appointment line. A menu that mismatches the site sends people in a circle.", "g"],
  ["callback-window", "Name the hours when you return calls", "callback hours", "when you return calls", "If you return calls from noon to four, say so on the form's thank-you line.", "f"],
  ["page-experience-june", "See if the main page moves while it loads", "page movement while loading", "whether the page jumps while loading", "A button that shifts under the thumb is a mis-tap. Watch the first screen on a phone and fix the piece that jumps.", "v"],
  ["largest-image", "Find the image that dominates the load", "largest image on the page", "the image that slows the first screen", "It is usually the banner. A smaller copy of the same photo keeps the look and returns the call button sooner.", "v"],
  ["profile-name-change", "Use Google Business Profile for the listing name", "Google Business Profile", "what the listing is called now", "The product people used to call Google My Business is Google Business Profile. The hours, photos, and phone still have to match the door.", "g"],
  ["profile-description", "Rewrite the profile description in one breath", "Google Business Profile description", "the profile description", "What you do and where, in plain words. Do not stuff neighborhoods into the paragraph.", "g"],
  ["ga4-which-number", "Know which analytics number you actually use", "Google Analytics", "which visit number you trust", "If you look at numbers, know which property is current. A report no one opens does not need a paragraph on the site.", "v"],
  ["helpful-page", "Write the page for the person calling, not for a keyword", "clear service page", "a page that answers the caller", "Say what the visit is, what it costs to start, and how to book. A page written to repeat a phrase will not survive a real question.", "s"],
  ["ua-stopped", "Stop relying on the old analytics if you still open it", "old analytics reports", "the report you check", "The old Universal Analytics property stopped taking new visits in 2023. If a number matters, read the property that is still collecting them.", "v"],
];

function holidayAngles(kind, year) {
  const bank = {
    "new-year": {
      title: "Set New Year hours before the week starts",
      search: "New Year hours",
      focus: "New Year hours",
      opening:
        year < 2022
          ? `Write the hours for the last days of ${year - 1} and the first day of ${year}. A normal weekly schedule will show you open on a day the door is locked.`
          : `Write New Year hours on the profile and the contact page for ${year}. Check them on a phone, because that is where people look the night before.`,
    },
    valentine: {
      title: "Put Valentine's week hours and the offer in one place",
      search: "Valentine's week hours",
      focus: "Valentine's week",
      opening: `If ${year} includes a Valentine offer or a fuller book, say the hours and the last day of the offer. Leave the business name alone.`,
    },
    easter: {
      title: "Write Easter week hours as special hours",
      search: "Easter week hours",
      focus: "Easter week hours",
      opening: `Easter week in ${year} is not a normal week. Mark the day you close, and leave the rest of the weekly schedule as the days you are open.`,
    },
    mother: {
      title: "Say how Mother's Day bookings work this year",
      search: "Mother's Day bookings",
      focus: "Mother's Day bookings",
      opening: `The week of Mother's Day in ${year} fills early for a lot of shops. Say whether you are taking reservations, walk-ins, or neither, and the hour you stop.`,
    },
    memorial: {
      title: "Mark Memorial Day on the listing",
      search: "Memorial Day hours",
      focus: "Memorial Day hours",
      opening: `Memorial Day ${year} is a Monday. If you are closed, the weekly Monday hours will still look open unless you add a special hour.`,
    },
    father: {
      title: "Set Father's Day week hours and capacity",
      search: "Father's Day hours",
      focus: "Father's Day week",
      opening: `If Father's Day ${year} changes the book or the menu, put the hours and the limit on the listing. Take it down the next week.`,
    },
    july4: {
      title: "Write July 4 hours before the weekend",
      search: "July 4 hours",
      focus: "July 4 hours",
      opening:
        year >= 2024
          ? `Set July 4, ${year} hours on the profile. A short summary in search can repeat an old hour, so the profile has to be the one that is right.`
          : `Set July 4, ${year} as a special hour if you close or shorten the day. Do it before the weekend, not after the first wrong visit.`,
    },
    school: {
      title: "Publish back-to-school hours the week they start",
      search: "back-to-school hours",
      focus: "back-to-school hours",
      opening: `School schedules in ${year} change the rush hour. Write the hours you will keep once classes start, on the listing and the page.`,
    },
    labor: {
      title: "Mark Labor Day closed if the door will be locked",
      search: "Labor Day hours",
      focus: "Labor Day hours",
      opening: `Labor Day ${year} is a Monday. Add the special hour. A description that mentions the holiday is not a substitute.`,
    },
    veterans: {
      title: "Set Veterans Day hours if you close",
      search: "Veterans Day hours",
      focus: "Veterans Day hours",
      opening: `If you close or shorten Veterans Day ${year}, write that day on the listing. The weekly schedule does not know the holiday.`,
    },
    halloween: {
      title: "Publish Halloween day hours",
      search: "Halloween hours",
      focus: "Halloween day hours",
      opening: `Halloween ${year} often means an earlier close or a later door. Write the day itself, not a vague seasonal note.`,
    },
    thanksgiving: {
      title: "Write Thanksgiving week hours before Monday",
      search: "Thanksgiving hours",
      focus: "Thanksgiving week hours",
      opening:
        year >= 2024
          ? `Put Thanksgiving ${year} hours on the profile before the week begins. A summary above the links can be stale. The hours field is what you control.`
          : year >= 2021
            ? `Put Thanksgiving ${year} on special hours in Google Business Profile, and mirror them on the contact page.`
            : `Write Thanksgiving ${year} hours on the listing before Monday. If Thursday is a normal weekly day, the map will show you open.`,
    },
    christmas: {
      title: "Separate Christmas Eve, Christmas Day, and the days after",
      search: "Christmas hours",
      focus: "Christmas week hours",
      opening:
        year >= 2024
          ? `Write each closed day of Christmas week ${year} on the profile. Do not trust a generated summary to know you are shut.`
          : `Write Christmas Eve, Christmas Day, and the day you reopen for ${year}. One line that says "closed for the holidays" is not a schedule.`,
    },
  };
  const item = bank[kind];
  return topic(`${kind}-hours-${year}`, item.title, item.search, item.focus, item.opening, "g");
}

const milestones = [
  {
    when: "2021-06-14",
    item: topic(
      "core-web-vitals-arrive-2021",
      "Watch the page experience on a phone",
      "page experience on a phone",
      "how the page behaves while it loads",
      "In June 2021, loading and stability on a phone became part of how pages compete. For a local shop the practical test is still simple: open the page on cellular and see if the number is tappable before you get impatient.",
      "v"
    ),
  },
  {
    when: "2021-11-08",
    item: topic(
      "google-business-profile-name-2021",
      "The listing is now called Google Business Profile",
      "Google Business Profile",
      "the listing, under its current name",
      "In November 2021 Google My Business became Google Business Profile. The name on the product changed. The job did not: hours, phone, and photos still have to match the door.",
      "g"
    ),
  },
  {
    when: "2022-03-14",
    item: topic(
      "know-which-analytics-2022",
      "Know which analytics number you trust",
      "which analytics report to trust",
      "the visit number you look at",
      "By March 2022 the newer analytics property was the one Google wanted people to learn. If you look at a report, know which one is still the plan. The page itself still has to show the phone number.",
      "v"
    ),
  },
  {
    when: "2022-08-22",
    item: topic(
      "write-for-the-caller-2022",
      "Write the page for the person who will call",
      "a page written for the caller",
      "whether the page answers a real question",
      "Late summer 2022 rewarded pages that helped someone, not pages stuffed with a phrase. Say what the visit includes, what it costs to start, and how to reach you.",
      "s"
    ),
  },
  {
    when: "2023-07-10",
    item: topic(
      "universal-analytics-stopped-2023",
      "The old analytics property stopped taking visits",
      "Universal Analytics shutdown",
      "the analytics report you still open",
      "Universal Analytics stopped processing new visits on July 1, 2023. If a number is part of how you run the week, open the property that is still collecting. The listing and the phone number are still the things customers see.",
      "v"
    ),
  },
];

const earlyAi = [
  ["drafts-need-your-facts-2022", "A writing tool still needs your facts", "editing a drafted page", "facts you have to supply yourself", "In November 2022 some owners started pasting drafts from a new writing tool. It does not know your hours, your cities, or your prices. Read every sentence as the person who answers the phone."],
  ["draft-wrong-city", "Do not publish a draft that names the wrong city", "wrong city in drafted copy", "the cities in a draft", "A draft will invent a service area. Delete any city you do not drive to before the page goes up."],
  ["read-the-draft-aloud", "Read a drafted page out loud at the desk", "reading drafted website copy", "a draft read out loud", "If the person at the desk would not say the sentence, it does not belong on the site."],
  ["tool-does-not-know-hours", "A writing tool does not know this week's hours", "hours a writing tool cannot know", "hours a tool will get wrong", "Type the hours from the door. Do not accept a schedule a tool guessed."],
  ["written-answers-above-links", "Search is testing short written answers", "written answers in search", "a short answer above the links", "Late 2022 and 2023, search sometimes showed a written blurb above the links. Your page still needs the phone number, because the blurb will not book the job."],
  ["blurb-can-be-wrong", "A written answer can have the wrong hours", "incorrect hours in a search answer", "hours inside a short answer", "If a blurb says you are open and the door is locked, fix the profile hours. That is the source you control."],
  ["draft-invents-reviews", "Do not let a draft invent reviews", "invented reviews", "reviews a tool made up", "Quotes on the page have to come from real customers. Delete anything the tool composed."],
  ["draft-invents-prices", "Do not let a draft invent prices", "invented prices", "a price a tool guessed", "Put the price you actually quote, or say the price comes after a look. A made-up number will be the one people repeat."],
  ["staff-recognize-sentences", "The staff should recognize the sentences on the site", "staff review of website copy", "whether staff recognize the page", "Hand them the page. If they say 'we do not say it that way,' change the page."],
  ["one-page-edited", "Edit one page instead of generating ten", "editing one service page", "one finished page", "A single accurate service page is worth more than a stack of drafts you have not read."],
  ["listing-description-is-yours", "You still write the listing description", "Google Business Profile description", "the description on the profile", "A tool can suggest a sentence. You have to check that it names the real work and no extra cities."],
  ["draft-does-not-answer-phone", "A draft does not answer the phone", "phone coverage", "who answers the phone", "The page can be polished and the call can still go nowhere. The person answering is the system that matters."],
  ["do-not-publish-unread", "Do not publish a page you have not read", "unpublished draft review", "a page you have not read", "Read it on a phone first. If you would not hand it to a customer, it is not ready."],
  ["keep-the-old-page-until", "Keep the current page up while you edit", "editing without taking the site down", "the live page while you edit", "Do not replace a clear page with a draft in one move. Fix the sentences, then publish."],
];

const laterAi = [
  ["ai-overview-needs-your-page-2024", "An AI Overview does not replace your page", "AI Overview and your page", "the page under an AI Overview", "In May 2024 search started showing AI Overviews above the links more often. The overview is not a booking. The page under it still has to name the job, the area, and the phone."],
  ["overview-omits-the-number", "Put the phone number where a summary might skip it", "phone number and an AI Overview", "the phone number on the page", "A summary can describe the business and forget the number. The first screen still has to dial."],
  ["overview-old-service", "Remove a service you no longer offer before a summary repeats it", "outdated service in an AI Overview", "a service you stopped", "If the page still lists it, a summary can repeat it. Delete the line."],
  ["first-sentence-quotable", "Write a first sentence that states the facts", "first sentence on a service page", "the first sentence", "Say the service, the area, and how to start. A summary can only repeat what you wrote clearly."],
  ["overview-hours-from-profile", "Fix profile hours if a summary has them wrong", "AI Overview hours", "hours inside a summary", "Hours in a summary come from the profile and the page. Correct the profile, then look again later."],
  ["photos-not-in-the-summary", "Keep photos on the listing even if a summary skips them", "photos and an AI Overview", "photos on the listing", "The summary is text. The decision often happens on the photos. Add a current one."],
  ["draft-needs-cities", "A drafted service page still needs your cities", "cities in drafted copy", "the cities on a drafted page", "Delete every town you will not drive to. A tool will add them to sound local."],
  ["ask-a-tool-then-call", "People may ask a tool and then call you", "customers who use AI then call", "the call after someone used a tool", "Assume they read a summary that might be incomplete. Answer with the hours, the area, and the price the way the page states them."],
  ["call-matches-the-page", "Make the call match the page", "phone script and the website", "what the phone says versus the page", "If the page says a starting price, the person answering should not quote a different one."],
  ["one-service-not-twenty", "Do not publish twenty pages a tool offered to write", "too many drafted pages", "pages you have not checked", "One true service page is safer than a folder of unread drafts aimed at towns you do not serve."],
  ["form-still-reaches-a-person", "Make sure the form still reaches a person", "contact form delivery", "where the form goes", "A polished page with a form that lands nowhere is a dead end, summary or not."],
  ["reviews-are-from-customers", "Leave reviews to customers", "real Google reviews", "reviews written by customers", "Do not generate praise. Reply to the reviews people actually left."],
  ["link-worth-opening-2025", "Make the link worth opening under the summary", "page under an AI Overview", "why the page is worth opening", "In 2025 the summary sits above the links. The page has to add the price, the photos, and the button the summary does not have."],
  ["summary-wrong-fix-profile-2026", "If a summary is wrong, fix the profile and the page", "incorrect AI Overview", "a wrong summary", "You cannot edit the summary like a document. You can correct the hours, the services, and the phone on the profile and the site."],
  ["compare-summary-with-door", "Compare a summary with the door", "AI Overview versus the door", "the summary versus the door", "Read the summary on a phone, then look at the hours on the door. Change whichever source is wrong."],
  ["do-not-let-overview-be-the-only-pitch", "Do not let a summary be the only pitch", "AI Overview is not the pitch", "the page you still need", "The summary can start the interest. The page has to finish it with a way to call."],
];

function pushSequence(map, mondays, startIso, step, items) {
  const pool = mondays.filter((date) => iso(date) >= startIso);
  let cursor = 0;
  for (const item of items) {
    while (cursor < pool.length && map.has(iso(pool[cursor]))) cursor += 1;
    if (cursor >= pool.length) return;
    map.set(iso(pool[cursor]), item);
    cursor += step;
  }
}

export function assignWeeklyTopics(dates) {
  const mondays = dates.map((date) => new Date(date));
  const pinned = new Map();
  const years = [...new Set(mondays.map((date) => date.getFullYear()))];

  for (const year of years) {
    pin(pinned, mondayOf(year, 0, 1), holidayAngles("new-year", year), mondays);
    pin(pinned, mondayOf(year, 1, 14), holidayAngles("valentine", year), mondays);
    const easter = easterSunday(year);
    if (easter) pin(pinned, mondayOf(easter.getFullYear(), easter.getMonth(), easter.getDate()), holidayAngles("easter", year), mondays);
    const mother = nthWeekday(year, 4, 0, 2);
    pin(pinned, mondayOf(mother.getFullYear(), mother.getMonth(), mother.getDate()), holidayAngles("mother", year), mondays);
    const memorial = lastWeekday(year, 4, 1);
    pin(pinned, memorial, holidayAngles("memorial", year), mondays);
    const father = nthWeekday(year, 5, 0, 3);
    pin(pinned, mondayOf(father.getFullYear(), father.getMonth(), father.getDate()), holidayAngles("father", year), mondays);
    pin(pinned, mondayOf(year, 6, 4), holidayAngles("july4", year), mondays);
    const august = mondays.find((date) => date.getFullYear() === year && date.getMonth() === 7 && date.getDate() >= 10 && date.getDate() <= 16);
    if (august) pin(pinned, august, holidayAngles("school", year), mondays);
    pin(pinned, nthWeekday(year, 8, 1, 1), holidayAngles("labor", year), mondays);
    pin(pinned, mondayOf(year, 10, 11), holidayAngles("veterans", year), mondays);
    pin(pinned, mondayOf(year, 9, 31), holidayAngles("halloween", year), mondays);
    const thanksgiving = nthWeekday(year, 10, 4, 4);
    pin(pinned, mondayOf(thanksgiving.getFullYear(), thanksgiving.getMonth(), thanksgiving.getDate()), holidayAngles("thanksgiving", year), mondays);
    pin(pinned, mondayOf(year, 11, 25), holidayAngles("christmas", year), mondays);
  }

  for (const milestone of milestones) {
    const [y, m, d] = milestone.when.split("-").map(Number);
    pinNextFree(pinned, new Date(y, m - 1, d), milestone.item, mondays);
  }

  pushSequence(
    pinned,
    mondays,
    "2022-11-28",
    4,
    earlyAi.map(([slug, title, search, focus, opening]) => topic(slug, title, search, focus, opening, "a"))
  );
  pushSequence(
    pinned,
    mondays,
    "2024-05-13",
    5,
    laterAi.map(([slug, title, search, focus, opening]) => topic(slug, title, search, focus, opening, "a"))
  );

  const queues = new Map(Object.entries(byMonth).map(([month, rows]) => [Number(month), rows.map((row) => topic(...row))]));
  const used = new Set([...pinned.values()].map((item) => item.slug));
  const extraCount = new Map();

  return mondays.map((date) => {
    const key = iso(date);
    if (pinned.has(key)) return pinned.get(key);
    const monthQueue = queues.get(date.getMonth());
    let next = monthQueue.find((item) => !used.has(item.slug));
    if (!next) {
      const bucket = `${date.getFullYear()}-${date.getMonth()}`;
      const n = extraCount.get(bucket) || 0;
      extraCount.set(bucket, n + 1);
      next = extraTopic(date, n);
      if (used.has(next.slug)) next = { ...next, slug: `${next.slug}-${n}` };
    }
    used.add(next.slug);
    return next;
  });
}

const monthNames = [
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

function extraTopic(date, n) {
  const year = date.getFullYear();
  const name = monthNames[date.getMonth()];
  const angles = [
    [
      "hours",
      `Read the ${name} ${year} hours on the door and the listing`,
      `${name} ${year} hours`,
      `the hours for ${name} ${year}`,
      `In ${name} ${year}, the useful check is the schedule you are actually keeping. Read the listing and the door the same morning.`,
      "g",
    ],
    [
      "photo",
      `Add one ${name} ${year} photo of the real place`,
      `${name} ${year} business photo`,
      `a photo from ${name} ${year}`,
      `Take one picture this ${name} of the door, the work, or the counter. A photo from another season makes ${year} look unattended.`,
      "g",
    ],
    [
      "offer",
      `Keep the ${name} ${year} offer to a single dated line`,
      `${name} ${year} offer`,
      `the offer running in ${name} ${year}`,
      `If you are running an offer in ${name} ${year}, put the end date in the same sentence and keep it under the phone number.`,
      "s",
    ],
    [
      "list",
      `Update the ${name} ${year} menu or service list`,
      `${name} ${year} service list`,
      `what you offer in ${name} ${year}`,
      `The list should be what you can do this ${name}, typed out so a phone can read it. Remove anything ${year} has already dropped.`,
      "m",
    ],
    [
      "wait",
      `Say how far out you are booked in ${name} ${year}`,
      `${name} ${year} availability`,
      `availability in ${name} ${year}`,
      `People calling in ${name} ${year} want to know how soon. Put the real wait on the page and change it when the week fills.`,
      "s",
    ],
    [
      "form",
      `Send a test from the form in ${name} ${year}`,
      `${name} ${year} form test`,
      `a test message in ${name} ${year}`,
      `Send one message to yourself this ${name}. If it does not reach a person, the form is not a way to book.`,
      "f",
    ],
  ];
  const angle = angles[n % angles.length];
  return topic(`${name.toLowerCase()}-${angle[0]}-${year}`, angle[1], angle[2], angle[3], angle[4], angle[5]);
}

function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}
