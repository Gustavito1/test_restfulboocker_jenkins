export const bookingFiltered = (datatable) => {
    const url = `${Cypress.env("URL")}/booking`;
    datatable.hashes().forEach((row) => {
        cy.request({
            method: "GET",
            url: url,
            headers: {
                "Content-type": "application/json",
            },
            qs: {
                "firstname": row.firstname,
                "lastname": row.lastname
            }
        }).as("endpoint")
    })
}