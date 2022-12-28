import { Auction } from "../../entities/auctions";
import { Comment } from "../comments";
import { User } from "../users";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @ManyToOne((type) => User, (user) => user.products)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.product, {
    lazy: true,
  })
  comments: Comment[];

  @OneToOne((type) => Auction, (auction) => auction.product)
  auction: Auction;
}

export { Product };
