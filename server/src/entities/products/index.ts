import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { Comment } from '../comments'
import { User } from '../users'

@Entity('products')
class Product{

    @PrimaryGeneratedColumn('uuid')
    id: string

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

    @ManyToOne((type) => User, user => user.products)
    user: User

    @OneToMany((type) => Comment, comment => comment.product, {
        lazy: true
    })
    comments: Comment[]
}

export { Product }
