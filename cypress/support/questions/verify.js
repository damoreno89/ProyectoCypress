const Elementos = require("../userinterfaces/Login_Sauce");

class VerifyLogin{
    pasos ={
        tiempo: ()=>cy.wait(2000),
        accion1: ()=>cy.xpath(Elementos.LBL_INGRESO_SAUCE, {timeout: 35000}),
    }

    LoginExitoso(){
        this.pasos.tiempo();
        this.pasos.accion1().should('be.visible').should('have.text', 'Products');
        this.pasos.foto();
    }
}