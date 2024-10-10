import type { MaybePromise, Result, RuntimeRoute } from "ashes-urn";
import type { MRequestOPT } from "..";

export async function gateway(contents: MRequestOPT, routeObj: RuntimeRoute, app: ((...args: any[]) => MaybePromise<Result | any>)) {
    contents.logestic.warn('Oh something hit the gateway')
    return await app(contents)
}