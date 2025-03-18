import mongoose from "mongoose";
const { model, models, Schema } = mongoose;

const headSchema = new Schema({
	hid: Number,
	headname: String,
	total: Number
});

export const Head = models.Head || model('Head', headSchema);
