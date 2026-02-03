import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "./root.route";

export const guardRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "general",
  component: lazyRouteComponent(
    () => import("../components/layouts/guard-layout"),
  ),
});

export const HomeRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/customer",
  component: lazyRouteComponent(() => import("../pages/customer")),
});
