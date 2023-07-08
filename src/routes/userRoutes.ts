import express from 'express';

export const router = express.Router();
import { createUser, getAllUsers, loginUser } from '../controllers/userController'
import { addNewNote, getSpecificNote, getAllNotes} from  '../controllers/noteController'
router.get("/dashboard", getAllUsers);
router.post("/login", loginUser)
router.post("/register", createUser);


