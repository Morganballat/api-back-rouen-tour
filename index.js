require('dotenv').config();

const port = process.env.PORT || 5049;

const express = require('express');

const app = express();

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
