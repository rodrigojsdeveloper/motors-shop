import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "../users";


@Entity("address")
class Address {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({ type: "string", length: 8 })
    zip_code: string

    @Column({ type: "string" })
    country: string;

    @Column({ type: "string" })
    state: string

    @Column({ type: "string" })
    city: string

    @Column({ type: "string"  })
    district: string;

    @Column({ type: "string" })
    street: string

    @Column({ type: "number" })
    number: number

    @Column({ type: "text" })
    complement: string

    @OneToOne((type) => User, {
        eager: true
    })@JoinColumn()
    user: User
}

export { Address }
