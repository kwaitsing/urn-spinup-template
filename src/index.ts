import { URN, type Module, type RequestOPT } from "ashes-urn"
import { logger } from "toolbx"
import type { Serve } from "bun";
import { ServerRoot } from "./app/root/RootInterface";
import { gateway } from "./app/gateway";

// URN framework exported for other componments
export const urn = new URN({
    enableVerbose: false // Enable verbose on routing
})

// Use args, powered by minimist

const args = urn.args()

// use env

const env = urn.env()

// Database(mongodb+redis)
export const db = await urn.db('mongodb://localhost:27017', 'default') // db as mongodb interface
export const cachedb = await urn.cdb('redis://127.0.0.1:6379') // cdb as redis interface

/**
 * 
 * CheatSheet: Creating a working URN server instance
 * 
 * [createInstance] => loadInstance => igniteInstance
 * 
 */

export const instance = urn.createInstance()
    .onError(({ code }) => {
        return {
            status: 'er',
            data: {
                msg: 'Invaild request',
                code: code
            }
        }
    })
//.use(swagger()); if you wish you can chain more plugins to the instance here

export type MRequestOPT = RequestOPT & typeof instance['decorator'] // Extract RequestOPT for gateway and Modules

// createInstance => [loadInstance] => igniteInstance
const Modules: Module[] = [
    ServerRoot
]
urn.loadInstance(Modules, false, gateway) //Load root

/**
 * ref to https://bun.sh/docs/api/http#bun-serve
 */
const serverConf: Partial<Serve> = {
    hostname: '127.0.0.1', // This can be undefined
    port: 9901
}

urn.igniteInstance(serverConf)

logger(`+ URN running on ${serverConf.hostname}:${serverConf.port}`, 0)