import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// kod strukturasini yaxshilash
// type error tuzatildi
// README faylini yangilash
// admin dashboard yaratildi
// memory leak muammosi hal qilindi

// admin dashboard yaratildi
// API hujjatlarini qo'shish
// user authentication qo'shildi
// authentication xatosi tuzatildi

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