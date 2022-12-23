import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { Bid } from "../bids"
import { Product } from "../products"

@Entity("auctions")
class Auction {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @OneToMany((type) => Bid, bid => bid.auction, {
        lazy: true
    })
    bids: Bid[]

    @OneToOne((type) => Product, {
        lazy: true
    })@JoinColumn()
    product: Product

    @Column({ type: "date" })
    time_limit: Date
}

export { Auction }
