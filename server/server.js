const express = require('express');
const bodyParser = require('body-parser');
const busybee = require('./routes/getbusy.router');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC FILE SETUP/CONFIGURATION
app.use(express.static('public'));

// configuring our routes
app.use('getbusy', busybee);

// KICK OFF APP
app.listen(PORT, () => {
  console.log('Server running on PORT:', PORT);
});
