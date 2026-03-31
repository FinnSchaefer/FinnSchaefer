const updates = [
  {
    date: "2026",
    title: "PULSER accepted to IEEE HOST 2026",
    summary:
      "PULSER asks what happens when a system keeps trusting subtly manipulated LiDAR input and lets that bad data shape its view of the environment.",
    label: "IEEE HOST 2026",
  },
  {
    date: "2026",
    title: "New article: Your curve has an expiration date",
    summary:
      "A new article on why quantum breaks ECC and ECDSA, why that is serious, and why migration matters more than panic.",
    label: "Post-quantum",
  },
  {
    date: "2025",
    title: "First place in the National Transportation Cybersecurity Competition",
    summary:
      "NTCC pulled across anomaly detection, exploitation, and web problems, but the vehicle-data work mattered most because it was about system behavior, not just bugs.",
    label: "NTCC result",
  },
];

const posts = [
  {
    slug: "pulser-ieee-host-2026",
    meta: "Publication • IEEE HOST 2026",
    title: "PULSER at IEEE HOST 2026",
    excerpt:
      "A high-level look at PULSER and the broader security problem behind it: systems that keep trusting believable sensor data they should not.",
    href: "publications/pulser-at-ieee-host-2026.html",
    linkLabel: "Open publication",
  },
];

const projects = [
  {
    meta: "Write-up",
    title: "NTCC first-place finish",
    description:
      "A write-up on the NTCC work behind the result, especially the anomaly-detection problems where the system's view of the environment started to drift.",
    tags: ["NTCC", "Transportation", "Machine Learning"],
    href: "work/ntcc-first-place.html",
    linkLabel: "Open page",
  },
  {
    meta: "Article",
    title: "Your curve has an expiration date",
    description:
      "An article on why quantum really does break ECC and ECDSA, why that is not the end of public-key crypto, and what has to replace it.",
    tags: ["Post-Quantum", "ECC", "ECDSA"],
    href: "work/your-curve-has-an-expiration-date.html",
    linkLabel: "Open page",
  },
];

const updatesList = document.querySelector("#updates-list");
const postsList = document.querySelector("#posts-list");
const projectsList = document.querySelector("#projects-list");
const year = document.querySelector("#year");
function renderUpdates() {
  if (!updatesList) {
    return;
  }

  updatesList.innerHTML = updates
    .map(
      (update) => `
        <article class="update-item" data-reveal>
          <p class="update-date">${update.date}</p>
          <div class="update-copy">
            <span class="update-label">${update.label}</span>
            <h3>${update.title}</h3>
            <p>${update.summary}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPosts() {
  if (!postsList) {
    return;
  }

  postsList.innerHTML = posts
    .map(
      (post) => `
        <a class="publication-item" href="${post.href}" data-reveal aria-label="${post.linkLabel}: ${post.title}">
          <div class="publication-copy">
            <p class="post-meta">${post.meta}</p>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </div>
          <div class="publication-open">
            <span>${post.linkLabel}</span>
          </div>
        </a>
      `
    )
    .join("");
}

function renderProjects() {
  if (!projectsList) {
    return;
  }

  projectsList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card project-card-link" data-href="${project.href}" tabindex="0" role="link" aria-label="${project.linkLabel}: ${project.title}" data-reveal>
          <div>
            <p class="project-meta">${project.meta}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
          <div class="project-footer">
            <div class="project-tags">
              ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <a class="project-link" href="${project.href}">
              ${project.linkLabel}
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function setupProjectCards() {
  if (!projectsList) {
    return;
  }

  function openProjectLink(target) {
    const href = target?.getAttribute("data-href");

    if (!href) {
      return;
    }

    window.location.href = href;
  }

  projectsList.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const link = target.closest("a");

    if (link) {
      return;
    }

    const card = target.closest("[data-href]");

    if (!card) {
      return;
    }

    openProjectLink(card);
  });

  projectsList.addEventListener("keydown", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest("[data-href]");

    if (!card) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectLink(card);
    }
  });
}

function setupReveal() {
  const items = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -32px 0px",
    }
  );

  items.forEach((item) => observer.observe(item));
}

renderUpdates();
renderPosts();
renderProjects();
setupProjectCards();
setupReveal();

if (year) {
  year.textContent = new Date().getFullYear();
}
