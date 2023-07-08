import express from 'express';

export const router = express.Router();
import { getAllUsers, getSpecificUser, getAllNotes } from '../controllers/userController'
router.get("/users", getAllUsers);
router.get("/notes", getAllNotes);
router.get("/users/:id", getSpecificUser)


