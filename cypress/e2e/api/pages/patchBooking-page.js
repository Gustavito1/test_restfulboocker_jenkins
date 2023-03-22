export const PATCHBooking = (datatable) => {
    const url = `${Cypress.env("URL")}/booking/${bookingid}`;
    datatable.hashes().forEach((row) => {
        cy.request({
            method: "PATCH",
            url: url,
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${token}`
            },
            body:{
                "firstname": row.firstname,
                "lastname": row.lastname
            }
        }).as("endpoint")
    })
}