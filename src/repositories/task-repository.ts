import { getManager, In } from 'typeorm';
import { Task } from './../entities/task';


export class TaskRepository{

    public static async findTasks(taskIDArray:number[]){
        return await getManager().find(Task, {
            id: In(taskIDArray)
        });
    }
}