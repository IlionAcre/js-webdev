"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // ======================
  // 1. innerHTML
  // ======================
  const innerHTMLContainer = document.getElementById("innerHTML-container");
  const btnInnerHTMLSet = document.getElementById("btn-innerHTML-set");
  const btnInnerHTMLAppend = document.getElementById("btn-innerHTML-append");

  let innerHTMLCounter = 1;

  btnInnerHTMLSet.addEventListener("click", () => {
    innerHTMLContainer.innerHTML = `
      <p><strong>Contenido reemplazado</strong> con innerHTML =</p>
      <p>Click número: ${innerHTMLCounter++}</p>
    `;
  });

  btnInnerHTMLAppend.addEventListener("click", () => {
    innerHTMLContainer.innerHTML += `
      <p>Elemento añadido con innerHTML += (#${innerHTMLCounter++})</p>
    `;
  });

  // ======================
  // 2. appendChild
  // ======================
  const appendChildContainer = document.getElementById("appendChild-container");
  const btnAppendChild = document.getElementById("btn-appendChild");
  let appendChildCounter = 1;

  btnAppendChild.addEventListener("click", () => {
    const div = document.createElement("div");
    div.textContent = `Nodo creado con createElement y añadido con appendChild (#${appendChildCounter++})`;
    appendChildContainer.appendChild(div);
  });

  // ======================
  // 3. append / prepend
  // ======================
  const appendPrependContainer = document.getElementById(
    "append-prepend-container"
  );
  const btnPrepend = document.getElementById("btn-prepend");
  const btnAppend = document.getElementById("btn-append");

  let appendPrependCounter = 1;

  btnPrepend.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = ` [inicio #${appendPrependCounter}] `;
    appendPrependContainer.prepend(span);
    appendPrependCounter++;
  });

  btnAppend.addEventListener("click", () => {
    const span = document.createElement("span");
    span.textContent = ` [final #${appendPrependCounter}] `;
    appendPrependContainer.append(span);
    appendPrependCounter++;
  });

  // ======================
  // 4. insertAdjacentHTML
  // ======================
  const reference = document.getElementById("insertAdjacentHTML-reference");
  const insertButtons = document.querySelectorAll(".btn-insertAdjacentHTML");
  let insertAdjacentCounter = 1;

  insertButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const pos = btn.getAttribute("data-pos");
      reference.insertAdjacentHTML(
        pos,
        `<div>Nuevo elemento (${pos}) #${insertAdjacentCounter++}</div>`
      );
    });
  });

  // ======================
  // 5. insertBefore
  // ======================
  const listInsertBefore = document.getElementById("insertBefore-list");
  const btnInsertBefore = document.getElementById("btn-insertBefore");
  let insertBeforeCounter = 1;

  btnInsertBefore.addEventListener("click", () => {
    const children = listInsertBefore.children;
    if (children.length >= 2) {
      const nuevo = document.createElement("li");
      nuevo.textContent = `Insertado antes del segundo (#${insertBeforeCounter++})`;
      const segundo = children[1]; // índice 1 = segundo elemento
      listInsertBefore.insertBefore(nuevo, segundo);
    }
  });

  // ======================
  // 6. replaceChild
  // ======================
  const replaceContainer = document.getElementById("replaceChild-container");
  const btnReplaceChild = document.getElementById("btn-replaceChild");
  let replaced = false;

  btnReplaceChild.addEventListener("click", () => {
    const viejo = document.getElementById("replaceChild-old");

    if (!viejo || replaced) return;

    const nuevo = document.createElement("p");
    nuevo.textContent = "Ahora soy el contenido nuevo (replaceChild)";
    replaceContainer.replaceChild(nuevo, viejo);
    replaced = true;
  });

  // ======================
  // 7. document.write (nueva ventana)
  // ======================
  const btnDocumentWrite = document.getElementById("btn-documentWrite");

  btnDocumentWrite.addEventListener("click", () => {
    const win = window.open("", "_blank", "width=600,height=400");
    if (!win) return;

    win.document.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />
          <title>Ejemplo document.write</title>
          <style>
            body {
              font-family: system-ui, sans-serif;
              background: #111827;
              color: #e5e7eb;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
            }
            .box {
              padding: 1.5rem;
              border-radius: 12px;
              background: #020617;
              border: 1px solid #374151;
            }
            .box h1 {
              margin-top: 0;
              font-size: 1.4rem;
            }
            .box p {
              margin: 0.3rem 0;
              color: #9ca3af;
              font-size: 0.9rem;
            }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>document.write()</h1>
            <p>Esta página fue creada completamente con <code>document.write</code>.</p>
            <p>En la página principal evitamos usarlo para no borrar el documento.</p>
          </div>
        </body>
      </html>
    `);
    win.document.close();
  });
});
