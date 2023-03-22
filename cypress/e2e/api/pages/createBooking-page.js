export const CreateBooking = (datatable) => {
    const url = `${Cypress.env("URL")}/booking`;
    datatable.hashes().forEach((row) => {
        cy.request({
            method: "POST",
            url: url,
            headers: {
                "Content-type": "application/json",
            },
            body: {
                "firstname": row.firstname,
                "lastname": row.lastname,
                "totalprice": Number(row.totalprice),
                "depositpaid": Boolean(row.depositpaid),
                "bookingdates": {
                    "checkin": row.checkin,
                    "checkout": row.checkout
                },
                "additionalneeds": row.additionalneeds
            }
        }).as("endpoint")
    })
}
