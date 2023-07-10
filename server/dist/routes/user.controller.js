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
exports.createUser = exports.loginUser = exports.getAllUsers = void 0;
const user_model_1 = require("../models/user.model");
// const users = [
//   {
//     id: 1,
//     fullname: "Sawan Y",
//     username: "sawany",
//     password: "thebestpassword",
//   },
//   {
//     id: 2,
//     fullname: "John AB",
//     username: "johnb",
//     password: "thebestpassword",
//   },
//   {
//     id: 3,
//     fullname: "Mark Z",
//     username: "MarkZuch",
//     password: "thebestpassword",
//   },
// ];
// const notes = [
//   {
//     id: 1,
//     content: "this is note 1",
//   },
//   {
//     id: 2,
//     content: "this is note 2",
//   },
// ];
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.UserModel.find({});
    res.status(200).json(users);
});
exports.getAllUsers = getAllUsers;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_model_1.UserModel.findOne({ email });
    if (!user) {
        res.status(404).json({ message: "User does not exist" });
    }
    if (user && user.password !== password) {
        res.status(400);
        throw new Error("Username/password does not match");
    }
    res.status(200).json({ message: "User logged in successfully" });
});
exports.loginUser = loginUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, firstName, lastName, email, password } = req.body;
    const user = yield user_model_1.UserModel.create({
        id,
        firstName,
        lastName,
        email,
        password,
    });
    if (user) {
        res.status(201).json(user);
    }
    else {
        res.status(400).json({ message: "Failed to create user" });
    }
});
exports.createUser = createUser;
