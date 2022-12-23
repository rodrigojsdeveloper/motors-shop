import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import { Auction } from '../auctions'
import { Comment } from '../comments'
import { User } from '../users'

@Entity('products')
class Product{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    year: number

    @Column()
    kilometers: number

    @Column()
    ad_type: string

    @Column()
    price: string

    @Column()
    vehicle_type: string

    @Column()
    images: string

    @OneToOne((type) => Auction, {
        lazy: true
    })@JoinColumn()
    auction: Auction

    @ManyToOne((type) => User, user => user.products)
    user: User

    @OneToMany((type) => Comment, comment => comment.product, {
        lazy: true
    })
    comments: Comment[]
}

export { Product }
