const updates = [
  {
    date: "2026",
    title: "IEEE HOST 2026 accepted my capstone research on ROS2 SLAM security",
    summary:
      "Research on vulnerabilities in ROS2-based SLAM systems, including how LiDAR perception can be manipulated while remaining statistically and temporally consistent.",
    label: "IEEE HOST 2026",
  },
  {
    date: "2025",
    title: "First-place finish in the National Transportation Cybersecurity Competition",
    summary:
      "Won George Mason's top finish in a national transportation cybersecurity competition that covered challenges such as anomaly detection, application security, and traffic-system exploitation.",
    label: "NTCC result",
  },
  {
    date: "Focus",
    title: "Current focus: autonomous-system security and practical defensive tooling",
    summary:
      "Current work centers on cyber-physical security, practical automation, and publishing research notes that stay tied to real technical problems.",
    label: "Current direction",
  },
];

const posts = [
  {
    slug: "perception-is-an-attack-surface",
    meta: "Research • IEEE HOST 2026",
    title: "When perception becomes the attack surface",
    excerpt:
      "My recent research focuses on how ROS2-based SLAM systems can be influenced through LiDAR manipulation that stays consistent with expected sensor behavior.",
    tags: ["ROS2", "SLAM", "LiDAR"],
    body: [
      "My senior capstone research examines security vulnerabilities in ROS2-based SLAM systems. The work explores how LiDAR data can be manipulated in ways that remain both statistically and temporally consistent, which makes the attack surface more subtle than a simple disruption or denial approach.",
      "What matters here is not only the sensor itself, but the broader lesson. If an attacker can bias perception while staying close to normal operating expectations, that effect can propagate into estimation, mapping, and navigation in ways that are difficult to detect early.",
      "That has clear implications for autonomous and cyber-physical systems. In real environments, an adversary does not always need to break a platform outright. Introducing structured, believable perception error can be enough to misguide the system without obvious alarms.",
    ],
  },
  {
    slug: "winning-by-working-clearly",
    meta: "Competition • George Mason",
    title: "Winning under constraints in transportation cybersecurity",
    excerpt:
      "The NTCC result reinforced something I care about: strong security work comes from clear reasoning, disciplined workflow, and the ability to execute under time pressure.",
    tags: ["Competition", "Transportation", "Detection"],
    body: [
      "George Mason's transportation cybersecurity competition work highlighted the value of practical problem solving over polished theory. The challenges demanded a mix of offensive awareness, defensive reasoning, and enough composure to keep moving when the path was not obvious.",
      "One part that stood out was vehicle trajectory anomaly detection. It aligned well with my interest in machine learning because it gave the models a concrete operational purpose instead of treating them as an abstract exercise.",
      "That kind of work is a good fit for how I like to build: take the technical idea, pressure-test it against a real scenario, and only keep the parts that remain useful after contact with constraints.",
    ],
  },
  {
    slug: "writing-to-make-work-reusable",
    meta: "Notes • Workflow",
    title: "Writing technical notes that stay useful",
    excerpt:
      "Useful writing should preserve the constraints, decisions, and failure points that make technical work reusable later.",
    tags: ["Notes", "Writing", "Workflow"],
    body: [
      "A lot of technical work becomes hard to reuse because the useful reasoning never gets captured. The outcome is saved, but the assumptions, tradeoffs, and failure points disappear too quickly.",
      "Good notes make that work portable. They preserve the context around a result so the next experiment starts further ahead instead of from scratch.",
      "That matters in security especially. Clear documentation turns isolated wins into repeatable systems instead of one-off efforts that have to be rediscovered later.",
    ],
  },
];

const projects = [
  {
    meta: "Research",
    title: "ROS2 SLAM vulnerability research",
    description:
      "Senior capstone work on LiDAR and perception manipulation in ROS2-based SLAM systems, with direct relevance to autonomous and cyber-physical platforms.",
    tags: ["Cyber-Physical", "Autonomy", "Sensors"],
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7442217488412635136/",
    linkLabel: "Research announcement",
  },
  {
    meta: "Recognition",
    title: "National Transportation Cybersecurity Competition",
    description:
      "First-place finish at George Mason's top showing in the national competition, built around practical transportation and anomaly-detection challenges.",
    tags: ["NTCC", "GMU", "Machine Learning"],
    href: "https://www.gmu.edu/news/2025-03/cyber-sweep-george-mason-students-take-top-three-spots-national-transportation",
    linkLabel: "GMU coverage",
  },
  {
    meta: "Tooling",
    title: "Security automation and defensive tooling",
    description:
      "Smaller tools and repeatable workflows built to reduce manual security work while keeping the logic visible and the outputs inspectable.",
    tags: ["Automation", "Python", "Security"],
    href: "https://github.com/FinnSchaefer",
    linkLabel: "Explore work",
  },
];

const updatesList = document.querySelector("#updates-list");
const postsList = document.querySelector("#posts-list");
const projectsList = document.querySelector("#projects-list");
const year = document.querySelector("#year");
const dialog = document.querySelector("#post-dialog");
const dialogClose = document.querySelector("#dialog-close");
const dialogMeta = document.querySelector("#dialog-meta");
const dialogTitle = document.querySelector("#dialog-title");
const dialogBody = document.querySelector("#dialog-body");

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
        <article class="post-card" data-post="${post.slug}" tabindex="0" role="button" aria-label="Read article: ${post.title}" data-reveal>
          <div>
            <p class="post-meta">${post.meta}</p>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </div>
          <div class="post-footer">
            <div class="post-tags">
              ${post.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <button class="post-link" data-post="${post.slug}" type="button">Read article</button>
          </div>
        </article>
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
            <a class="project-link" href="${project.href}" target="_blank" rel="noreferrer">
              ${project.linkLabel}
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function openPost(slug) {
  const post = posts.find((entry) => entry.slug === slug);

  if (!post || !dialog || !dialogMeta || !dialogTitle || !dialogBody) {
    return;
  }

  dialogMeta.textContent = post.meta;
  dialogTitle.textContent = post.title;
  dialogBody.innerHTML = post.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  dialog.showModal();
}

function setupDialog() {
  if (!dialog || !postsList) {
    return;
  }

  postsList.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest("[data-post]");

    if (!button) {
      return;
    }

    openPost(button.getAttribute("data-post"));
  });

  postsList.addEventListener("keydown", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const card = target.closest("[data-post]");

    if (!card) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPost(card.getAttribute("data-post"));
    }
  });

  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const isOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (isOutside) {
      dialog.close();
    }
  });

  dialogClose?.addEventListener("click", () => {
    dialog.close();
  });
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

    window.open(href, "_blank", "noopener,noreferrer");
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
setupDialog();
setupProjectCards();
setupReveal();

if (year) {
  year.textContent = new Date().getFullYear();
}
