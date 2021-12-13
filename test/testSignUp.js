import assert from "assert";
import { it } from "mocha";
import {
  validarEmail,
  validarName,
  validarPassword,
} from "../src/js/validaciones.mjs";

describe("Test validar SignUp funcion validarEmail()", function () {
  it("Email valido", () => {
    assert.equal(validarEmail("dmaestre@cifpfbmoll.net"), true);
    assert.equal(validarEmail("jmateo@cifpfbmoll.eu"), false);
  });

  it("Nombre valido", () => {
    assert.equal(validarName("jmateo"), true);
    assert.equal(validarName("maestre2"), false);
  });

  it("Contraseña valida", () => {
    assert.equal(validarPassword("password."), true);
    assert.equal(validarPassword("password"), false);
  });
});
