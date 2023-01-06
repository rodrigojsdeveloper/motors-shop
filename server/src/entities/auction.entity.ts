import { Product } from "./product.entity";
import { Bid } from "./bid.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity("auctions")
class Auction {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne((type) => Product, {
    eager: true,
  })
  @JoinColumn({ name: "product_id" })
  product: Product;

  @OneToMany((type) => Bid, (bid) => bid.auction, {
    eager: true,
  })
  bids: Array<Bid>;

  @Column()
  time_limit: string;
}

export { Auction };
