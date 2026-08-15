function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const INITIAL_NEWS_COUNT = 6;
const FEATURED_TEXT_TOGGLE_LENGTH = 220;
const PAGE_SECTION_NAV = {
  home: [
    { id: "about", label: "About" },
    { id: "research-interests", label: "Research Interests" },
    { id: "featured-research", label: "Featured Research" },
    { id: "news", label: "News" },
    { id: "media-coverage", label: "Media Coverage" },
  ],
  bio: [
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
    { id: "honors", label: "Honors" },
    { id: "industry", label: "Industry" },
    { id: "teaching", label: "Teaching" },
    { id: "professional-activities", label: "Professional Activities" },
    { id: "community-service", label: "Community Service" },
  ],
  research: [
    { id: "publications", label: "Publications" },
    { id: "projects", label: "Projects" },
    { id: "patents", label: "Patents" },
  ],
  media: [
    { id: "videos", label: "Videos" },
  ],
};

function isExternalLink(href) {
  return /^https?:\/\//.test(href);
}

function getLinkIcon(label) {
  const normalized = label.trim().toLowerCase();
  const iconMap = {
    cv: "file",
    "google scholar": "scholar",
    linkedin: "linkedin",
    github: "github",
    pdf: "file",
    project: "project",
    code: "code",
    dataset: "dataset",
    demo: "demo",
    slides: "slides",
    "open video": "demo",
  };
  const icon = iconMap[normalized] || "link";
  const icons = {
    file: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>
        <path d="M14 3v5h5"/>
        <path d="M9 13h6"/>
        <path d="M9 17h6"/>
      </svg>
    `,
    scholar: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 3 9l9 5 9-5-9-5Z"/>
        <path d="M7 11v4.5c0 1.7 2.2 3.5 5 3.5s5-1.8 5-3.5V11"/>
      </svg>
    `,
    linkedin: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3"/>
        <path d="M8 10v6"/>
        <path d="M8 8h.01"/>
        <path d="M12 16v-3.2a1.8 1.8 0 1 1 3.6 0V16"/>
        <path d="M12 11h0v5"/>
      </svg>
    `,
    github: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 18c-4 1.2-4-2-6-2"/>
        <path d="M15 18v-3a2.6 2.6 0 0 0-.7-2c2.3-.3 4.7-1.1 4.7-5A3.9 3.9 0 0 0 18 5.3 3.6 3.6 0 0 0 17.9 3s-.8-.2-2.9 1.1a10 10 0 0 0-6 0C6.9 2.8 6.1 3 6.1 3A3.6 3.6 0 0 0 6 5.3 3.9 3.9 0 0 0 5 8c0 3.9 2.4 4.7 4.7 5A2.6 2.6 0 0 0 9 15v3"/>
      </svg>
    `,
    project: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h7l2 2h9v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/>
        <path d="M3 7a2 2 0 0 1 2-2h5l2 2"/>
      </svg>
    `,
    code: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 9-4 3 4 3"/>
        <path d="m16 9 4 3-4 3"/>
        <path d="m14 5-4 14"/>
      </svg>
    `,
    dataset: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3"/>
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/>
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>
      </svg>
    `,
    demo: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9"/>
        <path d="m10 8 6 4-6 4z"/>
      </svg>
    `,
    slides: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16v10H4z"/>
        <path d="M8 19h8"/>
        <path d="M12 15v4"/>
      </svg>
    `,
    link: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.1 0l2.1-2.1a5 5 0 0 0-7.1-7.1L10.9 5"/>
        <path d="M14 11a5 5 0 0 0-7.1 0l-2.1 2.1a5 5 0 0 0 7.1 7.1L13.1 19"/>
      </svg>
    `,
  };
  return icons[icon];
}

function renderLink(link, className = "text-link") {
  const target = isExternalLink(link.href) ? ' target="_blank" rel="noreferrer"' : "";
  return `
    <a class="${className}" href="${link.href}"${target}>
      <span class="link-content">
        <span class="link-icon">${getLinkIcon(link.label)}</span>
        <span>${link.label}</span>
      </span>
    </a>
  `;
}

function renderLinks(links, className = "action-link") {
  if (!links || links.length === 0) {
    return "";
  }
  return `<div class="action-row">${links.map((link) => renderLink(link, className)).join("")}</div>`;
}

function renderPeople(people) {
  return people
    .map((person) => {
      const name = person.me
        ? `<span class="person person--me">${person.name}</span>`
        : `<span class="person">${person.name}</span>`;
      return name;
    })
    .join(", ");
}

