// ==========================================================================
// RENDER
// ==========================================================================

function renderTimeline(){
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map((job, i) => `
    <div class="tl-item ${i === 0 ? "open" : ""}" data-idx="${i}">
      <button class="tl-head" aria-expanded="${i === 0}">
        <div class="tl-head-left">
          <span class="tl-role">${job.role}</span>
          <span class="tl-org">${job.org}</span>
        </div>
        <span class="tl-date mono">${job.date}</span>
        <svg class="tl-chevron" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="tl-body" style="${i === 0 ? "" : "max-height:0;"}">
        <ul class="tl-bullets">
          ${job.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".tl-head").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".tl-item");
      const body = item.querySelector(".tl-body");
      const isOpen = item.classList.contains("open");
      if (isOpen){
        body.style.maxHeight = "0px";
        item.classList.remove("open");
        btn.setAttribute("aria-expanded","false");
      } else {
        item.classList.add("open");
        btn.setAttribute("aria-expanded","true");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

function renderFilters(){
  const bar = document.getElementById("filterBar");
  bar.innerHTML = FILTERS.map((f,i) => `
    <button class="filter-btn ${i===0?"active":""}" data-filter="${f.key}" role="tab" aria-selected="${i===0}">${f.label}</button>
  `).join("");

  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-selected","true");
      renderProjects(btn.dataset.filter);
    });
  });
}

function catLabel(cat){
  const map = { asic:"ASIC", fpga:"FPGA", riscv:"RISC-V Core", debug:"Debug / JTAG", research:"Research" };
  return map[cat] || cat;
}

let currentProjectList = PROJECTS;

function renderProjects(filter = "all"){
  const grid = document.getElementById("projectGrid");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cats.includes(filter));
  currentProjectList = list;

  grid.innerHTML = list.map(p => `
    <button class="project-card reveal ${p.featured ? "featured" : ""}" data-id="${p.id}">
      ${p.featured ? `<span class="pc-featured-badge mono">&#9733; featured</span>` : ""}
      <div class="pc-top">
        <span class="pc-pin mono">PIN ${p.pin}</span>
        <span class="pc-cat">${catLabel(p.cats[0])}</span>
      </div>
      <div class="pc-title">${p.title}</div>
      <div class="pc-desc">${p.short}</div>
      <div class="pc-foot">
        <span>${p.role.split("·")[0].trim()}</span>
        <span>view &rarr;</span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id, currentProjectList));
  });
  observeReveal(grid.querySelectorAll(".project-card"));
}

