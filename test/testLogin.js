import assert from "assert";
import { it } from "mocha";
import { validarNameTesting, validarPasswordTesting } from "../src/js/nuevasvalidaciones.js";

/**
 * A continuacion hacemos una serie de tests para ver si funciona la validacion del login
 * Para cada uno de los campos hacmeos un testa para ver si funciona correctamente su validacion
 * Hacemos que uno funcione correctamente y de true
 * y otro hacemos que este mal y de false
 */

//TODO: Test Login
describe("Test validar Login funcion loginValido()", function () {
  //Test de validacion del usuario
  it("Usuario válido", () => {
    assert.equal(validarNameTesting("mateo"), true);
    assert.equal(validarNameTesting("daniel,maestre"), false);
  });
  //Test de validacion de la contraseña
  it("Contraseña Válida", () => {
    assert.equal(validarPasswordTesting("Passwor."), true);
    assert.equal(validarPasswordTesting("contraseñavalida"), true);
    assert.equal(validarPasswordTesting("contrasenavalida"), false);
    assert.equal(validarPasswordTesting("p,4,5,s-"), true);
  });
});
