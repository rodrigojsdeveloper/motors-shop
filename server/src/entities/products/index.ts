import { Comment } from "../comments";
import { User } from "../users";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity("products")
class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  kilometers: number;

  @Column()
  price: string;

  @Column()
  vehicle_type: string;

  @Column()
  images: string;

  @ManyToOne((type) => User, (user) => user.products)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.product, {
    lazy: true,
  })
  comments: Comment[];
}

export { Product };
