import express from "express";
import { analyzeDiabetes } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/analyze", analyzeDiabetes);

export default router;

