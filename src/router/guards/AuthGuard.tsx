import { Navigate, Outlet } from 'react-router-dom'

export default function AuthGuard() {
  const isAuth = false

  return isAuth ? <Outlet /> : <Navigate to='/login' />
}
