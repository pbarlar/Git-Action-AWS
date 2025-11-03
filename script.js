// Función lógica (exportable para pruebas)
function sumar(a, b) {
  const n1 = Number(a);
  const n2 = Number(b);
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Ambos valores deben ser números");
  }
  return n1 + n2;
}

// Solo ejecuta la parte del DOM si existe "document"
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("sumButton");
    const result = document.getElementById("result");

    btn.addEventListener("click", () => {
      const num1 = document.getElementById("num1").value;
      const num2 = document.getElementById("num2").value;

      try {
        const suma = sumar(num1, num2);
        result.textContent = `Resultado: ${suma}`;
      } catch (error) {
        result.textContent = `Error: ${error.message}`;
      }
    });
  });
}

// Exportar para Jest
if (typeof module !== "undefined") {
  module.exports = { sumar };
}
