"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const user_routes_1 = require("./routes/user.routes");
const note_routes_1 = require("./routes/note.routes");
dotenv_1.default.config();
const dbConnection_1 = require("./config/dbConnection");
(0, dbConnection_1.connectDb)();
const PORT = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "../", "src", "./views"));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    const current = new Date();
    res.render("launch", {
        day: Date.now(),
        time: current.getTime(),
    });
});
// app.use("/", (req, res) => {
//     res.status(200);
//     res.sendFile(path.join(__dirname, "../src/ui/launch.html"))
//     // res.status(200).json({"message": "here's your file"})
// })
app.use("/users", user_routes_1.router);
app.use("/notes", note_routes_1.noteRoutes);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
