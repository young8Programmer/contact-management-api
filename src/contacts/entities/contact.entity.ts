import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// type error tuzatildi


@Entity("contacts")
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;
// database querylarni optimallashtirish

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column({nullable: true})
    email: string;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: Date;
}