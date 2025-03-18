import express from "express";
const router = express.Router();
import { db } from "../models/index.js"

router.get('/students', async (req, res) => {
    // db.Student.find()
    //     .then(students => res.status(200).json(students));

    const students = await db.Student.find();
    res.status(200).json(students);

    //res.send(`Hello, World ${req.msg}`);
});
router.post('/students', async (req, res) => {
    console.log(`req.body >>`, req.body);
    // const students = await db.Student.find();
    // res.status(200).json(students);
});




export default router;
