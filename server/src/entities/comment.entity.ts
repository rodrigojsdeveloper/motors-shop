import { Product } from "./product.entity";
import { User } from "./user.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  content: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type) => User, (user) => user.comments)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne((type) => Product, (product) => product.comments)
  @JoinColumn({ name: "product_id" })
  product: Product;
}

export { Comment };
