import { timeout } from "rxjs"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.get('h1',{timeout:1000}).should('contain','Lista de Actividades')
  })
})