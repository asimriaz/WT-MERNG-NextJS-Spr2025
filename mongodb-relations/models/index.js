import mongoose from "mongoose";
import { Course } from "./Course.js";
import { Grade } from "./Grade.js"
import { Head } from "./Head.js"
import { Mark } from "./Mark.js"
import { Student } from "./Student.js"

(async () => {
    if (mongoose.connection.readyState === 1) {
        return true;
    }
    try {
        await mongoose.connect("mongodb://localhost:27017/recapsheet");
        return true;
    } catch (error) {
        console.log(error);

    }
})();

export const db = {
    Course, Student, Head, Mark, Grade
}