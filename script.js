const updates = [
  {
    date: "2026",
    title: "PULSER accepted to IEEE HOST 2026",
    summary:
      "PULSER was accepted to IEEE HOST 2026. The work examines ROS2 SLAM vulnerabilities through LiDAR manipulation that remains statistically and temporally consistent.",
    label: "IEEE HOST 2026",
  },
  {
    date: "2025",
    title: "First place in the National Transportation Cybersecurity Competition",
    summary:
      "Placed first in NTCC through work that spanned anomaly detection, application security, and transportation-system exploitation challenges.",
    label: "NTCC result",
  },
  {
    date: "Focus",
    title: "Next direction: perception attacks mapped into IT/OT and ICS",
    summary:
      "I am interested in how lessons from autonomous-system perception attacks translate into operational technology, especially telemetry, trust, and control in electrical-grid environments.",
    label: "Current direction",
  },
];

const posts = [
  {
    slug: "pulser-ieee-host-2026",
    meta: "Publication • IEEE HOST 2026",
    title: "PULSER at IEEE HOST 2026",
    excerpt:
      "PULSER examines how ROS2-based SLAM systems can be manipulated through LiDAR input that still looks believable in timing and statistical behavior.",
    tags: ["PULSER", "IEEE HOST", "ROS2"],
    officialUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7442217488412635136/",
    officialLabel: "Official publication link",
    body: [
      "PULSER is my IEEE HOST 2026 publication on ROS2-based SLAM security. The core of the work is a simple question with uncomfortable implications: what happens when LiDAR data is manipulated in a way that still looks normal enough to be trusted by the system consuming it.",
      "The project focuses on keeping the attack statistically and temporally believable rather than obviously disruptive. That makes the problem more realistic. In cyber-physical systems, the most useful attacks are not always the loudest ones. If a target can be pushed off course without immediately triggering suspicion, the downstream effects can be far more meaningful.",
      "What I like about PULSER is that it sits at the intersection of security engineering and system behavior. It is not just about breaking a sensor. It is about understanding how trust is built into perception pipelines, how that trust can be manipulated, and what that means for autonomous platforms that rely on those inputs for navigation and decision-making.",
      "It also points toward where I want to keep going. The same ideas behind perception trust in autonomy map cleanly into broader cyber-physical environments. If believable bad input can shape a robot's understanding of the world, similar trust failures can shape how industrial systems interpret telemetry, alarms, and control signals.",
      "For me, that is what makes this publication more than a conference line on a resume. It is a foundation for thinking about cyber-physical security in a way that is precise, operational, and transferable to harder IT/OT and ICS problems.",
    ],
  },
  {
    slug: "ntcc-first-place",
    meta: "Publication • NTCC",
    title: "First place at NTCC",
    excerpt:
      "This writeup covers the work behind my first-place NTCC finish, from anomaly detection to application security and transportation-focused exploitation challenges.",
    tags: ["NTCC", "Transportation", "Security Engineering"],
    officialUrl: "https://www.gmu.edu/news/2025-03/cyber-sweep-george-mason-students-take-top-three-spots-national-transportation",
    officialLabel: "Official publication link",
    body: [
      "Finishing first at the National Transportation Cybersecurity Competition was one of the clearest validations I have had so far that my approach to security engineering works under pressure. The competition covered a broad range of transportation-security problems and rewarded the ability to stay effective across very different technical contexts.",
      "The work included anomaly detection, application security, and exploitation challenges tied to operational systems. That range mattered. It forced quick context switching while still demanding solid technical decisions, which is closer to real engineering than a narrow lab exercise.",
      "The piece that stayed with me most was vehicle trajectory anomaly detection. It was a strong example of the kind of problem I want to keep working on because it connected security, machine learning, and operational systems in a way that felt concrete rather than performative.",
      "The NTCC result also helped clarify the kind of environments I am best suited for. I do my best work when the systems are real, the constraints are visible, and success depends on making technically sound decisions without unnecessary drama.",
      "That is why I treat this as more than a competition result. It marks a point where transportation security, anomaly detection, and cyber-physical problem solving all aligned in a way that directly shaped where I want to take my work next.",
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
const dialogActions = document.querySelector("#dialog-actions");

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

  if (!post || !dialog || !dialogMeta || !dialogTitle || !dialogBody || !dialogActions) {
    return;
  }

  dialogMeta.textContent = post.meta;
  dialogTitle.textContent = post.title;
  dialogBody.innerHTML = post.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  dialogActions.innerHTML = post.officialUrl
    ? `<a class="button button-primary dialog-link" href="${post.officialUrl}" target="_blank" rel="noreferrer">${post.officialLabel || "Official publication link"}</a>`
    : "";
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
