// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Header shadow on scroll
const header = document.getElementById("siteHeader");
window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 10),
  { passive: true }
);

// Q&A accordion
document.querySelectorAll(".qa-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".qa-item");
    const isOpen = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
});

// Service cards: tap to reveal on touch devices
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    card.classList.toggle("is-open");
  });
});

// Consultation form -> WhatsApp pre-filled message
const form = document.getElementById("consultForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const service = String(data.get("service") || "").trim();

  const text = [
    "Hello, I would like to book a consultation with Dr. Khalid Khan Zadran.",
    "",
    `Name: ${name}`,
    phone ? `Phone: ${phone}` : null,
    `Service: ${service}`,
  ]
    .filter(Boolean)
    .join("\n");

  window.open("https://wa.me/93787654751?text=" + encodeURIComponent(text), "_blank", "noopener");
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
