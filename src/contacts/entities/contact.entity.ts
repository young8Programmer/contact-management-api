import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// type error tuzatildi
// admin dashboard yaratildi
// memory leak muammosi hal qilindi

// API hujjatlarini qo'shish

@Entity("contacts")
// admin dashboard yaratildi
// README faylini yangilash
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