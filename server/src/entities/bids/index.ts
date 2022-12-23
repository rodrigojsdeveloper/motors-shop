import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm"
import { Auction } from "../auctions"
import { User } from "../users"

@Entity("bids")
class Bid {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({ type: "string" })
    name: string

    @Column({ type: "string" })
    value: string

    @CreateDateColumn({ type: "date" })
    created_at: Date

    @OneToMany((type) => User, user => user.bids)
    user: User

    @OneToMany((type) => Auction, auction => auction.bids)
    auction: Auction
}

export { Bid }
