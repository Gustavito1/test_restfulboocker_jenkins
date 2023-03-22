import { savedToken } from "./tokenBD-page";

export const obtenerToken = (datatable) => {
    datatable.hashes().forEach(row => {
        cy.request({
            method: "POST",
            url: `${Cypress.env('URL')}/auth`, 
            headers: {
                "Content-Type": "application/json",
            },
            body:{
                "username": row.username,
                "password": row.password
            },
        }).as("endpoint");
    });
}
