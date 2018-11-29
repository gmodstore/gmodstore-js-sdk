const axios = require("axios");

module.exports = class Client {
	constructor(apiKey) {
		if(!apiKey) throw new Error("You did not supply an API key!");

		//Create custom axios instance for request
		this.http = axios.create({
			baseURL: "https://api.gmodstore.com/v2",
			headers: {Authorization: `Bearer ${apiKey}`}
		});
	}
};