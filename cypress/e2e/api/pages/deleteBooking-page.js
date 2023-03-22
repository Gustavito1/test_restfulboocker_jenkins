export const DELETEBooking = () => {
    const url = `${Cypress.env("URL")}/booking/${bookingid}`;
        cy.request({
            method: "DELETE",
            url: url,
            headers: {
                "Content-type": "application/json",
                "Cookie": `token=${token}`
            }
        }).as("endpoint")
}