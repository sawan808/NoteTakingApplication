"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecificNote = exports.addNewNote = exports.getAllNotes = void 0;
const note_model_1 = require("../models/note.model");
const getAllNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield note_model_1.NoteModel.find({});
    if (notes) {
        res.status(200).json(notes);
    }
    else {
        res.status(400);
        throw new Error("cannot find notes");
    }
});
exports.getAllNotes = getAllNotes;
const addNewNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, content } = req.body;
    const note = yield note_model_1.NoteModel.create({ id, content });
    if (note) {
        res.status(201).json(note);
    }
    else {
        res.status(300).json({ message: "Failed to add note" });
    }
});
exports.addNewNote = addNewNote;
const getSpecificNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const note = yield note_model_1.NoteModel.findOne({ id });
    if (note) {
        res.status(200).json(note);
    }
    else {
        res.status(300).json({ message: "Cannot find note." });
    }
});
exports.getSpecificNote = getSpecificNote;
