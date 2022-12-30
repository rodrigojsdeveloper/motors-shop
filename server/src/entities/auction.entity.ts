import { Product } from "./product.entity";
import { Bid } from "./bid.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";

@Entity("auctions")
class Auction {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne((type) => Product, (product) => product.auction)
  product: Product;

  @OneToMany((type) => Bid, (bid) => bid.auction, {
    lazy: true,
  })
  bids: Bid[];

  @Column()
  time_limit: string;
}

export { Auction };
