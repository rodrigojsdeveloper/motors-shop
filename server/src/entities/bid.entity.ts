import { Auction } from "./auction.entity";
import { User } from "./user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

@Entity("bids")
class Bid {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  value: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany((type) => User, (user) => user.bids)
  user: User;

  @OneToMany((type) => Auction, (auction) => auction.bids)
  auction: Auction;
}

export { Bid };
