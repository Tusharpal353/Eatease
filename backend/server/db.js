/* const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
}; */
const mongoose = require("mongoose");
require('dotenv').config()
module.exports = async () => {
	const connectionString = process.env.MONGODB_CONNECT_URL;

	try {
		await mongoose.connect(connectionString, {
			serverSelectionTimeoutMS: 5000, // Optional: Adjust the timeout as needed
		});
		console.log("Connected to database successfully");
	} catch (error) {
		console.error("Database connection error:", error);
		console.log("Could not connect to the database!");
		process.exit(1); // Optional: Exit the process with a failure code
	}
};
