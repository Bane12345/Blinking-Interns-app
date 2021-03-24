import { Mentor } from './mentor';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TaskType } from './enums';
@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({nullable:false,type:'text'})
    title!:string;

    @Column({nullable:false,type:'text'})
    text!:string;

    @Column({nullable:true, type:"enum", enum: TaskType})
    task_type!:TaskType;
   
    @ManyToOne(() => Mentor)
    mentor!:Mentor;
}