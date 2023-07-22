import { Comment } from "./comment.entity";
import { Product } from "./product.entity";
import { Address } from "./address.entity";
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

  @Column()
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
    eager: true,
  })
  @JoinColumn({ name: "address_id" })
  address: Address;

  @OneToMany((type) => Product, (product) => product.user, {
    eager: true,
  })
  products: Array<Product>;

  @OneToMany((type) => Comment, (comment) => comment.user, {
    eager: true,
  })
  comments: Array<Comment>;
}

export { User };
