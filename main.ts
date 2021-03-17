import { env } from "./src/utils/env-wrapper";

import { createConnection } from "typeorm";
import { createServer } from "http";
import app from "./src/app";

(async function main(): Promise<void> {

    try {

        await createConnection();
        createServer(app).listen(env.port);
        
    } catch (error) {
        process.exit(-1);
    }
})();
