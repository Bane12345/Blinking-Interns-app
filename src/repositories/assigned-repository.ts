import { AssignedModel } from './../entities/models';
import { getManager } from 'typeorm';
import { Task } from './../entities/task';
import { FindManyOptions, In } from 'typeorm';
import { Assigned } from '../entities/assigned';

export class AssignedRepository{

    public static async getInternAssignment(internID:number){
        let assignments =  await getManager().find(Assigned, {
            where:{ internID }, 
            relations: ['task','task.mentor']
        });

        let taskIDArray = assignments.map( assignment => assignment.taskID);

        let tasks = await getManager().find(Task, {
            where: {id: In (taskIDArray)}, relations: ["mentor"]
        })
        

        let arrayOfAssignments: AssignedModel[]=[]

        assignments.forEach((assignment,index)=>{
            arrayOfAssignments[index]={
                date: assignment.date,
                deadline: assignment.deadline,
                progress: assignment.progress,
                task_status: assignment.status,

                task:{
                    title: tasks[index].title,
                    text: tasks[index].text,
                    task_type: tasks[index].task_type,
                },

                mentor:{
                    full_name: tasks[index].mentor.full_name,
                    email: tasks[index].mentor.email,
                }
                
            }
        })

        return arrayOfAssignments;
    }   
}