const updates = [
  {
    date: "March 25, 2026",
    title: "Rebuilt the site into a publishing home",
    summary:
      "Shifted the homepage from a static portfolio into a place for updates, essays, and work-in-progress notes.",
  },
  {
    date: "March 18, 2026",
    title: "Tightening the automation layer",
    summary:
      "Working on smaller security automations that are easier to debug, easier to document, and less fragile in practice.",
  },
  {
    date: "March 03, 2026",
    title: "Turning lab work into reusable writing",
    summary:
      "Refining a workflow where experiments become notes quickly, before the useful details disappear.",
  },
];

const posts = [
  {
    slug: "publish-the-messy-middle",
    meta: "Field note • March 25, 2026",
    title: "Publishing the messy middle of security work",
    excerpt:
      "Most useful work happens before the polished writeup. I want this site to capture that middle layer.",
    tags: ["Writing", "Workflow", "Research"],
    body: [
      "A lot of security work dies in private notes because it never feels complete enough to publish. That is a bad filter. The rough edge is often where the useful information lives: what assumptions failed, what tool did not scale, what part took too long to debug.",
      "This site is structured around that problem. Short updates handle momentum, while longer posts turn patterns into something reusable. That makes the archive more honest and more valuable than a portfolio that only shows finished snapshots.",
      "The standard I care about is not polish for its own sake. It is clarity. If a note makes the next experiment faster, it has earned its place.",
    ],
  },
  {
    slug: "small-tools-over-big-systems",
    meta: "Essay • March 12, 2026",
    title: "Why small defensive tools keep winning",
    excerpt:
      "The best internal tools are often narrow, boring, and resilient. That is usually a feature, not a limitation.",
    tags: ["Automation", "Defense", "Engineering"],
    body: [
      "Big platforms promise coverage. Small tools usually deliver leverage. In defensive engineering, a script that removes one painful manual step every day can be more valuable than a heavier system that takes months to operationalize.",
      "That does not mean the tooling should be disposable. It means the surface area should be intentional. Inputs need to be obvious, outputs need to be inspectable, and failure modes need to be legible enough that someone can fix them under pressure.",
      "I keep coming back to the same question: if this breaks at the wrong time, will the operator understand why? If not, the design is not done.",
    ],
  },
  {
    slug: "documenting-labs-like-product",
    meta: "Process • February 27, 2026",
    title: "Documenting lab work like it is product work",
    excerpt:
      "If a research setup cannot be handed off, repeated, or revisited later, the documentation is not good enough.",
    tags: ["Labs", "Notes", "Systems"],
    body: [
      "Lab environments are where many good ideas start, but they become hard to reuse because the setup lives only in memory. I try to treat every worthwhile lab as if someone else will need to reproduce it from scratch.",
      "That changes how I document. I care less about telling the whole story and more about preserving the decision points: the constraints, the topology, the assumptions, and the pieces that were most likely to fail.",
      "Good notes do not need to be long. They need to remove ambiguity. That is the standard I want this site to support.",
    ],
  },
];

const projects = [
  {
    meta: "Research",
    title: "Threat Detection Labs",
    description:
      "Practical detection experiments, writeups, and testable ideas for understanding attacker behavior and response paths.",
    tags: ["Detection", "Labs", "Writeups"],
    href: "https://github.com/FinnSchaefer",
    linkLabel: "See source",
  },
  {
    meta: "Tooling",
    title: "Security Automation Toolkit",
    description:
      "Small utilities that reduce repetitive security work without hiding the underlying mechanics or outputs.",
    tags: ["Automation", "Python", "Ops"],
    href: "https://github.com/FinnSchaefer",
    linkLabel: "Explore repos",
  },
  {
    meta: "Hardening",
    title: "Operational Playbooks",
    description:
      "System hardening notes, environment checklists, and reusable patterns for making defensive changes stick.",
    tags: ["Hardening", "Guides", "Baselines"],
    href: "https://github.com/FinnSchaefer",
    linkLabel: "Browse work",
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
  updatesList.innerHTML = updates
    .map(
      (update) => `
        <article data-reveal>
          <p class="update-date">${update.date}</p>
          <h3>${update.title}</h3>
          <p>${update.summary}</p>
        </article>
      `
    )
    .join("");
}

function renderPosts() {
  postsList.innerHTML = posts
    .map(
      (post) => `
        <article data-reveal>
          <div>
            <p class="post-meta">${post.meta}</p>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </div>
          <div>
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
  projectsList.innerHTML = projects
    .map(
      (project) => `
        <article data-reveal>
          <div>
            <p class="project-meta">${project.meta}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
          <div>
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

  if (!post || !dialog) {
    return;
  }

  dialogMeta.textContent = post.meta;
  dialogTitle.textContent = post.title;
  dialogBody.innerHTML = post.body.map((paragraph) => `<p>${paragraph}</p>`).join("");
  dialog.showModal();
}

function setupDialog() {
  if (!dialog) {
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
      threshold: 0.16,
      rootMargin: "0px 0px -24px 0px",
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
