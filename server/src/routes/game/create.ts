import express from "express";
import ExpressError from "../../helpers/ExpressError";
import HttpStatusCode from "../../helpers/HTTPStatusCodes";
import Game from "../../sequelize/models/Game";
import GamePack from "../../sequelize/models/GamePack";
import GamePlayer from "../../sequelize/models/GamePlayer";
import Pack from "../../sequelize/models/Pack";
import Player from "../../sequelize/models/Player";
const router = express.Router();

export default router.post("/create", async (req, res, next) => {
  const { gameName, playerName, packId } = req.body;
  const error = new ExpressError();

  try {
    // Check pack ID was provided
    if (!packId) {
      error.statusCode = HttpStatusCode.BAD_REQUEST;
      error.message = "Pack ID is missing";
      throw error;
    }

    // Check pack exists
    const pack = await Pack.findOne({ where: { uuid: packId } });
    if (!pack) {
      error.statusCode = HttpStatusCode.NOT_FOUND;
      error.message = "A pack was not found with that ID";
      throw error;
    }

    // Create player
    const player = await Player.create({ name: playerName });
    // Create game
    const game = await Game.create({ name: gameName });

    // Link game and pack
    await GamePack.create({ gameId: game.uuid, packId: pack.uuid });

    // Link game and player
    await GamePlayer.create({
      userId: player.uuid,
      gameId: game.uuid,
      isCreator: true,
      isHost: true,
      isCzar: false,
    });

    // Send back the game, player and pack IDs
    res.json({ gameId: game.uuid, playerId: player.uuid, packId: pack.uuid });
  } catch (err) {
    next(err);
  }
});