function renderRegmap(){
  const el = document.getElementById("regmap");
  el.innerHTML = REGMAP.map(r => `
    <div class="regmap-row">
      <div class="regmap-addr">
        <span class="a">${r.addr}</span>
        <span class="n">${r.name}</span>
      </div>
      <div class="regmap-fields">
        ${r.fields.map(f => `<span class="chip">${f}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// MODAL
// ==========================================================================

function openModal(id, list){
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  if (list) currentProjectList = list;

  document.getElementById("modalTag").textContent   = p.cats.map(catLabel).join(" · ");
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalRole").textContent  = p.role;
  document.getElementById("modalBody").innerHTML    = p.body;

  let techHtml = p.tech.map(t => `<span class="chip">${t}</span>`).join("");
  if (p.link){
    techHtml += `<a href="${p.link}" target="_blank" rel="noopener" class="chip" style="color:var(--v-bright);border-color:var(--v-dim)">GitHub / Link &rarr;</a>`;
  }
  document.getElementById("modalTech").innerHTML = techHtml;

  const idx = currentProjectList.findIndex(x => x.id === id);
  document.getElementById("modalPrev").disabled = idx <= 0;
  document.getElementById("modalNext").disabled = idx === -1 || idx >= currentProjectList.length - 1;
  document.getElementById("modalOverlay").dataset.currentId = id;

  const overlay = document.getElementById("modalOverlay");
  const wasOpen = overlay.classList.contains("open");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-scroll").scrollTop = 0;
  if (!wasOpen){
    lastFocusedEl = document.activeElement;
    document.getElementById("modalClose").focus();
  }
}

function stepModal(dir){
  const overlay = document.getElementById("modalOverlay");
  if (!overlay.classList.contains("open")) return;
  const currentId = overlay.dataset.currentId;
  const idx = currentProjectList.findIndex(x => x.id === currentId);
  const nextIdx = idx + dir;
  if (nextIdx < 0 || nextIdx >= currentProjectList.length) return;
  openModal(currentProjectList[nextIdx].id);
}

let lastFocusedEl = null;

function closeModal(){
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalPrev").addEventListener("click", () => stepModal(-1));
document.getElementById("modalNext").addEventListener("click", () => stepModal(1));
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target.id === "modalOverlay") closeModal();
});
document.addEventListener("keydown", e => {
  const overlay = document.getElementById("modalOverlay");
  if (!overlay.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") stepModal(1);
  if (e.key === "ArrowLeft") stepModal(-1);
  if (e.key === "Tab"){
    // simple focus trap
    const focusable = overlay.querySelectorAll('button, a[href]');
    const list = Array.from(focusable).filter(el => !el.disabled);
    if (!list.length) return;
    const first = list[0], last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
});

// ==========================================================================
// RESUME PICKER MODAL
// ==========================================================================
let lastResumeFocusedEl = null;

function openResumeModal(){
  const overlay = document.getElementById("resumeModalOverlay");
  if (!overlay) return;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lastResumeFocusedEl = document.activeElement;
  document.getElementById("resumeModalClose").focus();
}

function closeResumeModal(){
  const overlay = document.getElementById("resumeModalOverlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastResumeFocusedEl) lastResumeFocusedEl.focus();
}

document.querySelectorAll("[data-resume-trigger]").forEach(btn => {
  btn.addEventListener("click", openResumeModal);
});

const resumeModalOverlay = document.getElementById("resumeModalOverlay");
if (resumeModalOverlay){
  document.getElementById("resumeModalClose").addEventListener("click", closeResumeModal);
  resumeModalOverlay.addEventListener("click", e => {
    if (e.target.id === "resumeModalOverlay") closeResumeModal();
  });
  document.addEventListener("keydown", e => {
    if (!resumeModalOverlay.classList.contains("open")) return;
    if (e.key === "Escape") closeResumeModal();
    if (e.key === "Tab"){
      const focusable = resumeModalOverlay.querySelectorAll('button, a[href]');
      const list = Array.from(focusable).filter(el => !el.disabled);
      if (!list.length) return;
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
}

// ==========================================================================
// NAV — mobile toggle + scrollspy
// ==========================================================================

const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const sections   = ["home","about","experience","projects","skills","education","contact"]
  .map(id => document.getElementById(id)).filter(Boolean);
const navAnchors = Array.from(document.querySelectorAll("[data-nav]"));

function updateActiveNav(){
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => { if (sec.offsetTop <= scrollPos) current = sec.id; });
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });

// ==========================================================================
// SCROLL REVEAL
// ==========================================================================

const revealObserver = ("IntersectionObserver" in window) ? new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }) : null;

function observeReveal(nodeListOrEl){
  const nodes = nodeListOrEl.length !== undefined ? Array.from(nodeListOrEl) : [nodeListOrEl];
  nodes.forEach(el => {
    if (!el) return;
    el.classList.add("reveal");
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add("revealed"); // no IO support — show immediately
  });
}

// ==========================================================================
// COPY EMAIL
// ==========================================================================

const copyEmailBtn = document.getElementById("copyEmailBtn");
if (copyEmailBtn){
  copyEmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const email = "nameeriqbalansari@gmail.com";
    const iconCopy = copyEmailBtn.querySelector(".icon-copy");
    const iconCheck = copyEmailBtn.querySelector(".icon-check");
    const showCopied = () => {
      iconCopy.style.display = "none";
      iconCheck.style.display = "block";
      copyEmailBtn.classList.add("copied");
      setTimeout(() => {
        iconCopy.style.display = "block";
        iconCheck.style.display = "none";
        copyEmailBtn.classList.remove("copied");
      }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(email).then(showCopied).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showCopied(); } catch (err) {}
      document.body.removeChild(ta);
    }
  });
}

// ==========================================================================
// COPY PHONE
// ==========================================================================

const phoneCopyBtn = document.getElementById("phoneCopyBtn");
if (phoneCopyBtn){
  phoneCopyBtn.addEventListener("click", () => {
    const phone    = phoneCopyBtn.dataset.copy;
    const label    = document.getElementById("phoneCopyText");
    const original = label.textContent;
    const showCopied = () => {
      label.textContent = "Copied!";
      phoneCopyBtn.classList.add("copied");
      setTimeout(() => {
        label.textContent = original;
        phoneCopyBtn.classList.remove("copied");
      }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(phone).then(showCopied).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = phone;
      ta.style.position = "fixed";
      ta.style.opacity  = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showCopied(); } catch (err) {}
      document.body.removeChild(ta);
    }
  });
}

// ==========================================================================
// INIT
// ==========================================================================

document.getElementById("year").textContent = new Date().getFullYear();
renderTimeline();
renderFilters();
renderProjects();
renderRegmap();
updateActiveNav();

observeReveal(document.querySelectorAll(".section"));
observeReveal(document.querySelectorAll(".tl-item"));
observeReveal(document.querySelectorAll(".edu-card"));
observeReveal(document.querySelectorAll(".contact-card"));
observeReveal(document.querySelectorAll(".regmap-row"));
