import express from "express";
import create from "./create";
import packs from "./packs";

const router = express.Router();

export default router.use("/game", [create, packs]);
