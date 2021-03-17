import express from "express";
import { json } from "body-parser";
import { sendInvalidMethodResponse } from "./utils/response-wrapper";

const app: express.Application = express();

app.use(json({ limit: "50mb", type: "application/json" }));

app.use(sendInvalidMethodResponse);

export default app;
