import { Auction } from "./auction.entity";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  kilometers: number;

  @Column()
  price: string;

  @Column({ default: true })
  is_active: boolean;

  @Column()
  ad_type: string;

  @Column()
  vehicle_type: string;

  @Column()
  cover_image: string;

  @Column()
  gallery_image: string;

  @OneToOne((type) => Auction, {
    eager: true,
  })
  @JoinColumn({ name: "auction_id" })
  auction: Auction;

  @ManyToOne((type) => User, (user) => user.products)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.product, {
    eager: true,
  })
  comments: Array<Comment>;
}

export { Product };
