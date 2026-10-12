export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear?: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: "PGR Services",
  legalName: "PGR Services",
  tagline: "Professional guttering and roofing in Dublin.",
  primaryLocation: {
    street: "Jamestown Little Industrial Estate, St Margaret's Rd",
    suite: "",
    city: "Finglas North, Dublin 11",
    state: "Dublin",
    postalCode: "",
    country: "Ireland",
    directions: "Jamestown Little Industrial Estate, St Margaret's Rd, Finglas North, Dublin 11, Ireland",
    landmarks: "Plus code: 9MXW+FR Dublin 11, Ireland",
  },
  contact: {
    phone: "+353 87 330 8707",
    emergencyPhone: "+353 87 330 8707",
    whatsapp: "+353 87 330 8707",
    email: "",
  },
  identityHighlights: ["Roofing contractor", "4.9 stars · 114 Google reviews"],
  schedule: [
    { day: "Monday", hours: "8 AM–6:30 PM" },
    { day: "Tuesday", hours: "8 AM–6:30 PM" },
    { day: "Wednesday", hours: "8 AM–6:30 PM" },
    { day: "Thursday", hours: "8 AM–6:30 PM" },
    { day: "Friday", hours: "8 AM–6:30 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
  verifiedStats: [
    { value: 4, suffix: ".9/5", label: "Google rating", description: "Based on 114 customer reviews." },
    { value: 114, suffix: "", label: "Google reviews", description: "Feedback from local customers." },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: "roofing-team",
    slug: "our-doctor",
    name: "Rafal and the PGR team",
    title: "Guttering and roofing specialists",
    qualifications: "Roofing and property maintenance",
    specialization: "Guttering, fascias, soffits and roof repairs",
    experienceYears: 0,
    bio: "PGR Services provides professional guttering and roofing services in Dublin and surrounding areas.",
    philosophy: "Explain the work clearly, provide a free quotation and agree the scope before work begins.",
    education: [],
    memberships: [],
    specialties: ["Gutter replacement", "Fascia and soffit installation", "Roof repairs"],
    image: "/images/pgr-logo.png",
    warmImage: "/images/pgr-logo.png",
  },
];

const roofPhoto = "/images/pgr-project-07.jpg";
const homePhoto = "/images/pgr-project-10.jpg";
const servicePhotoPairs: Record<string, [string, string]> = {
  "dental-implants": ["/images/pgr-project-02.jpg", "/images/pgr-project-03.jpg"],
  "teeth-whitening": ["/images/roof-without-tiles.png", "/images/roof-with-tiles.png"],
  "braces": ["/images/pgr-project-08.jpg", "/images/pgr-project-09.jpg"],
  "cosmetic-dentistry": ["/images/pgr-project-04.jpg", "/images/pgr-project-11.jpg"],
};

const makeService = (
  slug: string,
  name: string,
  navLabel: string,
  tagline: string,
  description: string,
  problems: string[],
  benefits: string[],
  faqs: { question: string; answer: string }[],
): ServiceDetail => ({
  slug,
  name,
  navLabel,
  tagline,
  shortDescription: description,
  clinicalExplanation: description,
  whoNeeds: problems,
  benefits,
    indications: problems.map((condition) => ({ condition, explanation: `The area should be assessed to identify the source of the issue and the appropriate repair: ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: "Roof inspection", duration: "By arrangement", description: "The team checks the roof and notes visible areas of concern.", clinicalDetails: "The inspection helps define suitable work for your property." },
    { stepNumber: 2, title: "Quotation", duration: "After inspection", description: "You receive an explanation of the recommended work and materials.", clinicalDetails: "Timing and price are confirmed after assessing the site." },
    { stepNumber: 3, title: "Roofing work", duration: "By arrangement", description: "Approved repairs are completed in the identified area.", clinicalDetails: "Access and safety arrangements are agreed before work begins." },
    { stepNumber: 4, title: "Final review", duration: "At completion", description: "The team reviews the work and shares maintenance advice.", clinicalDetails: "The final scope depends on the inspection and agreed service." },
  ],
  recoveryTimeline: [
    { period: "Before work", expectedSensations: "The issue and scope are assessed on site.", careProtocol: "Share photos and describe when you notice the issue, if possible." },
    { period: "During the repair", expectedSensations: "Timing depends on access, materials and the extent of damage.", careProtocol: "Keep people and pets clear of the work area." },
    { period: "After completion", expectedSensations: "The team will explain what has been completed.", careProtocol: "Follow any roof maintenance advice provided." },
  ],
  costTransparency: {
    baseRange: "Free quotation after a roof assessment.",
    factors: ["Roof type and condition", "Roof access and height", "Materials and repair scope"],
    whatIsIncluded: ["Agreed scope before work starts", "Description of expected materials", "Advice about completed work"],
    note: "Price, timing and availability are confirmed directly with PGR Services.",
  },
  beforeAfterCase: {
    category: name,
    clinicalContext: "Roofing and repair project photos supplied by PGR Services.",
    beforeLabel: slug === "teeth-whitening" ? "Before roof tile replacement" : "Roofing project before work",
    afterLabel: slug === "teeth-whitening" ? "After roof tile replacement" : "Completed roofing project",
    beforeImage: servicePhotoPairs[slug]?.[0] ?? roofPhoto,
    afterImage: servicePhotoPairs[slug]?.[1] ?? homePhoto,
    timeframe: "Project photos",
  },
  assignedDentistId: "roofing-team",
  faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService(
    "dental-implants", "Roof Repairs and Leaks", "Roof Repairs",
    "Find and repair leaks to help protect your home.",
    "A ceiling stain or drip can have several causes. A roof assessment helps locate where water is entering and determine a suitable repair.",
    ["Leaks during rain", "Damp patches on ceilings", "Slipped or broken roof tiles"],
    ["Locate visible points where water may enter", "Check tiles, joints and finishes", "Agree the repair scope before work starts"],
    [{ question: "How do you find the source of a roof leak?", answer: "The source is not always directly above an indoor stain. A roof inspection helps identify areas that need attention." }],
  ),
  makeService(
    "root-canal", "Gutter and Flashing Repairs", "Gutter Repairs",
    "Inspect gutters, flashing and roof junctions where leaks can begin.",
    "Gutters and flashing channel water away from your roof and walls. Leaves, loose parts or worn seals can affect drainage and allow water ingress.",
    ["Standing water in gutters", "Loose flashing or worn seals", "Water running back near walls and eaves"],
    ["Check rainwater drainage", "Identify joints that need sealing", "Plan cleaning or repairs based on the condition found"],
    [{ question: "How often should I check my gutters?", answer: "It depends on nearby trees, rainfall and the property. Periodic inspections can help identify blockages and visible damage." }],
  ),
  makeService(
    "teeth-whitening", "Roof Tile Replacement", "Roof Tiles",
    "Replace broken, slipped or visibly worn roof tiles.",
    "Broken or displaced tiles can expose the layers beneath the roof. An assessment confirms whether individual tiles can be replaced or nearby areas also need attention.",
    ["Broken or missing tiles", "Tiles moved by rain or wind", "Visible wear in part of the roof"],
    ["Check tile type and fit", "Replace tiles included in the agreed scope", "Review the surrounding area"],
    [{ question: "Can you replace just a few roof tiles?", answer: "Often, yes. It depends on the tile type, the condition of nearby tiles and safe access to the roof." }],
  ),
  makeService(
    "dental-cleaning", "Roof Sealing and Waterproofing", "Roof Sealing",
    "Assess roof seals and waterproofing on compatible flat roofs and surfaces.",
    "Waterproofing depends on the surface, source of damp and site conditions. The team assesses the area before recommending materials and preparation.",
    ["Damp on flat roofs or roof decks", "Visible failures around seals", "Standing water on flat surfaces"],
    ["Assess the surface before recommending materials", "Identify joints and water entry points", "Agree preparation and work scope"],
    [{ question: "Will waterproofing fix every leak?", answer: "Not always. First, the source of water must be identified and the surface checked for compatibility with the proposed solution." }],
  ),
  makeService(
    "braces", "Roof Inspection and Maintenance", "Roof Inspections",
    "Check your roof for visible wear and maintenance needs.",
    "A roof inspection checks tiles, ridges, flashing, gutters and other accessible areas. The team records visible conditions and explains any recommended repairs.",
    ["Roofs without a recent inspection", "Signs of wear or loose parts", "Preparing for the rainy season"],
    ["Note areas that need attention", "Prioritise repairs based on the condition found", "Plan roof maintenance"],
    [{ question: "Does an inspection mean climbing onto the roof?", answer: "The assessment method depends on the property and safe access. The team agrees on a suitable approach in advance." }],
  ),
  makeService(
    "cosmetic-dentistry", "Storm Damage Roof Repairs", "Storm Damage",
    "Assess visible roof damage after heavy rain or strong winds.",
    "After a storm, slipped tiles, loose gutters or water ingress may need attention. An assessment helps document visible damage and agree next steps.",
    ["Tiles moved by strong winds", "Leaks that appeared after rain", "Loose gutters, flashing or roof finishes"],
    ["Identify visible signs of damage", "Prioritise areas where water may enter", "Get advice on recommended repairs"],
    [{ question: "What should I do if I notice a leak during rain?", answer: "Move items away from the water and collect it in a container if safe. Do not climb onto the roof or touch areas near electrical fittings; arrange an assessment." }],
  ),
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: "Immediate (0–2 hours)" | "Same-Day (2–6 hours)" | "Urgent (Within 24 hours)";
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: "active-leak", title: "Active roof leak", urgency: "Same-Day (2–6 hours)", symptoms: ["Water dripping through the ceiling", "Damp patch growing during rain"], immediateAction: ["Move people and belongings away from the wet area.", "If safe, collect the water. Keep away from electrical fittings and call an electrician if there is an electrical risk.", "Do not climb onto the roof during rain."], clinicTreatment: "Assess the water entry point and identify a suitable repair after inspection." },
  { id: "storm-damage", title: "Roof tiles displaced by strong winds", urgency: "Urgent (Within 24 hours)", symptoms: ["Tiles on the ground or out of place", "Exposed areas of the roof"], immediateAction: ["Stay clear of loose materials.", "Photograph damage from the ground if it is safe.", "Do not climb onto the roof or try to replace tiles yourself."], clinicTreatment: "Inspect the roof and assess affected materials, subject to safe access." },
  { id: "ceiling-water", title: "Water near the ceiling or electrical fittings", urgency: "Immediate (0–2 hours)", symptoms: ["Damp near lights or sockets", "Ceiling sagging or misshapen"], immediateAction: ["Move away from the area and do not touch wet equipment.", "If there is an electrical risk, contact a qualified electrician to isolate the power.", "Contact emergency services if there is immediate danger at the property."], clinicTreatment: "Property safety comes first; have the roof assessed once the area is safe." },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sinais-de-infiltracao-no-telhado",
    title: "Roof leak warning signs to look out for",
    category: "Roof leaks",
    readTime: "4 min read",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Ceiling stains, drips and peeling paint can indicate water ingress. Learn what to look for safely.",
    leadImage: "/images/pgr-project-03.jpg",
    relatedServiceSlug: "dental-implants",
    content: { intro: "A damp patch can appear some distance from where water entered. Notice when it appears and record what you can safely see from the ground.", sections: [
      { heading: "Signs to look for", body: "Drips, bubbling paint, a musty smell and slipped tiles are worth investigating. They do not, by themselves, show the cause or the extent of the repair." },
      { heading: "Stay safe while you wait", body: "Move furniture and electronics away from water. Avoid climbing onto the roof, especially when it is wet, and keep away from damp light fittings and wiring." },
    ], faqs: [{ question: "Does a ceiling stain show exactly where the leak is?", answer: "Not always. Water can travel along the roof structure before it reaches the ceiling, so the source needs to be assessed." }] },
  },
  {
    slug: "como-verificar-calhas-e-rufos",
    title: "Gutters and flashing: key maintenance checks",
    category: "Maintenance",
    readTime: "4 min read",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Blockages and worn seals can affect drainage. Find out when to arrange an inspection.",
    leadImage: "/images/pgr-project-01.jpg",
    relatedServiceSlug: "root-canal",
    content: { intro: "Gutters and flashing work with the roof to carry water away from walls and eaves. A check can help identify visible blockages or wear.", sections: [
      { heading: "Check how water drains", body: "Overflowing gutters, standing water or damp marks nearby may need attention. Leaves and debris can also block the flow of water." },
      { heading: "Put safety first", body: "Do not try to clean or repair high areas without suitable equipment and safe access. Arrange a professional assessment instead." },
    ] },
  },
  {
    slug: "inspecao-do-telhado-apos-temporal",
    title: "How to check your roof after a storm",
    category: "Storm damage",
    readTime: "5 min read",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Learn which signs you can record from the ground and when to avoid accessing the roof.",
    leadImage: "/images/pgr-project-06.jpg",
    relatedServiceSlug: "cosmetic-dentistry",
    content: { intro: "After heavy rain or wind, start by looking at your home from a safe area. Do not climb onto the roof to check loose parts.", sections: [
      { heading: "Record visible damage", body: "From the ground, photograph fallen tiles, displaced gutters or new stains. Note when water entered and which rooms were affected." },
      { heading: "When to get help", body: "Active leaks, exposed roof areas or water near electrical fittings need attention. Stay clear of unsafe areas and contact a roofing professional." },
    ] },
  },
  {
    slug: "quando-substituir-telhas",
    title: "When individual roof tile replacement can help",
    category: "Roof tiles",
    readTime: "4 min read",
    publishDate: "2026-10-08",
    lastUpdated: "2026-10-08",
    authorId: "our-doctor",
    excerpt: "Broken or displaced tiles can be a sign to check the roof and surrounding tiles.",
    leadImage: "/images/pgr-project-08.jpg",
    relatedServiceSlug: "teeth-whitening",
    content: { intro: "Not all damage means the entire roof needs replacing. An assessment considers the tile type, condition of nearby tiles and the cause of movement.", sections: [
      { heading: "Broken or displaced tiles", body: "Tiles on the ground, visible gaps or exposed underlayers are signs a qualified team should inspect from safe access." },
      { heading: "What to consider", body: "Compatible tile availability, the roof structure and safe access all affect repair scope and timing." },
    ] },
  },
];
