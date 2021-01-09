import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import Game from "./Game";
import GamePlayer from "./GamePlayer";

@Table
class Player extends Model<Player> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uuid!: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  name!: string;

  @BelongsToMany(() => Game, () => GamePlayer)
  games!: Game[];
}

export default Player;
