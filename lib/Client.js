module.exports = class Client {
	constructor(apiKey) {
		if(!apiKey) throw new Error("You did not supply an API key!");
		this.apiKey = apiKey;
	}
};