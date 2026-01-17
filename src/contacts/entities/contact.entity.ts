import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// type error tuzatildi
// memory leak muammosi hal qilindi

// API hujjatlarini qo'shish

@Entity("contacts")
// admin dashboard yaratildi
// CI/CD pipeline sozlandi
// ESLint qoidalariga moslashtirish
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