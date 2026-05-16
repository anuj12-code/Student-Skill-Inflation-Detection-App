import express from "express";
import { analyzeGithub } from "../controllers/githubController.js";

const router = express.Router();

router.post("/", analyzeGithub);

export default router;