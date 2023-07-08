"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const userController_1 = require("../controllers/userController");
exports.router.get("/users", userController_1.getAllUsers);
exports.router.get("/notes", userController_1.getAllNotes);
exports.router.get("/users/:id", userController_1.getSpecificUser);
