//const express = require("express"); //commonjs
import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;

const logger = (req, res, next) => {
    req.msg = `<br>This message is from Middleware !!!`;
    next();
}

const auth = (req, res, next) => {
    if(req.query.username === "Peter"){
        next()
    }else{
        res.send("Access Denied");
    }
}

app.use(logger);

app.get('/', (req, res) => {
    res.send(`Hello, World ${req.msg}`);
});

app.get('/login', auth, (req, res) => {
    res.send(`Welcome, ${req.query.username}`);
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));