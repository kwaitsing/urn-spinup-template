import type { Module } from "ashes-urn";

const rootHandler = () => {
    return JSON.stringify({
        status: 'ok'
    })
}
const jwtVerifier = async () => {

}

export const ServerRoot: Module = {
    name: "Root",
    routes: [
        {
            method: "GET",
            path: "/",
            isDirect: false,
            handler: rootHandler
        }
    ]
}