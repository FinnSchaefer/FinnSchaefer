const updates = [
  {
    date: "2026",
    title: "ROS2 SLAM security research accepted to IEEE HOST 2026",
    summary:
      "My work on vulnerabilities in ROS2-based SLAM systems was accepted to IEEE HOST 2026, centered on LiDAR manipulation that remains statistically and temporally consistent.",
    label: "IEEE HOST 2026",
  },
  {
    date: "2025",
    title: "First place in the National Transportation Cybersecurity Competition",
    summary:
      "Finished first in the National Transportation Cybersecurity Competition through work that included anomaly detection, application security, and transportation-system exploitation challenges.",
    label: "NTCC result",
  },
  {
    date: "Focus",
    title: "Current focus: autonomous-system security and defensive tooling",
    summary:
      "Current work centers on cyber-physical security, practical automation, and publications tied to real technical problems rather than abstract theory.",
    label: "Current direction",
  },
];

const posts = [
  {
    slug: "ieee-host-2026-ros2-slam",
    meta: "Publication • IEEE HOST 2026",
    title: "IEEE HOST 2026: my ROS2 SLAM security research",
    excerpt:
      "This publication is built around my work on how ROS2-based SLAM systems can be influenced through LiDAR manipulation that still appears statistically and temporally consistent.",
    tags: ["IEEE HOST", "ROS2", "LiDAR"],
    body: [
      "One of the pieces of work I am most proud of so far is my ROS2 SLAM security research being accepted to IEEE HOST 2026. The publication focuses on vulnerabilities in ROS2-based SLAM systems and examines how LiDAR data can be manipulated in ways that remain statistically and temporally consistent.",
      "That detail matters. A lot of security discussions around autonomy focus on obvious disruption, but this work is about something quieter: influencing perception while staying close enough to normal operating behavior that the problem is harder to detect early.",
      "For me, this publication represents the kind of security engineering I want to keep doing, work that is technically rigorous, grounded in real systems, and relevant to how autonomous and cyber-physical platforms actually fail under pressure.",
    ],
  },
  {
    slug: "ntcc-first-place",
    meta: "Publication • NTCC",
    title: "First place in the National Transportation Cybersecurity Competition",
    excerpt:
      "This writeup covers the competition work that led to a first-place finish, including anomaly detection, application security, and transportation-focused problem solving.",
    tags: ["NTCC", "Transportation", "Anomaly Detection"],
    body: [
      "Another milestone that shaped this site was finishing first in the National Transportation Cybersecurity Competition. The event covered a wide range of transportation-security problems, including anomaly detection, application security, and exploitation challenges tied to operational systems.",
      "The part that stood out most to me was vehicle trajectory anomaly detection. It connected security work with machine learning in a way that felt concrete rather than academic, which is exactly the kind of problem space I like working in.",
      "That result mattered because it reflected more than a single event. It showed that the way I like to approach security engineering, staying technical, practical, and calm under constraints, holds up in competitive environments as well.",
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
