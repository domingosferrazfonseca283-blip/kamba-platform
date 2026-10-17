(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      const label = toggle.querySelector(".sr-only");
      if (label) label.textContent = isOpen ? "Abrir menu" : "Fechar menu";
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        const label = toggle.querySelector(".sr-only");
        if (label) label.textContent = "Abrir menu";
      });
    });
  }
  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();