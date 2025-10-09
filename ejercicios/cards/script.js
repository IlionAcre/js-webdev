"use strict";
const ORIGINAL_DECK = [
  {
    q: "¿Cuáles son los tipos primitivos en JavaScript?",
    a: "string, number, boolean, null, undefined, bigint y symbol.",
  },
  {
    q: "¿Por qué typeof null devuelve 'object'?",
    a: "Es un error histórico del lenguaje que se mantiene por compatibilidad.",
  },
  {
    q: "¿Qué hace el método push() en un array?",
    a: "Agrega un elemento al final del array y devuelve la nueva longitud.",
  },
  {
    q: "¿Qué hace el método splice() en un array?",
    a: "Permite eliminar o insertar elementos en posiciones específicas del array.",
  },
  {
    q: "¿Para qué sirve el método includes() en un array o string?",
    a: "Verifica si un elemento o texto existe y devuelve true o false.",
  },
  {
    q: "¿Qué devuelve el método slice()?",
    a: "Devuelve una copia de una parte del array o string sin modificar el original.",
  },
  {
    q: "¿Qué hace el método join() en un array?",
    a: "Une todos los elementos en un string, separados por un delimitador.",
  },
  {
    q: "¿Qué devuelve el método trim() en un string?",
    a: "Devuelve una copia del texto sin los espacios al inicio ni al final.",
  },
  {
    q: "¿Qué diferencia hay entre for, for...of y for...in?",
    a: "for usa un contador; for...of recorre valores; for...in recorre claves de un objeto.",
  },
  {
    q: "¿Para qué sirve el método forEach()?",
    a: "Ejecuta una función para cada elemento del array sin devolver un nuevo array.",
  },
  {
    q: "¿Cuál es la diferencia entre while y do...while?",
    a: "while evalúa la condición antes de ejecutar; do...while ejecuta al menos una vez.",
  },
  {
    q: "¿Qué diferencia hay entre una función normal, una anónima y una flecha?",
    a: "Las normales tienen nombre; las anónimas no; las flecha (=>) son más cortas y no tienen su propio this.",
  },
  {
    q: "¿Qué significa que JavaScript sea un lenguaje de tipado dinámico?",
    a: "Que el tipo de las variables puede cambiar durante la ejecución.",
  },
  {
    q: "¿Qué significa que JavaScript sea single-thread?",
    a: "Que ejecuta una sola tarea a la vez en un único hilo.",
  },
  {
    q: "¿Qué papel cumple la call stack en JavaScript?",
    a: "Es la pila donde se guardan y ejecutan las llamadas a funciones en orden.",
  },
  {
    q: "¿Cómo se evalúan las condiciones en JavaScript?",
    a: "Usando valores truthy y falsy en estructuras como if, else if, else y switch.",
  },
  {
    q: "¿Qué es el operador spread (...) y para qué sirve?",
    a: "Expande los elementos de un array u objeto. Ejemplo: const copia = [...original];",
  },
  {
    q: "¿Qué es el operador rest (...) y cuándo se usa?",
    a: "Agrupa varios valores en un solo parámetro. Ejemplo: function sumar(...nums){}.",
  },
  {
    q: "¿Qué hace el método addEventListener()?",
    a: "Escucha un evento del DOM (como clics o teclas) y ejecuta una función cuando ocurre.",
  },
  {
    q: "¿Cómo se cambia el texto y el estilo de un elemento con JavaScript?",
    a: "Con element.textContent = 'Nuevo texto' y element.style.color = 'red';.",
  },
];

// PASOS PARA CREAR EL FUNCIONAMIENTO:

// 1) Seleccionar los elementos del DOM.

// 2) Preparar el estado inicial:
//    - Establecer un índice inicial (0).
//    - Agregar logica para las tarjetas conocidas 'known'.

// 3) Crear una función de renderizado de tarjeta (para mostrar el texto):
//    - Obtener la carta actual.
//    - Mostrar en el título si está la “Q” -question- o la “A” -answer- junto con el número de carta.
//    - Escribir en el contenido el texto de la pregunta o de la respuesta según la bandera.
//    - Aplicar o quitar la clase de estilo para las cartas conocidas (verde) según corresponda.
//    - Reflejar el estado de accesibilidad (por ejemplo, aria-pressed en el botón “known”). -- Esto lo podemos dejar para el final --

// 4) Crear una función de renderizado de estadísticas:
//    - Actualizar el número de carta actual (índice + 1).
//    - Actualizar el total de cartas.
//    - Contar cuántas cartas están marcadas como conocidas y mostrar el total.

// 5) Configurar la interacción de la tarjeta (click/tecla):
//    - Al hacer click en la tarjeta, alternar entre mostrar pregunta y respuesta.
//    - Al presionar la tecla c, hacer lo mismo.

// 6) Configurar navegación:
//    - Botón “Prev”: mover el índice una posición hacia atrás (con wrap al final) y volver a mostrar la pregunta.
//    - Botón “Next”: mover el índice una posición hacia adelante (con wrap al inicio) y volver a mostrar la pregunta.

// 7) Configurar marcado como conocido:
//    - Alternar 'known' para la carta actual.
//    - Re-renderizar tarjeta y estadísticas.

// 8) Configurar barajado (shuffle):
//    - Desordenar el mazo de trabajo in-place con Fisher–Yates.
//    - Reiniciar las banderas known a false.
//    - Volver el índice a 0 y mostrar la pregunta.
//    - Re-renderizar tarjeta y estadísticas.
//    - Mostrar un alert de “barajado”.

// 9) Configurar reinicio total:
//    - Restaurar el mazo al orden original.
//    - Reiniciar known a false y el índice a 0.
//    - Volver a mostrar la pregunta.
//    - Reiniciar tarjeta y estadísticas.

// 10) Añadir atajos de teclado:
//     - Flecha izquierda: ir a la carta anterior.
//     - Flecha derecha: ir a la carta siguiente.
//     - Tecla “k”: marcar/desmarcar como conocida.

// 11) Inicialización.
