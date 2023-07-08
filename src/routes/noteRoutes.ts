import express from 'express';

import {addNewNote, getAllNotes, getSpecificNote} from '../controllers/noteController';
import { get } from 'mongoose';

export const noteRoutes = express.Router();

noteRoutes.post("/", addNewNote);
noteRoutes.get("/", getAllNotes);
noteRoutes.get("/:id", getSpecificNote);
