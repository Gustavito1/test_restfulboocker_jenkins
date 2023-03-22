export const obtenerIdBooking = () => {
    const url = `${Cypress.env("URL")}/booking`;
    cy.request({
        method: "GET",
        url: url,
        headers: {
            "Content-type": "application/json",
        },
    }).as("endpoint");
}