
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import PreviewPage from './pages/PreviewPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <LandingPage />},
    {path:"login", element:<Login />  },
    {path:"sign-up", element: <SignUp /> },
    {path:"dashboard", element: <Dashboard />  },
    {path:"preview", element: <PreviewPage />  },
  ])
  


  return <RouterProvider router={router}/>
  
}

export default App
