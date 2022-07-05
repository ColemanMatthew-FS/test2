const express = require("express");
require("dotenv").config();
const app = express()

 app.get("/", (req, res, next) =>{
     res.json({
         message: "Did you GET IT?"
     });
})

//middleware modules fpr error handling
//goes here, creates a new error, then gets told to go to the second midddleware
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
})

//this middleware sends the error nicely
app.use((error, req, res, next) =>{
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            mathod: req.method
        }
    })
})

app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))