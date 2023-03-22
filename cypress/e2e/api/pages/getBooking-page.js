export const GetSingleBooking = () => {
    const url = `${Cypress.env("URL")}/booking/${bookingid}`
    cy.request({
        method: "GET",
        url: url,
        headers: {
            "Content-type": "application/json"
        }
    }).as("endpoint")
}