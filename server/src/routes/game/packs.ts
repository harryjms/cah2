import express from "express";
import Game from "../../sequelize/models/Game";
import GamePlayer from "../../sequelize/models/GamePlayer";
import Pack from "../../sequelize/models/Pack";
import Player from "../../sequelize/models/Player";
const router = express.Router();

export default router.get("/packs", async (req, res, next) => {
  try {
    const packs = await Pack.findAll();
    res.json(packs);
  } catch (err) {
    next(err);
  }
});
