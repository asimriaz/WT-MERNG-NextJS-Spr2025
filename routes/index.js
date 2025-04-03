import express from 'express'
import { db } from '../models/index.js';
const router = express.Router();

router.get("/students/:regno", async (req, res) => {
    const student = await db.Student.findOne({ regno: req.params.regno });
    res.status(200).json(student);
});

router.get("/semesters", async (req, res) => {
    const semesters = await db.Course.distinct("semester");
    res.status(200).json(semesters)
});

export default router