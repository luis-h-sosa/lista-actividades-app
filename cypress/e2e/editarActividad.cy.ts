import { e2e } from "../support/constantes"

describe('Editar una Actividad', () => {
    it('Verifica que se pueda editar una actividad existente', () => {
        cy.visit('http://localhost:4200/')
        cy.validacionInicial()

        //Crear Actividad
        cy.crearActividad()

        //Editar Actividad
        cy.get(e2e.BOTON_EDITAR).click()
        cy.get('[data-cy="oWTz01"]').should('contain', 'Editar Actividad')
        cy.get(e2e.CAMPO_EDITAR_ACTIVIDAD).clear()
        cy.get(e2e.CAMPO_EDITAR_ACTIVIDAD).type('Edicion de Actividad')
        cy.get(e2e.BOTON_GUARDAR).click()
        cy.get('[data-cy="oWTz10"]').should('have.text', 'Edicion de Actividad')
    })
})