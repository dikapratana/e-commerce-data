import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "./root.route";
import { getToken } from "../utils/token";

export const guardRoute = createRoute({
  beforeLoad: () => {
    const token = getToken();
    if (!token) {
      window.location.href = "/login";
    }
  },
  getParentRoute: () => rootRoute,
  id: "general",
  component: lazyRouteComponent(
    () => import("../components/layouts/guard-layout"),
  ),
});

export const CustomerRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/customer",
  component: lazyRouteComponent(() => import("../pages/customer")),
});
export const CustomerAddRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/customer/add",
  component: lazyRouteComponent(() => import("../pages/customer/add")),
});
export const CustomerEditRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/customer/edit/$id",
  component: lazyRouteComponent(() => import("../pages/customer/edit")),
});

export const CustomerDetailRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/customer/detail/$id",
  component: lazyRouteComponent(() => import("../pages/customer/detail")),
});

export const TransactionRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/transaction",
  component: lazyRouteComponent(() => import("../pages/transaction")),
});

export const TransactionAddRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/transaction/add",
  component: lazyRouteComponent(() => import("../pages/transaction/add")),
});

export const TransactionDetailRoute = createRoute({
  getParentRoute: () => guardRoute,
  path: "/transaction/detail/$id",
  component: lazyRouteComponent(() => import("../pages/transaction/detail")),
});
