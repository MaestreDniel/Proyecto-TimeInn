import assert from "assert";
import { it } from "mocha";
import { validarPassword } from "../src/js/validaciones.mjs";
import { validarName } from "../src/js/validaciones.mjs";


describe("Test User funcion validarName()", function ()
{
    it("Usario valido", () =>{
        assert.equal(validarName("mateo"),true);
        assert.equal(validarName("soydanielmaestre"),false);
    })
});

describe("Test Cotraseña funcion validarPassword", function ()
{
    it("Contraseña Valida", () =>{
        assert.equal(validarPassword("Password."),true);
        assert.equal(validarPassword("contraseñavalida"),false);
    })
});