import express from "express";
import create from "./create";

const router = express.Router();

export default router.use("/pack", [create]);
