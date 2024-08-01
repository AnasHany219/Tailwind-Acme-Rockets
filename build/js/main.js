const initApp = () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const humburgerBtn = document.getElementById("hamburger-button");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    humburgerBtn.classList.toggle("toggle-btn");
  };

  mobileMenu.addEventListener("click", toggleMenu);
  humburgerBtn.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
