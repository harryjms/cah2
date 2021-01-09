import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import Game from "./Game";
import GamePack from "./GamePack";

interface Cards {
  blackCards: BlackCard[];
  whiteCards: string[];
}

interface BlackCard {
  text: string;
  pick: number;
}

@Table({
  paranoid: true,
})
class Pack extends Model<Pack> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uuid!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
    unique: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.JSON,
    defaultValue: {},
  })
  cards!: Cards;

  @BelongsToMany(() => Game, () => GamePack)
  games!: Game[];
}

export default Pack;
