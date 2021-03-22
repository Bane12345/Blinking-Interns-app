import express from "express";
import { json } from "body-parser";

import * as router from './router/router'

const app: express.Application = express();

app.use(json({ limit: "50mb", type: "application/json" }));

app.use('/intern',router.InternRouter);
app.use('/mentor',router.MentorRouter);
app.use('/assigned',router.AssignedRouter);
app.use('/task',router.TaskRouter);

export default app;
