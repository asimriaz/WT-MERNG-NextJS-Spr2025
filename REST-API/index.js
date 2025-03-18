//const express = require("express"); //commonjs
import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
import indexRoutes from "./routes/index.js";

app.use(express.json());
app.use("/api", indexRoutes);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));