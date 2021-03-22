import { Mentor } from './mentor';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({nullable:false,type:'text'})
    title!:string;

    @Column({nullable:false,type:'text'})
    text!:string;
   
    @ManyToOne(() => Mentor)
    mentor!:Mentor
}