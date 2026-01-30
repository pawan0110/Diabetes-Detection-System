import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.send("Server running");
});

app.use("/api", analyzeRoutes)

app.listen(PORT, () => {
    console.log(`
🚀 Server is flying on port ${PORT}
🌍 Mode: ${process.env.NODE_ENV || 'development'}
  `);
});