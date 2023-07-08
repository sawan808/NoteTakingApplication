"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRoutes = void 0;
const express_1 = __importDefault(require("express"));
const noteController_1 = require("../controllers/noteController");
exports.noteRoutes = express_1.default.Router();
exports.noteRoutes.post("/", noteController_1.addNewNote);
exports.noteRoutes.get("/", noteController_1.getAllNotes);
exports.noteRoutes.get("/:id", noteController_1.getSpecificNote);
