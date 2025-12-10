const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// Routes import
const blog = require("./routes/blog");

// Mount
app.use("/api/v1", blog);

// Default route 
app.get("/", (req, res) => {
    res.send(`<h1>This is my homepage</h1>`);
    console.log("we are in home page");
});

// Database
const connectWithDb = require("./config/database");
connectWithDb();

// Start server
app.listen(PORT, () => {
    console.log("app is running on port", PORT);
});
