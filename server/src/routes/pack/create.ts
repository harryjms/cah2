import express from "express";
import ExpressError from "../../helpers/ExpressError";
import Pack from "../../sequelize/models/Pack";
const router = express.Router();

export default router.post("/create", async (req, res, next) => {
  try {
    const pack = await Pack.create(req.body);
    res.json(pack);
  } catch (err) {
    const error = new ExpressError();
    if (err.name === "SequelizeUniqueConstraintError") {
      error.statusCode = 409;
      error.message = "A pack with this name already exists.";
    }
    next(error);
  }
});
