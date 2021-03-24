import { Task } from './task';
import { Intern } from './intern';
import { TaskStatus} from "./enums"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Assigned{
    
    @PrimaryColumn()
    internID!:number;
    
    @ManyToOne(() => Intern) 
    @JoinColumn({ name: "internID" })
    intern!: Intern;

    @PrimaryColumn()
    taskID!:number;

    @ManyToOne(()=> Task)
    @JoinColumn({name:"taskID"})
    task!:Task;

    @Column({name:"task_status",nullable:false,type:"enum",enum:TaskStatus})
    status!:TaskStatus;

    @Column({nullable:false,type:"text"})
    date!:string;

    @Column({nullable:false,type:"text"})
    deadline!:string;

    @Column({nullable:true, type:'integer', default:0})
    progress!:number;
}