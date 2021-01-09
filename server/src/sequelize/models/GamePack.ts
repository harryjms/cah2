import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Game from "./Game";
import Pack from "./Pack";
import Player from "./Player";

@Table
class GamePack extends Model<GamePack> {
  @ForeignKey(() => Game)
  @Column({
    type: DataType.UUID,
  })
  gameId!: string;

  @ForeignKey(() => Pack)
  @Column({
    type: DataType.UUID,
  })
  packId!: string;
}

export default GamePack;
