import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './about section/About'
import Homepage from './components/homepage/Homepage'
import BookNow from './components/booking page/BookNow'
import Register from './components/Register'
import AuthProvider from './provider/AuthProvider'
import Login from './components/Login'
import PrivetRoutes from './privetRoutes/PrivetRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/booknow',
        element: <PrivetRoutes><BookNow></BookNow></PrivetRoutes>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
