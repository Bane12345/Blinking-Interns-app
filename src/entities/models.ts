import {TaskStatus, TaskType} from './enums'

export interface InternModel{
    full_name:string;
    email:string;
    password:string;
}

export interface MentorModel{
    full_name:string;
    email:string;
    password?:string;
}

export interface TaskModel{
    task_id?:number;
    media_id?:number;
    title:string;
    text:string;
    task_type:TaskType
}

export interface AssignedModel{
    task_status:TaskStatus,
    //Name of a mentor who has assigned this task
    date:string,
    deadline:string,
    progress:number

    task:TaskModel,
    mentor?:MentorModel,
}

