import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    id: String,
    content: String
})

export const NoteModel = mongoose.model('note', noteSchema);
