import type { MaybePromise, Result, RuntimeRoute } from "ashes-urn";
import type { ROPT } from "..";

export async function gateway(contents: ROPT, routeObj: RuntimeRoute, app: ((...args: any[]) => MaybePromise<Result | any>)) {
    contents.logestic.warn('Oh something hit the gateway')
    return await app(contents)
}