function renderSectionHeader(title) {
  return `
    <div class="section-heading">
      <h2>
        <button class="section-heading__toggle" type="button" aria-expanded="true">
          <span>${title}</span>
          <svg class="section-heading__icon" viewBox="0 0 20 20" aria-hidden="true">
            <path d="m5 7.5 5 5 5-5"/>
          </svg>
        </button>
      </h2>
    </div>
  `;
}

function renderMasthead() {
  const { site } = window.SITE_DATA;
  return `
    <header class="masthead">
      <div class="masthead__profile">
        <div class="masthead__photo">
          <img src="${site.photo.src}" alt="${site.photo.alt}">
        </div>
        <div class="masthead__content">
          <h1>${site.title}</h1>
          <div class="identity-grid">
            <div>
              <span class="meta-label">Role</span>
              <p>${site.role}</p>
            </div>
            <div>
              <span class="meta-label">Department</span>
              <p><a href="${site.department.href}" target="_blank" rel="noreferrer">${site.department.label}</a></p>
            </div>
            <div>
              <span class="meta-label">Institution</span>
              <p><a href="${site.institution.href}" target="_blank" rel="noreferrer">${site.institution.label}</a></p>
            </div>
            <div>
              <span class="meta-label">Location</span>
              <p>${site.location}</p>
            </div>
            <div>
              <span class="meta-label">Pronunciation</span>
              <p class="pronunciation">${site.pronunciation}</p>
            </div>
            <div>
              <span class="meta-label">Email</span>
              <p><a href="mailto:${site.email}">${site.email}</a></p>
            </div>
          </div>
          <div class="pill-row">
            ${site.links.map((link) => renderLink(link, "pill-link")).join("")}
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderNav(page) {
  const nav = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "bio", label: "Bio", href: "bio.html" },
    { key: "research", label: "Research", href: "research.html" },
    { key: "media", label: "Media", href: "media.html" },
  ];

  return `
    <nav class="site-nav" aria-label="Primary">
      ${nav
      .map(
        (item) => `
            <a class="site-nav__link${item.key === page ? " is-active" : ""}" href="${item.href}">
              ${item.label}
            </a>
          `,
      )
      .join("")}
    </nav>
  `;
}

function renderFooter() {
  const { site } = window.SITE_DATA;
  return `
    <footer class="site-footer">
      <div class="logo-row">
        ${site.affiliations
      .map(
        (item) => `
              <a href="${item.href}" target="_blank" rel="noreferrer">
                <img src="${item.src}" alt="${item.alt}">
              </a>
            `,
      )
      .join("")}
      </div>
      <div class="site-footer__meta">
        <p>&copy; ${site.footerYear} ${site.title}</p>
        <p>Last updated: ${site.lastUpdated}</p>
      </div>
    </footer>
  `;
}

function renderSectionNav(page) {
  const sections = PAGE_SECTION_NAV[page];
  if (!sections || sections.length === 0) {
    return "";
  }

  return `
    <div class="section-nav-panel">
      <p class="section-nav-panel__title">Navigation</p>
      <nav class="section-nav" aria-label="Section navigation">
        <a class="section-nav__link section-nav__link--top" href="#page-top" aria-label="Back to top">
          ↑
        </a>
        ${sections
          .map(
            (section) => `
              <a class="section-nav__link" href="#${section.id}">
                ${section.label}
              </a>
            `,
          )
          .join("")}
      </nav>
    </div>
  `;
}

function renderFeaturedResearch() {
  const { home, publications } = window.SITE_DATA;
  const featured = home.featuredResearch
    .map((slug) => publications.find((item) => item.slug === slug))
    .filter(Boolean);

  return `
    <section class="content-section" id="featured-research">
      ${renderSectionHeader("Featured Research")}
      <div class="feature-grid">
        ${featured
          .map((item) => {
            const needsToggle = item.abstract.length > FEATURED_TEXT_TOGGLE_LENGTH;
            return `
              <article class="feature-card">
                <img src="${item.image}" alt="${item.imageAlt}">
                <div class="feature-card__body">
                  <p class="feature-card__meta">${item.venueShort}</p>
                  <h3><a href="research.html#${item.slug}">${item.title}</a></h3>
                  <p class="feature-card__text${needsToggle ? " is-collapsed" : ""}"${needsToggle ? ' data-feature-text="true"' : ""}>${item.abstract}</p>
                  ${
                    needsToggle
                      ? '<button class="feature-card__toggle" type="button" aria-expanded="false">Show more</button>'
                      : ""
                  }
                  ${renderLinks(item.links.slice(0, 3))}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderTimelineNews() {
  const { news } = window.SITE_DATA;
  const hasHiddenNews = news.length > INITIAL_NEWS_COUNT;
  return `
    <section class="content-section" id="news">
      ${renderSectionHeader("News")}
      <div class="timeline">
        ${news
          .map(
            (item, index) => `
              <article class="timeline-item${index >= INITIAL_NEWS_COUNT ? " is-collapsed" : ""}"${index >= INITIAL_NEWS_COUNT ? ' data-news-extra="true"' : ""}>
                <p class="timeline-item__date">${item.date}</p>
                <div class="timeline-item__body">${item.html}</div>
              </article>
            `,
          )
          .join("")}
      </div>
      ${
        hasHiddenNews
          ? `<button class="timeline-toggle" type="button" aria-expanded="false">Show more</button>`
          : ""
      }
    </section>
  `;
}

function renderMediaCoverage() {
  const { home } = window.SITE_DATA;
  return `
    <section class="content-section" id="media-coverage">
      ${renderSectionHeader("Media Coverage")}
      <div class="press-row">
        ${home.mediaCoverage
      .map(
        (item) => `
              <a class="press-card" href="${item.href}" target="_blank" rel="noreferrer">
                <img src="${item.src}" alt="${item.alt}">
                <span class="press-card__caption">${item.caption}</span>
              </a>
            `,
      )
      .join("")}
      </div>
    </section>
  `;
}

function renderRichTextSection(id, title, paragraphs) {
  return `
    <section class="content-section" id="${id}">
      ${renderSectionHeader(title)}
      <div class="prose">
        ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>
  `;
}

function renderPublicationCard(item) {
  return `
    <article class="record-card" id="${item.slug}">
      <div class="record-card__media">
        <img src="${item.image}" alt="${item.imageAlt}">
      </div>
      <div class="record-card__body">
        <p class="record-card__meta">${item.venueShort} <span>${item.venueLong}</span></p>
        <h3>${item.title}</h3>
        <p class="record-card__authors">${renderPeople(item.authors)}</p>
        ${item.highlights.length > 0
      ? `<div class="badge-row">${item.highlights
        .map((highlight) => `<span class="badge">${highlight}</span>`)
        .join("")}</div>`
      : ""
    }
        ${renderLinks(item.links)}
        <div class="details-stack">
          <details>
            <summary>Abstract</summary>
            <p>${item.abstract}</p>
          </details>
          <details>
            <summary>BibTeX</summary>
            <pre>${escapeHtml(item.bibtex)}</pre>
          </details>
        </div>
      </div>
    </article>
  `;
}

function renderProjectCard(item) {
  return `
    <article class="record-card record-card--project" id="${item.slug}">
      <div class="record-card__media">
        <img src="${item.image}" alt="${item.imageAlt}">
      </div>
      <div class="record-card__body">
        <p class="record-card__meta">${item.dates}</p>
        <h3>${item.title}</h3>
        <p class="record-card__subline">${item.affiliation}</p>
        <p class="record-card__subline record-card__subline--meta">
            <span><span class="meta-label">Role</span> ${item.role}</span>
            ${item.advisor ? `<span><span class="meta-label">Supervisor</span> ${item.advisor}</span>` : ""}
        </p>
        <p>${item.description}</p>
        ${renderLinks(item.links)}
      </div>
    </article>
  `;
}

function renderPatentCard(item) {
  return `
    <li class="patent-item" id="${item.id}">
      <h3>${item.title}</h3>
      <p class="record-card__authors">${renderPeople(item.inventors)}</p>
      <p class="record-card__meta">${item.note}</p>
    </li>
  `;
}

function renderBioList(id, title, items) {
  return `
    <section class="content-section" id="${id}">
      ${renderSectionHeader(title)}
      <ul class="clean-list">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderBioBlocks(id, title, items) {
  return `
    <section class="content-section" id="${id}">
      ${renderSectionHeader(title)}
      <div class="stack-grid">
        ${items
      .map(
        (item) => `
              <article class="stack-card">
                <h3>${item.course || item.title}</h3>
	                ${item.role
	            ? `
	                  <p class="stack-card__meta">${item.role}, ${item.term}</p>
	                  <p class="record-card__subline">${item.institution}</p>
	                `
	            : item.meta
	              ? `<p class="stack-card__meta">${item.meta}</p>`
	              : ""
	          }
                ${item.items
            ? `<ul class="clean-list">${item.items.map((entry) => `<li>${entry}</li>`).join("")}</ul>`
            : ""
          }
              </article>
            `,
      )
      .join("")}
      </div>
    </section>
  `;
}

function renderResearchPage() {
  const { publications, projects, patents } = window.SITE_DATA;
  return `
    <section class="content-section" id="publications">
      ${renderSectionHeader("Publications")}
      <div class="record-list">
        ${publications.map((item) => renderPublicationCard(item)).join("")}
      </div>
    </section>
    <section class="content-section" id="projects">
      ${renderSectionHeader("Projects")}
      <div class="record-list">
        ${projects.map((item) => renderProjectCard(item)).join("")}
      </div>
    </section>
    <section class="content-section" id="patents">
      ${renderSectionHeader("Patents")}
      <ol class="patent-list">
        ${patents.map((item) => renderPatentCard(item)).join("")}
      </ol>
    </section>
  `;
}

function renderMediaPage() {
  const { media } = window.SITE_DATA;
  return `
    <section class="content-section" id="videos">
      ${renderSectionHeader("Videos")}
      <div class="media-grid media-grid--video">
        ${media.videos
      .map(
        (item) => `
              <figure class="media-card">
                <div class="media-card__frame">
                  <iframe
                    src="${item.embed}"
                    title="${item.title}"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <figcaption>
                  <strong>${item.title}</strong>
                  <p>${item.caption}</p>
                  <a class="text-link" href="${item.href}" target="_blank" rel="noreferrer">Open video</a>
                </figcaption>
              </figure>
            `,
      )
      .join("")}
      </div>
    </section>
  `;
}

function renderHomePage() {
  const { home } = window.SITE_DATA;
  return `
    ${renderRichTextSection("about", "About", home.about)}
    ${renderRichTextSection("research-interests", "Research Interests", home.research)}
    ${renderFeaturedResearch()}
    ${renderTimelineNews()}
    ${renderMediaCoverage()}
  `;
}

function renderBioPage() {
  const { bio } = window.SITE_DATA;
  return `
    ${renderBioList("education", "Education", bio.education)}
    ${renderBioList("awards", "Awards", bio.awards)}
    ${renderBioList("honors", "Honors", bio.honors)}
    ${renderBioBlocks("industry", "Industry", bio.industry)}
    ${renderBioBlocks("teaching", "Teaching", bio.teaching)}
    ${renderBioBlocks("professional-activities", "Professional Activities", bio.professional)}
    ${renderBioBlocks("community-service", "Community Service", bio.service)}
  `;
}

function renderPageContent(page) {
  if (page === "bio") {
    return renderBioPage();
  }
  if (page === "research") {
    return renderResearchPage();
  }
  if (page === "media") {
    return renderMediaPage();
  }
  return renderHomePage();
}

function renderApp() {
  const page = document.body.dataset.page || "home";
  const root = document.getElementById("app");
  const sectionNav = renderSectionNav(page);

  root.innerHTML = `
    <div id="page-top"></div>
    <div class="site-shell">
      ${renderMasthead()}
      ${renderNav(page)}
      ${sectionNav}
      <main class="page-content">
        ${renderPageContent(page)}
      </main>
      ${renderFooter()}
    </div>
  `;

  root.querySelectorAll(".section-heading__toggle").forEach((sectionToggle) => {
    sectionToggle.addEventListener("click", () => {
      const section = sectionToggle.closest(".content-section");
      const isExpanded = sectionToggle.getAttribute("aria-expanded") === "true";

      if (!section) {
        return;
      }

      Array.from(section.children).forEach((child) => {
        if (!child.classList.contains("section-heading")) {
          child.hidden = isExpanded;
        }
      });

      section.classList.toggle("is-collapsed", isExpanded);
      sectionToggle.setAttribute("aria-expanded", String(!isExpanded));
    });
  });

  const toggle = root.querySelector(".timeline-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const extraItems = root.querySelectorAll(".timeline-item[data-news-extra='true']");
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";

      extraItems.forEach((item) => {
        item.classList.toggle("is-collapsed", isExpanded);
      });

      toggle.setAttribute("aria-expanded", String(!isExpanded));
      toggle.textContent = isExpanded ? "Show more" : "Show less";
    });
  }

  root.querySelectorAll(".feature-card__toggle").forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      const text = toggleButton.parentElement.querySelector(".feature-card__text[data-feature-text='true']");
      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

      if (!text) {
        return;
      }

      text.classList.toggle("is-collapsed", isExpanded);
      toggleButton.setAttribute("aria-expanded", String(!isExpanded));
      toggleButton.textContent = isExpanded ? "Show more" : "Show less";
    });
  });
}

document.addEventListener("DOMContentLoaded", renderApp);
