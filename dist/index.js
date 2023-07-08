"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = require("./routes/userRoutes");
const noteRoutes_1 = require("./routes/noteRoutes");
dotenv_1.default.config();
const dbConnection_1 = require("./config/dbConnection");
(0, dbConnection_1.connectDb)();
const PORT = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", userRoutes_1.router);
app.use("/notes", noteRoutes_1.noteRoutes);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
