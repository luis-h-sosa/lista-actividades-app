import { e2e } from "../support/constantes"

describe('Agregar una Actividad', () => {
    it('Verifica que se pueda agregar una nueva actividad a la lista', () => {
        cy.visit('http://localhost:4200/')
        cy.validacionInicial()

        //Agregar una actividad - test ABC
        cy.crearActividad()
        cy.get('[data-cy="oWTz10"]').should('have.text', 'Actividad de Prueba')
    })
})