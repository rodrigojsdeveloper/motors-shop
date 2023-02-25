import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  zip_code: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;
}

export { Address };
