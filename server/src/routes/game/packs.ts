import express from "express";
import Pack from "../../sequelize/models/Pack";
const router = express.Router();

export default router.get("/packs", async (req, res, next) => {
  try {
    const packs = await Pack.findAll();
    res.json(packs);
  } catch (err) {
    next(err);
  }
});
