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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const user_routes_1 = require("./routes/user/user.routes");
const note_routes_1 = require("./routes/note/note.routes");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
// import { connectDb } from "./config/dbConnection";
const dbConnection_1 = require("./config/dbConnection");
// connectDb();
const PORT = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.set("view engine", "hbs");
app.set("views", path_1.default.join(__dirname, "../", "src", "./views"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
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
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, dbConnection_1.connectDatabase)();
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    });
}
startServer();
