const Elementos = require("../userinterfaces/Login_Sauce");



class EnterCredentials{
    pasos ={
        accion1: ()=>cy.get(Elementos.TXT__USERNAME, {timeout: 35000}),
        accion2: ()=>cy.xpath(Elementos.TXT__PASSWORD, {timeout: 25000}),
        accion3: ()=>cy.xpath(Elementos.BTN_lOGIN, {timeout: 15000}),
        tiempo:() =>cy.wait(1500)
    }

    credenciales(){
        this.pasos.accion1().click();
        this.pasos.accion1().type("standard_user", {force:true});
        this.pasos.accion2().click();
        this.pasos.accion2().type("secret_sauce", {force:true});
        this.pasos.accion3().click();
        this.pasos.tiempo();
    }


}

module.exports= new EnterCredentials();