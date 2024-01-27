import { Navigate, Outlet } from 'react-router-dom'

export default function UnAuthGuard() {
  const isAuth = false

  return isAuth ? <Navigate to='/' /> : <Outlet />
}
