
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import PreviewPage from './pages/PreviewPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import DashboardLayout from './pages/Dashboard/layouts'
import Overview from './pages/Dashboard/pages/Overview'
import Skills from './pages/Dashboard/pages/Skills'
import Projects from './pages/Dashboard/pages/Projects'
import Achievements from './pages/Dashboard/pages/Achievements'
import Bio from './pages/Dashboard/pages/Bio'
import Experience from './pages/Dashboard/pages/Experience'
import Contact from './pages/Dashboard/pages/Contact'
import Socials from './pages/Dashboard/pages/Socials'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },

    { path: "login", element: <Login /> },

    { path: "signup", element: <SignUp /> },

    {
      path: "dashboard", element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview/>
       },
        {
          path: "bio",
          element: <Bio/>
       },
        {
          path: "skills",
          element: <Skills/>
       },
       {
        path: "projects",
        element:<Projects/>
       },
       {
        path: "experience",
        element:<Experience/>
       },
       {
        path: "achievements",
        element:<Achievements/>
       },
       {
        path: "contact",
        element: <Contact/>
       },
       {
        path: "socials",
        element: <Socials/>
       }
      ]
    },

    { path: "preview", element: <PreviewPage /> },
  ])



  return <RouterProvider router={router} />

}

export default App
