const updates = [
  {
    date: "2026",
    title: "Senior capstone research accepted to IEEE HOST Symposium 2026",
    summary:
      "Research on vulnerabilities in ROS2-based SLAM systems, including how LiDAR perception can be manipulated while remaining statistically and temporally consistent.",
  },
  {
    date: "2025",
    title: "First place in the National Transportation Cybersecurity Competition",
    summary:
      "Won George Mason's top finish in a national transportation cybersecurity competition that covered challenges such as anomaly detection, application security, and traffic-system exploitation.",
  },
  {
    date: "Now",
    title: "Rebuilding finnsec.dev into a cleaner publishing space",
    summary:
      "The site is being shaped into a quieter home for updates, essays, and project notes without the clutter of a typical portfolio layout.",
  },
];

const posts = [
  {
    slug: "perception-is-an-attack-surface",
    meta: "Research • IEEE HOST 2026",
    title: "Perception is an attack surface",
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
    title: "Winning by working clearly under constraints",
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
    slug: "why-this-site-got-quieter",
    meta: "Design • Personal site",
    title: "Why this site got quieter",
    excerpt:
      "I wanted the site to feel closer to a product page than a developer collage: more whitespace, fewer competing boxes, and copy that earns its place.",
    tags: ["Design", "Writing", "Workflow"],
    body: [
      "Most personal sites become crowded because every section tries to prove something at once. That is usually a design problem and a writing problem. Too much chrome ends up obscuring the actual work.",
      "This version is deliberately quieter. The layout gives the writing room to breathe, the palette stays restrained, and the motion is present without becoming the point of the page.",
      "A site like this should feel like a calm operating surface. The goal is to make the work legible, not decorate it into noise.",
    ],
  },
];

const projects = [
  {
    meta: "Research",
    title: "ROS2 SLAM Security Research",
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
    meta: "Platform",
    title: "FinnSec.dev",
    description:
      "A personal publishing surface for updates, essays, and research notes with a calmer visual language and a tighter editorial focus.",
    tags: ["Design", "Frontend", "Publishing"],
    href: "https://github.com/FinnSchaefer/FinnSchaefer",
    linkLabel: "Source code",
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
        <article class="post-card" data-reveal>
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
        <article class="project-card" data-reveal>
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
setupReveal();

if (year) {
  year.textContent = new Date().getFullYear();
}
