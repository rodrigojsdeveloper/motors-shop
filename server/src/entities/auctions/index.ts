import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Comment } from "../comments";
import { User } from "../users";
import { Bid } from "../bids";

@Entity("auctions")
class Auction {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  kilometers: number;

  @Column()
  ad_type: string;

  @Column()
  price: string;

  @Column()
  vehicle_type: string;

  @Column()
  images: string;

  @ManyToOne((type) => User, (user) => user.auctions)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.auction, {
    lazy: true,
  })
  comments: Comment[];

  @OneToMany((type) => Bid, (bid) => bid.auction, {
    lazy: true,
  })
  bids: Bid[];

  @Column()
  time_limit: string;
}

export { Auction };
