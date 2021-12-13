import assert from "assert";
import { it } from "mocha";
import {
  validarEmailTesting,
  validarNameTesting,
  validarPasswordTesting
} from "../src/js/nuevasvalidaciones.js";

/**
 * A continuacion hacemos una serie de tests para ver si funciona la validacion del sign up
 * Para cada uno de los campos hacmeos un testa para ver si funciona correctamente su validacion
 * Hacemos que uno funcione correctamente y de true
 * y otro hacemos que este mal y de false
 */
//TODO: Test SignUp
describe("Test validar Login funcion SignUpValido()", function () {
  //Test de validacion del Email
  it("Email válido", () => {
    assert.equal(validarEmailTesting("dmaestre@cifpfbmoll.net"), true);
    assert.equal(validarEmailTesting("jmateo@cifpfbmoll.eu"), false);
    assert.equal(validarEmailTesting("Classicoman@cifpfbmoll.gov"), true);
    assert.equal(validarEmailTesting("em.o@c@i.com"), false);
  });
  //Test de validacion del nombre
  it("Nombre válido", () => {
    assert.equal(validarNameTesting("jmateo"), true);
    assert.equal(validarNameTesting("maestre2"), true);
    assert.equal(validarNameTesting("mae,stre2"), false);
    assert.equal(validarNameTesting("jmaaaaaaaaaaateeeeeeeeeeeeeeeooooooooo"), false);
  });
  //Test de validacion de la contraseña
  it("Contraseña válida", () => {
    assert.equal(validarPasswordTesting("password."), true);
    assert.equal(validarPasswordTesting("password"), false);
    assert.equal(validarPasswordTesting("pass"), false);
    assert.equal(validarPasswordTesting("2pass34,asdf"), true);
  });
});