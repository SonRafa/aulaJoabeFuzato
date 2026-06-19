(function () {
  "use strict";

  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  function fecharMenu() {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("ativo");
  }

  function abrirMenu() {
    toggle.setAttribute("aria-expanded", "true");
    nav.classList.add("ativo");
  }

  toggle.addEventListener("click", function () {
    var expandido = toggle.getAttribute("aria-expanded") === "true";
    if (expandido) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        fecharMenu();
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      fecharMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      fecharMenu();
    }
  });
})();
