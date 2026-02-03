import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root.route";
import { LoginRoute } from "./guest.route";
import { guardRoute, HomeRoute } from "./guard.route";


const routeTree = rootRoute.addChildren([
    LoginRoute,
    guardRoute.addChildren([
        HomeRoute
    ]),
]);

export const router = createRouter({ routeTree });
