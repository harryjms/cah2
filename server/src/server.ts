import express from "express";
import game from "./routes/game";
import pack from "./routes/pack";
import sequelize from "./sequelize";
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("hello..");
});

app.use("/api", [game, pack]);

sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log("listening");
  });
});
