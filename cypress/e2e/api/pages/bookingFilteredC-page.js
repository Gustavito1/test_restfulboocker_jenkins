export const bookingFilteredC = (datatable) => {
    const url = `${Cypress.env("URL")}/booking`;
    datatable.hashes().forEach((row) => {
        cy.log("bookingdates: " + JSON.stringify(row))
        cy.request({
            method: "GET",
            url: url,
            headers: {
                "Content-type": "application/json",
            },
            qs: {
                "checkin": row.checkin,
                "checkout": row.checkout
            }
        }).as("endpoint")
    })
}