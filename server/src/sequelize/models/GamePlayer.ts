import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Game from "./Game";
import Player from "./Player";

@Table
class GamePlayer extends Model<GamePlayer> {
  @ForeignKey(() => Game)
  @Column({
    type: DataType.UUID,
  })
  gameId!: string;

  @ForeignKey(() => Player)
  @Column({
    type: DataType.UUID,
  })
  userId!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isCreator!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isCzar!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isHost!: boolean;
}

export default GamePlayer;
