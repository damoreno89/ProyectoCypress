Feature: ingresa en la pagina de sauce

    como cliente de sauce quiero ingresar al aplicativo

    Scenario: verificar el ingreso y registro en pagina de sauce
        Given ingreso en la pagina de sauce
        When ingreso credenciales de ingreso
        Then verifico que ingreso exitosamente