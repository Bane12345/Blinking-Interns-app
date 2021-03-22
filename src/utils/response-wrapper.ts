import { Request, Response } from "express";
import { getStatusCodeDescription, SuccessStatusCode, ErrorStatusCode } from "./status-codes";

export function sendResponse(res: Response, status: number, statusCode: SuccessStatusCode | ErrorStatusCode, payload?: any): void {

    const message = getStatusCodeDescription(statusCode);

    res.status(status).json({ status, statusCode, message, payload });
}

export function sendInvalidMethodResponse(_: Request, response: Response): void {
    response.status(405).send();
}