// Simple JS placeholder for future interactions.
// For now, this just logs navigation clicks.

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Navigated to section: ${link.getAttribute("href")}`);
    });
  });
});
