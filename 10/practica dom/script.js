/* ===========================================================
  Conversor de monedas — Versión: solo convierte al hacer clic
=========================================================== */

(() => {
  const $ = (sel, parent = document) => parent.querySelector(sel);

  const form = $("#fx-form");
  const amountInput = $("#amount");
  const fromSel = $("#from");
  const toSel = $("#to");
  const decimalsInput = $("#decimals");
  const rateEl = $("#rate");
  const fromAmountEl = $("#from-amount");
  const toAmountEl = $("#to-amount");
  const hint = $("#hint");
  const swapBtn = $("#swap");

  // Tasas de ejemplo (1 USD = rate[currency])
  const rateUSD = {
    USD: 1,
    EUR: 0.92,
    COP: 4100,
    MXN: 18.0,
    ARS: 980,
    BRL: 5.6,
    GBP: 0.78,
    JPY: 151.0,
  };

  const currencies = Object.keys(rateUSD);
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  function getDirectRate(from, to) {
    const usdFrom = rateUSD[from];
    const usdTo = rateUSD[to];
    if (!usdFrom || !usdTo) return null;
    return usdTo / usdFrom;
  }

  function formatNumber(n, decimals) {
    return Number(n).toLocaleString("es-CO", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  function flash(el) {
    el.classList.remove("flash");
    el.offsetWidth; // reiniciar animación
    el.classList.add("flash");
  }

  function convert() {
    const amount = Number(amountInput.value);
    const from = fromSel.value;
    const to = toSel.value;
    const decimals = clamp(Number(decimalsInput.value) || 0, 0, 6);

    if (!currencies.includes(from) || !currencies.includes(to)) return;
    if (!(amount >= 0)) return;

    const r = getDirectRate(from, to);
    if (r == null) return;

    const result = amount * r;

    rateEl.textContent = `1 ${from} = ${formatNumber(r, 4)} ${to}`;
    fromAmountEl.textContent = `${formatNumber(amount, decimals)} ${from}`;
    toAmountEl.textContent = `${formatNumber(result, decimals)} ${to}`;

    flash(toAmountEl);
    flash(rateEl);

    if (r < 0.01 || r > 1000) {
      hint.textContent =
        "Sugerencia: ajusta los decimales para ver mejor el resultado.";
    } else {
      hint.textContent = "Edita las tasas en app.js si quieres practicar más.";
    }
  }

  function swap() {
    const from = fromSel.value;
    const to = toSel.value;
    fromSel.value = to;
    toSel.value = from;
    // ya no convierte automáticamente
  }

  // Solo ejecuta convert() al hacer clic en "Convertir"
  form.addEventListener("submit", e => {
    e.preventDefault();
    convert();
  });

  swapBtn.addEventListener("click", swap);

  // No hay conversión automática al cargar
})();
