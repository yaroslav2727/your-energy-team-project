function setupMobileMenu() {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);

    mobileMenu.classList.toggle("is-open");
    body.classList.toggle("menu-open");

    if (body.classList.contains("menu-open")) {
      disableScroll();
    } else {
      enableScroll();
    }
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    body.classList.remove("menu-open");
    enableScroll();
  };

  const disableScroll = () => {
    body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    body.style.overflow = "visible";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  body.addEventListener("click", event => {
    if (event.target.closest(".js-menu-container") || event.target.closest(".js-open-menu")) {
      return;
    }
    if (mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", e => {
    if (!e.matches) return;
    closeMenu();
  });

  // No escape needed for *mobile* menu?

  // document.addEventListener("keydown", event => {
  //   if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
  //     closeMenu();
  //   }
  // });
}

setupMobileMenu();
