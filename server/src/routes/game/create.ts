import express from "express";
import Game from "../../sequelize/models/Game";
import GamePlayer from "../../sequelize/models/GamePlayer";
import Player from "../../sequelize/models/Player";
const router = express.Router();

export default router.post("/create", async (req, res, next) => {
  const { gameName, playerName, packId } = req.body;
  try {
    const player = await Player.create({ name: playerName });
    const game = await Game.create({ name: gameName });
    await GamePlayer.create({
      userId: player.uuid,
      gameId: game.uuid,
      isCreator: true,
      isHost: true,
      isCzar: false,
    });
    res.json({ gameId: game.uuid, playerId: player.uuid });
  } catch (err) {
    next(err);
  }
});
