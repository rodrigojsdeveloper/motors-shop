import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Auction } from "../auctions";
import { Product } from "../products";
import { User } from "../users";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.comments)
  user: User;

  @ManyToOne((type) => Product, (product) => product.comments)
  product: Product;

  @ManyToOne((type) => Auction, (auction) => auction.comments)
  auction: Auction;
}

export { Comment };
