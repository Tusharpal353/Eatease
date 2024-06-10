require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const bookingRoutes=require("./routes/bookings");
const adminRoutes = require("./routes/admin");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
/* app.use("/api/admin", adminRoutes); */
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on port ${port}...`));