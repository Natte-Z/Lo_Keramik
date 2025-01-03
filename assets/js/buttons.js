document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".backToTop");

  // Show or hide the button when scrolling
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) { // Show after scrolling 300px
          backToTopButton.classList.add("show");
      } else {
          backToTopButton.classList.remove("show");
      }
  });

  // Scroll back to top when button is clicked
  backToTopButton.addEventListener("click", function () {
      window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scroll effect
      });
  });
});