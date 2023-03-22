import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const { validateResponse } = require("../pages/common-page");
const { obtenerToken } = require("../pages/token-page");
const { savedToken } = require('../pages/tokenBD-page');
const { Tokenalphanumeric } = require('../pages/alphanumeric-page');
const { Tokencharacters } = require('../pages/characters-page')
const { obtenerIdBooking } = require('../pages/bookingId-page');
const { bookingFiltered } = require('../pages/bookingFiltered-page');
const { bookingFilteredC } = require('../pages/bookingFilteredC-page');
const { CreateBooking } = require('../pages/createBooking-page');
const { verifiResponse } = require('../pages/verifyResponse-page');
const { GetSingleBooking } = require('../pages/getBooking-page');
const { verifyBookingCreate } = require('../pages/verifyBookingfound-page');
const { UPDATEBooking } = require('../pages/updateBooking-page');
const { PATCHBooking } = require('../pages/patchBooking-page');
const { DELETEBooking } = require('../pages/deleteBooking-page');
const { PING } = require('../pages/ping-page');

Given("User registered on the API", () => {});

When("I access the API request endpoint to create token", (datatable) => {
    obtenerToken(datatable);
  });
  
  Then("Verify the response status code {string}", (statusCode) => {
    validateResponse(statusCode);
  });
  
  Then("verify the token is saved on database", (token) => {
    savedToken(token);
  })

  Then("Verify the token contains {string} characters", (tokenLength) => {
    Tokencharacters(tokenLength);
  })
  
  Then("Verify the token contains only alphanumeric characters", () => {
    Tokenalphanumeric();
  })

Given("The access API request endpoint", () => {});

When("I access the API request endpoint to get all the booking ids", () => {
    obtenerIdBooking();
    });

When ("I acces the API request endpoint to get all the booking ids filtered by name", (datatable) => {
    bookingFiltered(datatable);
    });

When("I access the API request endpoint to get all the booking ids filtered by bookingdates", (datatable) => {
    bookingFilteredC(datatable) 
    });

Given("Booking not registered on the API", () => {
    });

When("I access the API request endpoint to create a new booking", (datatable) => {
    CreateBooking(datatable)
});
    
  Then("Verify the response body contains the bookingid", () => {
    verifiResponse();
  });

Given("Booking registered on the API", () => {})

When("I access the API request endpoint to get a single booking", () => {
  GetSingleBooking();
});
  
  Then("Verify if the booking found is the right one", (datatable) => {
    verifyBookingCreate(datatable);
  });
  
When("I access the API request endpoint to update a booking", (datatable) => {
  UPDATEBooking(datatable);
});

When("I access the API request endpoint to partial update a booking", (datatable) => {
  PATCHBooking(datatable)
});

When("I acces the request endpoint to delete a booking", () => {
  DELETEBooking();
});

Given("And endpoint to confirm whethere the API is up and running", () => {});

When ("I access the api request endpoint to confirm the API is running", () => {
  PING();
});