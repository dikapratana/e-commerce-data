import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root.route";
import { LoginRoute } from "./guest.route";
import {
  CustomerAddRoute,
  CustomerDetailRoute,
  CustomerEditRoute,
  CustomerRoute,
  guardRoute,
  TransactionAddRoute,
  TransactionDetailRoute,
  TransactionRoute,
} from "./guard.route";

const routeTree = rootRoute.addChildren([
  LoginRoute,
  guardRoute.addChildren([
    CustomerRoute,
    CustomerAddRoute,
    CustomerEditRoute,
    TransactionRoute,
    TransactionAddRoute,
    TransactionDetailRoute,
    CustomerDetailRoute,
  ]),
]);

export const router = createRouter({ routeTree });
