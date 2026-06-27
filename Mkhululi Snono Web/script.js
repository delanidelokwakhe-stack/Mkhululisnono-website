// Mkhululi Snono — small enhancements for the standalone site

const days = [
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
];

const hoursList = document.getElementById("hours-list");
if (hoursList) {
  hoursList.innerHTML = days
    .map((d) => `<li><span>${d}</span><span>08:00 – 17:00</span></li>`)
    .join("");
}

const copyright = document.getElementById("copyright");
if (copyright) {
  copyright.textContent = `© ${new Date().getFullYear()} All rights reserved.`;
}

// Smooth scroll already handled via CSS; close mobile menus on link click if added later.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
