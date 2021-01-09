import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import GamePack from "./GamePack";
import GamePlayer from "./GamePlayer";
import Pack from "./Pack";
import Player from "./Player";

@Table
class Game extends Model<Game> {
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

  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  shortId!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: null,
  })
  gameEnd!: Date;

  @BelongsToMany(() => Player, () => GamePlayer)
  players!: Player[];

  @BelongsToMany(() => Pack, () => GamePack)
  packs!: Pack[];
}

export default Game;
