export const verifiResponse = () => {
    cy.get("@endpoint").then((response) => {
        bookingid = response.body.bookingid;
        expect(bookingid).to.exist;
    })
}