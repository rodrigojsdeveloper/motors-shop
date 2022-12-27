import { Comment } from "../comments";
import { Auction } from "../auctions";
import { Product } from "../products";
import { Address } from "../address";
import { Bid } from "../bids";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  cellphone: string;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  description: string;

  @Column()
  birthdate: string;

  @Column()
  is_seller: boolean;

  @CreateDateColumn()
  date_joined: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne((type) => Address, {
    lazy: true,
  })
  @JoinColumn()
  address: Address;

  @OneToMany((type) => Product, (product) => product.user, {
    lazy: true,
  })
  products: Product[];

  @OneToMany((type) => Comment, (comment) => comment.user, {
    lazy: true,
  })
  comments: Comment[];

  @OneToMany((type) => Bid, (bid) => bid.user, {
    lazy: true,
  })
  bids: Bid[];

  @OneToMany((type) => Auction, (auction) => auction.user, {
    lazy: true,
  })
  auctions: Auction[];
}

export { User };
