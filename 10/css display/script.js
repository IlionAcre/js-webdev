"use strict";

(function () {
  const contenedor = document.getElementById("contenedor");
  const botones = document.querySelectorAll(".botones .boton");
  const displays = ["block", "inline", "inline-block", "flex", "grid", "none"];

  function aplicarDisplay(el, tipo) {
    displays.forEach(d => el.classList.remove(d));
    el.classList.add(tipo);
  }

  function marcarActivo(btn) {
    botones.forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");
  }

  window.cambiarDisplay = function (tipo, btn) {
    aplicarDisplay(contenedor, tipo);
    if (btn) marcarActivo(btn);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const claseActual =
      displays.find(d => contenedor.classList.contains(d)) || "block";
    const btnActual = Array.from(botones).find(
      b => b.textContent.toLowerCase() === claseActual.toLowerCase()
    );
    if (btnActual) marcarActivo(btnActual);
  });
})();
