import express from "express";
import Pack from "../../sequelize/models/Pack";
const router = express.Router();

export default router.post("/create", async (req, res, next) => {
  try {
    const pack = await Pack.create(req.body);
    res.json(pack);
  } catch (err) {
    next(err);
  }
});
