window.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.querySelector(".scroll-box");

  scrollBox.addEventListener("mouseenter", () => {
    scrollBox.style.overflowY = "auto";
  });

  scrollBox.addEventListener("mouseleave", () => {
    scrollBox.style.overflowY = "hidden";
  });
});
