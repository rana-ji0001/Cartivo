
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './app.routes.jsx'
import './index.css'
import { AuthProvider } from './Context/AuthContext.jsx'
import { Provider } from 'react-redux'
import {store} from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </Provider>
)
