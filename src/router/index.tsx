import { RouteObject, useRoutes } from 'react-router-dom'
import AuthGuard from './guards/AuthGuard'
import UnAuthGuard from './guards/UnAuthGuard'
import MainLayout from '~/layouts/MainLayout'
import AuthLayout from '~/layouts/AuthLayout'
import Auth from '~/pages/Auth'

const authRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthGuard />,
    children: [
      {
        path: '',
        element: (
          <MainLayout>
            <h1>Home</h1>
          </MainLayout>
        )
      }
    ]
  }
]

const unAuthRoutes: RouteObject[] = [
  {
    path: '',
    element: <UnAuthGuard />,
    children: [
      {
        path: 'login',
        element: (
          <AuthLayout>
            <Auth />
          </AuthLayout>
        )
      }
    ]
  }
]

const useRouterElement = () => {
  const router = useRoutes([...authRoutes, ...unAuthRoutes])

  return router
}

export default useRouterElement
