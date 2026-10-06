import { createBrowserRouter, Navigate } from 'react-router-dom'
import LoginPage from '../features/auth/pages/LoginPage'
import UsersPage from '../features/users/pages/UsersPage'
import ProtectedRoute from '../shared/components/ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/users" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute>
        <UsersPage />
      </ProtectedRoute>
    ),
  },
])
