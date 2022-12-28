import { Bid } from "../bids";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Product } from "../../entities/products";

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
