import express from "express";
import dotenv from "dotenv";
import {router} from './routes/userRoutes';

dotenv.config()
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));