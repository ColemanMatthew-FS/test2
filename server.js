const express = require("express");
require("dotenv").config();
const app = express()

app.get("/", (req, res, next) =>{
    res.json({
        message: "Did you GET IT?",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})

app.get("/45", (req, res, next) =>{
    res.json({
        message: "Did you GET IT (by ID)?",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
})

app.post("/", (req, res, next) =>{
    res.json({
        message: "Did you POST IT?",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
});

app.patch("/89", (req, res, next) =>{
    res.json({
        message: "Did you PATCH IT (by ID)?",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
});

app.delete("/9", (req, res, next) =>{
    res.json({
        message: "Did you DELETE IT (by ID)?",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method
        }
    });
});

//middleware modules fpr error handling
//goes here, creates a new error, then gets told to go to the second midddleware
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});

//this middleware sends the error nicely
app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});

app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))