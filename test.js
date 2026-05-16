import express from "express";
import { getQuestions } from "../controllers/testController.js";

const router = express.Router();

router.get("/", getQuestions);

export default router;