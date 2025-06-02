// script.js

// Page interaction message in console
console.log("स्वास्थ्य जानकारी लोड हो चुकी है।");

// Optional: alert user when page loads (commented for realism)
// window.onload = function () {
//   alert("यह एक सामान्य स्वास्थ्य लेख है, कृपया ध्यान से पढ़ें।");
// };

// Button effect (if you ever add one)
document.addEventListener("DOMContentLoaded", function () {
  const hiddenSections = document.querySelectorAll("section");

  hiddenSections.forEach((sec) => {
    sec.style.opacity = "0";
    sec.style.transition = "opacity 1s ease";
  });

  setTimeout(() => {
    hiddenSections.forEach((sec) => {
      sec.style.opacity = "1";
    });
  }, 500);
});
