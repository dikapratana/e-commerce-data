import { createRootRoute, redirect } from "@tanstack/react-router";
import MainLayout from "../components/layouts/main-layout";
import { isAuthenticated } from "../utils/token";

export const rootRoute = createRootRoute({
  beforeLoad: ({ location }) => {
    const isAuth = isAuthenticated();
    const pathname = location.pathname;

    if (!isAuth && pathname !== "/login") {
      throw redirect({
        to: "/login",
      });
    }

    if (isAuth && (pathname === "/login" || pathname === "/")) {
      throw redirect({
        to: "/customer",
      });
    }
  },
  component: MainLayout,
});
