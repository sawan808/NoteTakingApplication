import express from "express";
import dotenv from "dotenv";
import { router as UserRoutes } from "./routes/userRoutes";
import { noteRoutes } from "./routes/noteRoutes";

dotenv.config();

import { connectDb } from "./config/dbConnection";

connectDb();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use("/users", UserRoutes);
app.use("/notes", noteRoutes);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
