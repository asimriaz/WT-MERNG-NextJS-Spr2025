import mongoose from "mongoose";
const { model, models, Schema } = mongoose;

const gradeSchema = new Schema({
	gradeid: Number,
	start: Number,
	end: Number,
	grade: String,
	gpa: Number
});

export const Grade = models.Grade || model('Grade', gradeSchema);
