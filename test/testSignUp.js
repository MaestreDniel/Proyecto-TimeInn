import assert from "assert";
import { it } from "mocha";
import { validarEmail } from "../src/js/validaciones.mjs";
import { validarName } from "../src/js/validaciones.mjs";


describe("Test Email funcion validarEmail()",  function ()
{
    it("Email valido", () =>{
        assert.equal(validarEmail("dmaestre@cifpfbmoll.net"),true);
        assert.equal(validarEmail("jmateo@cifpfbmoll.eu"),false);
    })
}
);

describe("Test nombre function validarName" , function ()
{
    it("Nombre valido", () =>{
        assert.equal(validarName("jmateo"),true);
        assert.equal(validarName("maestre2"),false)
    })
})

