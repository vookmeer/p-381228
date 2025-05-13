const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.get("/", async (req, res) => {
    try {
        res.json({ message: "Hello from the server!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



app.listen(3001, console.log("Server Running"))