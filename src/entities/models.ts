import {TaskStatus} from './enums'

export interface InternModel{
    full_name:string;
    email:string;
    password:string;
}

export interface MentorModel{
    full_name:string;
    email:string;
    password:string;
}

export interface TaskModel{
    task_id:number;
    media_id:number;
    title:string;
    text:string;
}

export interface AssignedModel{
    date:Date;
    deadline:Date;
    status:TaskStatus;
}

