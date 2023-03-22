export const verifyBookingCreate = (datatable) => {
    cy.get("@endpoint").then((response) => {
        datatable.hashes().forEach((row) => {
            expect(row.firstname).to.equal(response.body.firstname);
            expect(row.lastname).to.equal(response.body.lastname);
            expect(Number(row.totalprice)).to.equal(response.body.totalprice);
            expect(Boolean(row.depositpaid)).to.equal(response.body.depositpaid);
            expect(row.checkin).to.equal(response.body.bookingdates.checkin);
            expect(row.checkout).to.equal(response.body.bookingdates.checkout);
            expect(row.additionalneeds).to.equal(response.body.additionalneeds);
        })
    })
}