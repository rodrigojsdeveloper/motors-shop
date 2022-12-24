import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Bid } from "../bids"
import { Comment } from "../comments"
import { User } from "../users"

@Entity("auctions")
class Auction {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({ type: "string" })
    name: string

    @Column({ type: "text" })
    description: string

    @Column({ type: "number" })
    year: number

    @Column({ type: "number" })
    kilometers: number

    @Column({ type: "string" })
    ad_type: string

    @Column({ type: "string" })
    price: string

    @Column({ type: "string" })
    vehicle_type: string

    @Column({ type: "string" })
    images: string

    @ManyToOne((type) => User, user => user.auctions)
    user: User

    @OneToMany((type) => Comment, comment => comment.auction, {
        lazy: true
    })
    comments: Comment[]

    @OneToMany((type) => Bid, bid => bid.auction, {
        lazy: true
    })
    bids: Bid[]

    @Column({ type: "string" })
    time_limit: string
}

export { Auction }
