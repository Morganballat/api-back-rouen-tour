const Parks = require('./parks');

db = require('../database');

const parksMapper = {
	allParks: async () => {
		const result = await db.query(`
     SELECT * 
     FROM parks ORDER BY rating;
     `);
		return result.rows.map((data) => new Parks(data));
	},
};

module.exports = parksMapper;
