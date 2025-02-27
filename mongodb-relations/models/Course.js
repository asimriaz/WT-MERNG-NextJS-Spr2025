import mongoose from "mongoose"
const { Schema, models, model } = mongoose;

const courseSchema = new Schema({
    courseid: Number,
    code: String, 
    title: String, 
    crhr: Number,
    semester: Number    
});

export const Course = models.Course || model('Course', courseSchema);