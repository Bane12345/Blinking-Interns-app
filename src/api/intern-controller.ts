import * as bcrypt from 'bcrypt';
import { InternModel } from './../entities/models';
import { InternRepository } from './../repositories/intern-repository';
import { ErrorStatusCode, SuccessStatusCode } from '../utils/status-codes';
import { Request, Response } from 'express';
import { sendResponse } from '../utils/response-wrapper';

export class InternController{

    public static async getInterns(_:Request, response:Response): Promise<any>{
        try{
            const interns = await InternRepository.find({});
            sendResponse(response, 200, SuccessStatusCode.Success, {interns})
        }catch(error){
            sendResponse(response, 400, ErrorStatusCode.Failure, {message:error.message});
        }
    }

    public static async getInternById(request:Request, response:Response): Promise<any>{
        try{
            const interns = await InternRepository.findOneById(parseInt(request.params.id));
            sendResponse(response, 200, SuccessStatusCode.Success, {interns})
        }catch(error){
            sendResponse(response, 400, ErrorStatusCode.Failure, {message:error.message});
        }
    }

    public static async addNewIntern(request: Request, response: Response): Promise<any> {
        try {
            const body: {intern: InternModel} = request.body;

            //First check if account with given email already exists
            const interns = await InternRepository.find({
                where: { email: body.intern.email }
            });

            if(interns.length!=0){
                //Account with given email already exists
                throw new Error(`Account with email:${body.intern.email} already exists`)
            }
            
            await InternRepository.insert(body.intern);
            sendResponse(response, 200, SuccessStatusCode.Success);
        } catch (error) {
            sendResponse(response, 400, ErrorStatusCode.Failure, {message: error.message});
        }
    }

    public static async loginIntern(request: Request, response:Response): Promise<any>{
        try{
            const credentials: {email:string, password:string} = request.body;
            const interns = await InternRepository.find({
                where: {email:credentials.email}
            });

            if(interns.length===0){
                //No results
                sendResponse(response, 400, ErrorStatusCode.InvalidEmail);
            }else{
                if(interns.length>1){
                    //Multiple accounts for given email - throw an error
                    throw new Error("Multiple accounts with email:"+credentials.email);
                }else{
                    //Single account with given email
                    const intern = interns[0];
                    if(await bcrypt.compare(credentials.password,intern.password)){
                        //Match - log in user
                        sendResponse(response, 200, SuccessStatusCode.Success);
                    }else{
                        sendResponse(response, 401, ErrorStatusCode.InvalidPassword);
                    }
                }
            }
        }catch(error){
            sendResponse(response, 500, ErrorStatusCode.Failure, {message: error.message});
        }
    }
}