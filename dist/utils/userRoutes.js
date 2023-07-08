"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userController_1 = require("../controllers/userController");
router.get("/users", userController_1.getAllUsers);
router.get("/notes", userController_1.getAllNotes);
router.get("/users/:id", userController_1.getSpecificUser);
module.exports = router;
