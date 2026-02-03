import { createRoute, lazyRouteComponent } from '@tanstack/react-router'
import { rootRoute } from './root.route'

export const LoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: lazyRouteComponent(
    () => import("../pages/auth/login")
  ),
})

