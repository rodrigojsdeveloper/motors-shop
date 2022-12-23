import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Product } from "../products";
import { User } from "../users";


@Entity("comments")
class Comment {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({ type: "text" })
    content: string

    @CreateDateColumn({ type: "date" })
    created_at: Date

    @ManyToOne((type) => User, user => user.comments)
    user: User

    @ManyToOne((type) => Product, product => product.comments)
    product: Product
}

export { Comment }
