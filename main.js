import express from "express";
import ConnectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

ConnectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});