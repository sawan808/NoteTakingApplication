"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const user_controller_1 = require("./user.controller");
exports.router.get("/dashboard", user_controller_1.getAllUsers);
exports.router.post("/login", user_controller_1.loginUser);
exports.router.post("/register", user_controller_1.createUser);
