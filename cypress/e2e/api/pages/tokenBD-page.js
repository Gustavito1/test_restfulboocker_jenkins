 
import { config } from "../config";

export const savedToken = (token) => {
    cy.get("@endpoint").then((response) => {
        token = response.body.token;
        cy.task("DATABASE", {
            dbConfig: config,
            sql: `INSERT INTO table_token VALUES ('${token}')`
        
        });
    });
}