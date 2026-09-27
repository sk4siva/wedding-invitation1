// ===== EDIT ONLY THIS OBJECT FOR EACH CUSTOMER =====
const wedding = {
  bride: "Aaradhya",
  groom: "Arjun",
  shortDate: "23 · NOVEMBER · 2026",
  day: "23",
  month: "NOVEMBER",
  year: "2026",
  message: "With the blessings of our families, we invite you to celebrate our special day with us.",
  couplePhoto: "assets/couple.jpg",
  venue: "Prem Hall",
  address: "Your venue address goes here",
  mapUrl: "https://maps.google.com/",
  events: [
    { name: "Reception", date: "22 November 2026", time: "6:30 PM onwards", place: "Prem Hall" },
    { name: "Wedding", date: "23 November 2026", time: "9:00 AM – 10:30 AM", place: "Prem Hall" },
    { name: "Lunch", date: "23 November 2026", time: "12:30 PM onwards", place: "Family Gathering" }
  ]
};

// Text fields
document.querySelectorAll("[data-field]").forEach(el => {
  const key = el.dataset.field;
  if (wedding[key] !== undefined) el.textContent = wedding[key];
});

// Image fields
document.querySelectorAll("[data-field-src]").forEach(el => {
  const key = el.dataset.fieldSrc;
  if (wedding[key]) el.src = wedding[key];
});

// Events
const events = document.getElementById("events");
wedding.events.forEach(e => {
  events.insertAdjacentHTML("beforeend", `
    <article class="event">
      <div><h3>${e.name}</h3></div>
      <div><p>${e.date}</p><p>${e.time}</p><p>${e.place}</p></div>
    </article>
  `);
});

document.getElementById("mapBtn").href = wedding.mapUrl;

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .15});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Subtle parallax
window.addEventListener("scroll", () => {
  document.querySelectorAll(".parallax-img").forEach(img => {
    const rect = img.parentElement.getBoundingClientRect();
    const offset = (window.innerHeight/2 - (rect.top + rect.height/2)) * .08;
    img.style.transform = `scale(1.08) translateY(${offset}px)`;
  });
});

// Music: browsers require a user interaction before audio starts.
const audio = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", async () => {
  if (audio.paused) {
    await audio.play();
    musicBtn.textContent = "Ⅱ";
  } else {
    audio.pause();
    musicBtn.textContent = "♪";
  }
});
