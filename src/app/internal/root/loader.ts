import type { Result, RuntimeRoute, Elysia, RequestOPT, ObjectAny } from "ashes-urn";
import { t } from "ashes-urn";
import { db, urn } from "../../..";
import { gateway } from "../../gateway";

const root = () => {
    let resultObject: Result = {
        status: 'ok',
        data: 'This is an URN server, supercharged by bun.sh!'
    }

    return resultObject
}

const dbDemo = async (contents: RequestOPT) => {
    const params = contents.params as ObjectAny // ObjectAny is an object that has Infinity key pairs

    const data = await db.get('Demo',
        {
            id: params.id
        } // Now you can use queryObject instead of a single key
        , {
            limit: 1,
            doSanitize: false
        } // Type: MongoIntFind, here you can add find options
    )

    return data
}

// Define Routes
const routes: RuntimeRoute[] = [
    {// This will be passed to your gateway
        path: '/',
        method: 'get',
        isDirect: true,
        handler: root
    },
    {// This will not be passed to your gateway
        path: '/:id',
        method: 'get',
        isDirect: false,
        handler: dbDemo,
        addon: {// This is optional
            params: t.Object({}) // You can define schema here, read more about it at https://elysiajs.com/validation/schema-type.html
        },
        SomeAddon: false // This is your extended key
    }
]


// Module Loader
// External will overwrite Internal routes, making it more flexible
export function loader(app: Elysia) {
    urn.loadRoute(routes, app, gateway, 'root') // Last arg is the module name
}