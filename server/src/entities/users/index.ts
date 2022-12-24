import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm"
import { Address } from "../address"
import { Auction } from "../auctions"
import { Bid } from "../bids"
import { Comment } from "../comments"
import { Product } from "../products"


@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({ type: "string" })
    name: string

    @Column({ type: "string", unique: true })
    email: string

    @Column({ type: "string" })
    password: string

    @Column({ type: "string" })
    cellphone: string

    @Column({ type: "string", length: 11 })
    cpf: string

    @Column({ type: "string" })
    birthdate: string

    @Column({ type: "boolean" })
    is_seller: boolean

    @CreateDateColumn({ type: "date" })
    date_joined: Date

    @UpdateDateColumn({ type: "date" })
    updated_at: Date

    @OneToOne((type) => Address, {
        lazy: true
    })@JoinColumn()
    address: Address

    @OneToMany((type) => Product, product => product.user, {
        lazy: true
    })
    products: Product[]

    @OneToMany((type) => Comment, comment => comment.user, {
        lazy: true
    })
    comments: Comment[]

    @OneToMany((type) => Bid, bid => bid.user, {
        lazy: true
    })
    bids: Bid[]

    @OneToMany((type) => Auction, auction => auction.user, {
        lazy: true
    })
    auctions: Auction[]
}

export { User }
