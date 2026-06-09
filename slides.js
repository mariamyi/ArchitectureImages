/*
 * slides.js — single source of truth for the slide deck.
 *
 * Each slide object:
 *   id          unique string id
 *   group       neighborhood group label (used for section dividers + counter)
 *   semester    the studio semester tag(s) the image was used in
 *   title       short slide title
 *   src         URL-encoded path to the image (spaces -> %20, plus -> %2B)
 *   alt         concise factual alt text for screen readers (<= ~125 chars)
 *   description longer, lively description for sighted readers
 *
 * To add or reorder slides, edit only this file.
 */
window.SLIDES = [
  // ---- Group 1: Little Italy / Near West Side (F19+S20) ----
  {
    id: "little-italy-site",
    group: "Little Italy / Near West Side",
    semester: "F19 + S20",
    title: "Site & Adjacent Neighborhoods",
    src: "F19%2BS20%20site%20%2B%20adjacent%20neighborhoods.jpg",
    alt: "Color-coded satellite map of Chicago's Near West Side; Little Italy highlighted blue between the Loop, Pilsen, and the Medical District.",
    description:
      "A satellite quilt of the Near West Side with Little Italy glowing blue at 1491 S Blue Island Ave, the Loop dressed in green to the east, and Pilsen in yellow to the south. Taylor St, 18th St, the Illinois Medical District, and the Shedd Aquarium anchor a site hemmed in by some of Chicago's most storied edges."
  },
  {
    id: "little-italy-character",
    group: "Little Italy / Near West Side",
    semester: "F19 + S20",
    title: "Neighborhood Character",
    src: "F19%2BS20%20neighborhood%20character.jpg",
    alt: "Collage of Little Italy: Mario's Italian Lemonade stand, Rosebud restaurant, a Taylor St Festa logo, and a UIC campus sign.",
    description:
      "Four snapshots of Taylor Street's DNA: the kelly-green Mario's Italian Lemonade stand (slinging lupini and snowballs since 1954), the crimson Rosebud (est. 1975), the red-white-and-green Festa logo, and the UIC monument marking the university that reshaped the neighborhood. Flavor, signage, and town-gown tension in one frame."
  },

  // ---- Group 2: Pilsen / Lower West Side (S22) ----
  {
    id: "pilsen-parks",
    group: "Pilsen / Lower West Side",
    semester: "S22",
    title: "Adjacent Parks",
    src: "S22%20adjacent%20parks.jpg",
    alt: "Grayscale aerial map of Pilsen, Little Village, and Bridgeport with parks and cultural sites pinned in color.",
    description:
      "A muted-silver aerial where the green is reserved for what matters: Mural Park, El Paseo Community Garden, ChiTown Futbol, Mana Contemporary, and the wonderfully named Zion Evangelical Lutheran Ghost Church Memorial Park. Pilsen sits center stage, flanked by Little Village and Bridgeport — a map of where the neighborhood actually breathes."
  },
  {
    id: "pilsen-view-16th",
    group: "Pilsen / Lower West Side",
    semester: "S22",
    title: "View from 16th",
    src: "S22%20view%20from%2016th.jpg",
    alt: "Street-level winter photo of a fenced, snow-patched vacant lot with Chicago row houses and the downtown skyline behind.",
    description:
      "The honest before-photo: a chain-link fence, frostbitten weeds, and a muddy vacant lot — with Pilsen's two-flats, a lone billboard, a painted mural, and the distant downtown skyline rising over it all. Every great site analysis starts with a place nobody photographs on purpose."
  },
  {
    id: "pilsen-programming",
    group: "Pilsen / Lower West Side",
    semester: "S22",
    title: "Community Center Programming",
    src: "S22%20community%20center%20programming%2C%20from%20student%20presentation.jpg",
    alt: "Concept diagram on a diagonal gradient showing a program spectrum: Education, Interaction, Activism, Activity, Entertainment.",
    description:
      "A student concept slide that climbs a purple ramp from Education (after-school programs, language classes) up through Interaction, Activism (protest planning!), Activity (sports clubs, gardening), to Entertainment (art events, performances). Collaged figures — protesters, soccer players, dancers — act out each rung of community life."
  },

  // ---- Group 3: South Side — Stony Island & Jackson Park (F22+S23) ----
  {
    id: "south-side-typologies",
    group: "South Side — Stony Island & Jackson Park",
    semester: "F22 + S23",
    title: "Surrounding Typologies & the Stony Island Arts Bank",
    src: "F22%2BS23%20surrounding%20neighborhood%20typologies%2BStony%20Island%20Arts%20Bank.jpg",
    alt: "Three photos: brick-and-greystone two-flats, Theaster Gates' neoclassical Stony Island Arts Bank, and an Obama Presidential Center rendering.",
    description:
      "A South Side trio in conversation: the everyday brick-and-greystone two-flats that define the blocks, Theaster Gates' resurrected Stony Island Arts Bank standing proud with its columns, and the crystalline rendering of the Obama Presidential Center. Past, rescued past, and speculative future on one slide."
  },

  // ---- Group 4: Chicago Neighborhood Grid (F23+S24) ----
  {
    id: "grid-aerial",
    group: "Chicago Neighborhood Grid",
    semester: "F23 + S24",
    title: "Aerial with Site Outline",
    src: "F23%2BS24%20aerial%20with%20site%20outline.jpg",
    alt: "Oblique aerial photo of a dense Chicago residential grid cut by a wide diagonal arterial street.",
    description:
      "A bird's-eye sweep over the classic Chicago grid — tidy rows of houses, alleys, and rooftops — sliced by a broad diagonal arterial that refuses to obey the orthogonal street plan. The diagonal is where the action (and the site) lives."
  },

  // ---- Group 5: Belmont Cragin / Northwest Side (F25+S26) ----
  {
    id: "belmont-cragin-aerial",
    group: "Belmont Cragin / Northwest Side",
    semester: "F25 + S26",
    title: "Aerial — 3001 N Cicero Avenue",
    src: "F25%2BS26%20aerial-3001%20N%20Cicero%20Avenue.jpg",
    alt: "Top-down satellite view with a red-outlined parcel at N Cicero Ave and W Wellington Ave, lot dimensions labeled.",
    description:
      "Surveyor mode: a top-down aerial with the site boldly outlined in red at 3001 N Cicero, dimensions ticked off (123.50 by 199.27 ft) at the corner of Cicero and Wellington. To the right, the relentless pinstripe of Northwest Side single-family lots and their leafy backyards."
  },
  {
    id: "belmont-cragin-institutions",
    group: "Belmont Cragin / Northwest Side",
    semester: "F25 + S26",
    title: "The Institutions That Hold the Neighborhood",
    src: "F25%2BS26%20neighborhood%20institutions%2C%20slide%20from%20student%20presentation.jpg",
    alt: "Orange student slide titled 'The Institutions That Hold the Neighborhood,' with six categories of Belmont Cragin civic anchors.",
    description:
      "A confident terracotta-orange slide cataloging what holds Belmont Cragin together: Faith Institutions (St. Ferdinand, 1920), Schools, Parks (Riis, Hanson, Cragin), Libraries (Portage-Cragin, 1927), Community Orgs, and a Cultural Economy of 50+ locally owned restaurants across 12+ nationalities. The neighborhood as a network, not a map."
  }
];
