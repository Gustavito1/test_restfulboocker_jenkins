export const Tokencharacters = (tokenLength) => {
    cy.get("@endpoint").then((response) => {
        token =response.body.token;
        expect(token.length).to.equal(Number(tokenLength))
    })

}