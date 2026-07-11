
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './app.routes.jsx'
import './index.css'
import { StrictMode } from 'react'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
