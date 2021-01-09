import express from "express";
import Game from "../sequelize/models/Game";
import GamePlayer from "../sequelize/models/GamePlayer";
import Player from "../sequelize/models/Player";

const router = express.Router();

export default router.post("/test", async (req, res, next) => {
  try {
    const user = await Player.create({ name: "Harry" });
    const game = await Game.create({ name: "Test game" });
    const gamePlayer = await GamePlayer.create({
      userId: user.uuid,
      gameId: game.uuid,
    });

    const userData = await Player.findAll({
      include: [{ model: Game }],
    });
    res.json({ user, game, gamePlayer, userData });
  } catch (err) {
    next(err);
  }
});
