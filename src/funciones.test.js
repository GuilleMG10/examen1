import { devolverTexto, devolver_una_palabra_por_posicion} from "./funciones";

describe("Funciones", () => {
  it("deberia devolver el texto ingresado", () => {
    expect(devolverTexto("El password de mi cuenta es PASSWORD. Es un password de poco cuidado")).toEqual("El password de mi cuenta es PASSWORD. Es un password de poco cuidado");
  });
  it("deberia devolver la palabra en la posicion x", () => {
    expect(devolver_una_palabra_por_posicion("El password de mi cuenta es PASSWORD. Es un password de poco cuidado",5)).toEqual("cuenta");
  });
});