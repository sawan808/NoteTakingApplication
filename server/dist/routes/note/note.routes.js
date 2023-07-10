"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRoutes = void 0;
const express_1 = __importDefault(require("express"));
const note_controller_1 = require("./note.controller");
exports.noteRoutes = express_1.default.Router();
exports.noteRoutes.post("/", note_controller_1.addNewNote);
exports.noteRoutes.get("/", note_controller_1.getAllNotes);
exports.noteRoutes.get("/:id", note_controller_1.getSpecificNote);
