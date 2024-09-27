import { URN, type ignObj } from "ashes-urn"
import { logger } from "toolbx"

// URN framework exported for other componments
export const urn = new URN(true)

// Use args, powered by minimist

const args = urn.args()

// use env

const env = urn.env()

// Database(mongodb+redis)
export const db = await urn.db('mongodb://localhost:27017', 'default') // db as mongodb interface
export const cachedb = await urn.cdb('redis://127.0.0.1:6379') // cdb as redis interface

// Server conf for urn.ignite()
const serverConf: ignObj = {
    listen: '127.0.0.1', // This can be undefined
    port: 9901
}

// Launch server and print the banner
const server = await urn.ignite(serverConf, (server) => {
    // Error handling Warning this is a must don't ask me why
    server.onError(({ code }) => {
        return {
            status: 'er',
            data: {
                msg: 'Invaild request',
                code: code
            }
        }
    })
})

logger(`+ URN running on ${serverConf.listen}:${serverConf.port}`, 0)