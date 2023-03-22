export const Tokenalphanumeric = () => {
    cy.get("@endpoint").then((response) => {
        expect(token.includes('^[a-zA-Z0-9]*$')).to.equal(false);
    })
}