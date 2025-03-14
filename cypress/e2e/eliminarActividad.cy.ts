import { e2e } from "../support/constantes"

describe('Eliminar una Actividad', () => {
    it('Verifica que se pueda eliminar una actividad de la lista.', () => {
        cy.visit('http://localhost:4200/')
        cy.validacionInicial()

        //Crear Actividad
        cy.crearActividad()

        //Eliminar Actividad
        cy.get(e2e.BOTON_ELIMINAR).click()
        cy.get('[data-cy="oWTz10"]').should('not.exist')
    })
})