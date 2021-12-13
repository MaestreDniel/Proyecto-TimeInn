import assert from "assert";
import { it } from "mocha";
import { validarPassword ,validarName } from "../src/js/validaciones.mjs";



describe("Test validar Login funcion validarName()", function ()
{
    it("Usuario valido", () =>{
        assert.equal(validarName("mateo"),true);
        assert.equal(validarName("soydanielmaestre"),false);
    });

    it("Contraseña Valida", () =>{
        assert.equal(validarPassword("Password."),true);
        assert.equal(validarPassword("contraseñavalida"),false);
    });
});