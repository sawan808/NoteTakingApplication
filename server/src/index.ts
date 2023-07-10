import express from "express";
import dotenv from "dotenv";
import path from "path";
import { router as UserRoutes } from "./routes/user.routes";
import { noteRoutes } from "./routes/note.routes";

dotenv.config();

import { connectDb } from "./config/dbConnection";

connectDb();

const PORT = process.env.PORT || 5001;

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../", "src", "./views"));

app.use(express.json());

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

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
