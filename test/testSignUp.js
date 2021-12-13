import assert from "assert";
import { it } from "mocha";
import {
  validarEmail,
  validarName,
  validarPassword,
} from "../src/js/validaciones.mjs";

/**
 * A continuacion hacemos una serie de tests para ver si funciona la validacion del sign up
 * Para cada uno de los campos hacmeos un testa para ver si funciona correctamente su validacion
 * Hacemos que uno funcione correctamente y de true
 * y otro hacemos que este mal y de false
 */
//TODO: Test SignUp
describe("Test validar Login funcion SignUpValido()", function () {
  //Test de validacion del Email
  it("Email valido", () => {
    assert.equal(validarEmail("dmaestre@cifpfbmoll.net"), true);
    assert.equal(validarEmail("jmateo@cifpfbmoll.eu"), false);
  });
  //Test de validacion del nombre
  it("Nombre valido", () => {
    assert.equal(validarName("jmateo"), true);
    assert.equal(validarName("maestre2"), false);
  });
  //Test de validacion de la contraseña
  it("Contraseña valida", () => {
    assert.equal(validarPassword("password."), true);
    assert.equal(validarPassword("password"), false);
  });
});
