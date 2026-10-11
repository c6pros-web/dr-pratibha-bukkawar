// Add Dr. Pratibha's WhatsApp number below in international format, digits only.
// Example for India: 919876543210 (country code 91 + 10-digit mobile number).
const WHATSAPP_NUMBER = "ADD_NUMBER_HERE";
const WHATSAPP_MESSAGE = "Hello Dr. Pratibha, I'd like to enquire about a consultation.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  if (/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  } else {
    link.href = "https://wa.me/";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add the WhatsApp number in script.js before publishing.");
    });
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) { menuToggle.textContent = "☰"; menuToggle.setAttribute("aria-label", "Open navigation"); }
  });
});
