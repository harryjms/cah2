import express, { NextFunction, Request, Response } from "express";
import ExpressError from "./helpers/ExpressError";
import game from "./routes/game";
import pack from "./routes/pack";
import sequelize from "./sequelize";
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("hello..");
});

app.use("/api", [game, pack]);

app.use(
  (error: ExpressError, req: Request, res: Response, next: NextFunction) => {
    if (error) {
      res.statusCode = error.statusCode || 500;
      console.error(error);
      res.send(error.message);
      return;
    }
    next();
  }
);

sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log("listening");
  });
});
