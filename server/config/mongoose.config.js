const mongoose = require("mongoose");

// Change name of db as needed!
mongoose.connect("mongodb://127.0.0.1/jobsdb", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));