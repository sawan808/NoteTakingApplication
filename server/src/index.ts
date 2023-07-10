import express from "express";
import dotenv from "dotenv";
import path from "path";
import { router as UserRoutes } from "./routes/user/user.routes";
import { noteRoutes } from "./routes/note/note.routes";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

// import { connectDb } from "./config/dbConnection";
import { connectDatabase } from "./config/dbConnection";
// connectDb();

const PORT = process.env.PORT || 5001;

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../", "src", "./views"));

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

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
app.use("/users", UserRoutes);
app.use("/notes", noteRoutes);

async function startServer() {
  await connectDatabase();
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}

startServer();
