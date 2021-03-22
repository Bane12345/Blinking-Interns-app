import { Task } from './task';
import { Intern } from './intern';
import { TaskStatus} from "./enums"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Assigned{
    
    @PrimaryColumn()
    internId!:number;
    
    @ManyToOne(() => Intern) 
    @JoinColumn({ name: "internId" })
    intern!: Intern;

    @PrimaryColumn()
    taskId!:number;

    @ManyToOne(()=> Task)
    @JoinColumn({name:"taskId"})
    task!:Task;

    @Column({name:"task_status",nullable:false,type:"enum",enum:TaskStatus})
    status!:TaskStatus;

    @Column({nullable:false,type:"text"})
    data!:string;

    @Column({nullable:false,type:"text"})
    deadline!:string;
}