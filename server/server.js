const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

// Change the routes address as needed to the particular routes file!
require('./routes/jobs.routes')(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));