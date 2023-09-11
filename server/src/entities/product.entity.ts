import { Comment } from "./comment.entity";
import { User } from "./user.entity";
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
  brand: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  fuel: string;

  @Column()
  kilometers: number;

  @Column()
  color: string;

  @Column()
  fipe: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column({ default: true })
  is_published: boolean;

  @Column()
  cover_image: string;

  @Column()
  primary_image: string;

  @Column()
  second_image: string;

  @ManyToOne((type) => User, (user) => user.products)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.product, {
    eager: true,
  })
  comments: Array<Comment>;
}

export { Product };
