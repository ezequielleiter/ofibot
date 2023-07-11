
const mongoose = require("mongoose");


class Service {

	constructor() {
		this.mongoInit().catch(e => console.log(e, 'error on mongo connection'));
	}

	async mongoInit() {
		return new Promise(async (resolve, reject) => {
			try {
				if (this.isDbConnected) return;

				const db = await mongoose.connect('mongodb://localhost:27017/config');
				this.isDbConnected = db.connections[0].readyState;
				resolve(db.connections[0].readyState);
			} catch (e) {
				reject(e);
			}
		});
	}
}

module.exports = Service