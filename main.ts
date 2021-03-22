import { config } from "dotenv";
config();

import { env } from "./src/utils/env-wrapper";

import { createConnection } from "typeorm";
import { createServer } from "http";
import app from "./src/app";

(async function main(): Promise<void> {

    try {
        
        await createConnection();
        createServer(app).listen(env.port);
        console.log("yas")
    } catch (error) {
        console.log(error)
        process.exit(-1);
    }
})();
