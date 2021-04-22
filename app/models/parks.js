const db = require('../database');

class Parks {
	id;
	creation_date;
	address;
	descritpion;
	user_id;
	comment;
	rating;
	type;

	constructor(data) {
		for (const prop in data) {
			this[prop] = data[prop];
		}
	}
}

module.exports = Parks;
