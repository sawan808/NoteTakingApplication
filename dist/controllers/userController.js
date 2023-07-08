"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNotes = exports.getSpecificUser = exports.getAllUsers = void 0;
const users = [
    {
        id: 1,
        fullname: "Sawan Y",
        username: "sawany",
        password: "thebestpassword",
    },
    {
        id: 2,
        fullname: "John AB",
        username: "johnb",
        password: "thebestpassword",
    },
    {
        id: 3,
        fullname: "Mark Z",
        username: "MarkZuch",
        password: "thebestpassword",
    },
];
const notes = [
    {
        id: 1,
        content: "this is note 1",
    },
    {
        id: 2,
        content: "this is note 2",
    },
];
const getAllUsers = (req, res) => {
    res.status(200).json(users);
};
exports.getAllUsers = getAllUsers;
const getSpecificUser = (req, res) => {
    const userId = req.params.id;
    const user = users[userId];
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: "User does not exist" });
    }
};
exports.getSpecificUser = getSpecificUser;
const getAllNotes = (req, res) => {
    res.status(200).json(notes);
};
exports.getAllNotes = getAllNotes;
