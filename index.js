require('babel-register');

const app = require('./src/app').app,
	  PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
	console.log('Server listening on port', PORT);
});