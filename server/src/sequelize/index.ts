import { Sequelize } from "sequelize-typescript";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  dialect: "mysql",
  models: [__dirname + "/models"],
});

export default sequelize;
