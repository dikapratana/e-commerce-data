import { Outlet } from '@tanstack/react-router'

export default function GuestLayout() {
  return (
    <div className="auth-layout">
      <main>
        <Outlet />
      </main>
    </div>
  )
}
