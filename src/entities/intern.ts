import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Intern{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({nullable:false,type:'text'})
    full_name!:string;

    @Column({nullable:false,type:'text'})
    email!:string;

    @Column({nullable:false,type:'text'})
    password!:string;
}