const updates = [
  {
    date: "2026",
    title: "PULSER accepted to IEEE HOST 2026",
    summary:
      "PULSER was accepted to IEEE HOST 2026. The work looks at how trusted LiDAR input can be manipulated in ways that still appear believable to the system consuming it.",
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
    date: "2026",
    title: "New article: your curve has an expiration date",
    summary:
      "A new write-up on why quantum breaks ECC and ECDSA, why that does not kill public-key cryptography, and why the real challenge is migration.",
    label: "Post-quantum",
  },
];

const posts = [
  {
    slug: "pulser-ieee-host-2026",
    meta: "Publication • IEEE HOST 2026",
    title: "PULSER at IEEE HOST 2026",
    excerpt:
      "A high-level look at PULSER, my IEEE HOST 2026 paper on how trusted LiDAR input can quietly shape how robotic systems understand their environment.",
    tags: ["PULSER", "IEEE HOST", "ROS2"],
    officialUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7442217488412635136/",
    officialLabel: "Research announcement",
    body: [
      "PULSER is the clearest example of the kind of work I want to keep doing. At a high level, it is about what happens when a system keeps trusting sensor input that has been subtly manipulated, and how that changes the way the system understands the world around it.",
      "What matters to me about this work is not just the robotics angle. It highlights a broader security problem: cyber-physical systems often fail through misplaced trust rather than obvious breakage. If the data still looks believable, a bad decision can travel much farther through the stack before anyone notices.",
      "That is why I think PULSER matters beyond ROS2 and SLAM. It pushes on a question that shows up in many environments: when a platform depends on continuous sensor input, what happens when the trust model around that input is wrong.",
      "This paper also shaped where I want to take my work next. I am interested in how the same ideas around believable manipulation, perception, and system trust apply to IT/OT and ICS environments, especially where telemetry feeds directly into monitoring, control, or operator decisions.",
      "So while I am keeping the technical details at a high level for now, the importance of PULSER is straightforward. It is a research direction that connects autonomy, cyber-physical security, and the kinds of trust failures that matter in real operational systems.",
    ],
  },
];

const projects = [
  {
    meta: "Write-up",
    title: "NTCC first-place finish",
    description:
      "A longer write-up on the competition work behind my first-place NTCC result and why that experience mattered to how I approach security engineering.",
    tags: ["NTCC", "Transportation", "Machine Learning"],
    href: "work/ntcc-first-place.html",
    linkLabel: "Open page",
  },
  {
    meta: "Article",
    title: "Your curve has an expiration date",
    description:
      "A longer article on why quantum threats to ECC and ECDSA are real, why the sky is not falling, and what the actual migration path looks like.",
    tags: ["Post-Quantum", "ECC", "ECDSA"],
    href: "work/your-curve-has-an-expiration-date.html",
    linkLabel: "Open page",
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
            <a class="project-link" href="${project.href}">
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
setupDialog();
setupProjectCards();
setupReveal();

if (year) {
  year.textContent = new Date().getFullYear();
}
