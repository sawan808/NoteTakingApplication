import express from "express";

export const router = express.Router();
import { createUser, getAllUsers, loginUser } from "./user.controller";
import { addNewNote, getSpecificNote, getAllNotes } from "./note.controller";
router.get("/dashboard", getAllUsers);
router.post("/login", loginUser);
router.post("/register", createUser);
