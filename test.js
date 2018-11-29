//Import the gmodstore API key from .env
require("dotenv").config();

//Require the API client
let GmodstoreAPI = require(".");

let client = new GmodstoreAPI(process.env.GMODSTORE_API_KEY);
client.getAddons().then(console.log).catch(console.error);