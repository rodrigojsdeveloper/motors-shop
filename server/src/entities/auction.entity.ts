import { Product } from "./product.entity";
import { Bid } from "./bid.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("auctions")
class Auction {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToMany((type) => Bid, (bid) => bid.auction, {
    eager: true,
  })
  bids: Array<Bid>;

  @OneToOne((type) => Product, {
    eager: true,
  })
  @JoinColumn({ name: "product_id" })
  product: Product;

  @ManyToOne((type) => User, (user) => user.auctions)
  user: User;

  @Column()
  time_limit: string;
}

export { Auction };
