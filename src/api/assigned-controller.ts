import { AssignedModel } from './../entities/models';
import { TaskType, TaskStatus } from './../entities/enums';
import { TaskRepository } from './../repositories/task-repository';
import { ErrorStatusCode } from './../utils/status-codes';
import { AssignedRepository } from './../repositories/assigned-repository';
import { Request, Response } from 'express';
import { sendResponse } from '../utils/response-wrapper';
import { SuccessStatusCode } from '../utils/status-codes';


export class AssignedController{

    public static async getAllAssignments(request:Request, response:Response){
        try{
            const internID:number = parseInt(request.params.id)
            const assignments:AssignedModel[] = await AssignedRepository.getInternAssignment(internID);

            sendResponse(response, 200, SuccessStatusCode.Success, assignments);
        }catch(error){

            sendResponse(response, 500, ErrorStatusCode.UnknownError);
        }
        
    }
}