const { sumar } = require("../script");

describe("Pruebas de la función sumar", () => {
  test("Suma de dos números positivos", () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test("Suma con números negativos", () => {
    expect(sumar(-2, -3)).toBe(-5);
  });

  test("Convierte cadenas numéricas correctamente", () => {
    expect(sumar("4", "6")).toBe(10);
  });

  test("Lanza error si alguno no es número", () => {
    expect(() => sumar("a", 3)).toThrow("Ambos valores deben ser números");
  });
});
