const express = require('express');    
const tourRouter = require('./routes/tour.route');
const app = express();



app.use(express.json());

//we send a request from postman /api/v1/tours with body -> app.use(express.json()) as a middleware

app.use("/api/v1/tours", tourRouter);     //ctrl + space after tourRouter to import (line 2)

module.exports = app;
    