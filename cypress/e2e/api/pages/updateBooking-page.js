export const UPDATEBooking = (datatable) => {
    const url = `${Cypress.env("URL")}/booking/${bookingid}`;
    datatable.hashes().forEach((row) => {
        cy.request({
            method: "PUT",
            url: url,
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${token}`
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