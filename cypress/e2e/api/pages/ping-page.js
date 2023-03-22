export const PING = (datatable) => {
    const url = `${Cypress.env("URL")}/ping`;
    cy.request({
        method: "GET",
        url: url
    }).as("endpoint")
}