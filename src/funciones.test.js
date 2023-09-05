import { devolverTexto } from "./funciones";

describe("Funciones", () => {
  it("deberia devolver el texto ingresado", () => {
    expect(devolverTexto("El password de mi cuenta es PASSWORD. Es un password de poco cuidado")).toEqual("El password de mi cuenta es PASSWORD. Es un password de poco cuidado");
  });
});