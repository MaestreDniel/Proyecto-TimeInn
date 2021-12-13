import assert from "assert";
import { it } from "mocha";
import { validarPassword, validarName } from "../src/js/validaciones.mjs";

/**
 * A continuacion hacemos una serie de tests para ver si funciona la validacion del login
 * Para cada uno de los campos hacmeos un testa para ver si funciona correctamente su validacion
 * Hacemos que uno funcione correctamente y de true
 * y otro hacemos que este mal y de false
 */

//TODO: Test Login
describe("Test validar Login funcion loginValido()", function () {
  //Test de validacion del usuario
  it("Usuario valido", () => {
    assert.equal(validarName("mateo"), true);
    assert.equal(validarName("soydanielmaestre"), false);
  });
  //Test de validacion de la contraseña
  it("Contraseña Valida", () => {
    assert.equal(validarPassword("Password."), true);
    assert.equal(validarPassword("contraseñavalida"), false);
  });
});
