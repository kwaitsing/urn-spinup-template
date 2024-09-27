import type { RequestOPT, Result, RuntimeRoute } from "ashes-urn";

export async function gateway(contents: RequestOPT, routeObj: RuntimeRoute, app: ((...args: any[]) => Promise<Result>) | ((...args: any[]) => any)) {
    return await app(contents)
}