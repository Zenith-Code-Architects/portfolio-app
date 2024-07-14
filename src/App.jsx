
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import PreviewPage from './pages/PreviewPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Overview from './pages/dashboard/pages/Overview'
import Skills from './pages/dashboard/pages/Skills'
import Socials from './pages/dashboard/pages/Socials'
import Contact from './pages/dashboard/pages/Contact'
import DashboardLayout from './pages/dashboard/layouts/index'
import Bio from './pages/dashboard/pages/Bio'
import Experiences from './pages/dashboard/pages/Experiences'
import Achievements from './pages/dashboard/pages/Achievements'
import Projects from './pages/dashboard/pages/Projects'
import AddExperience from './pages/dashboard/pages/Add-new/AddExperience'
import AddAchievement from './pages/dashboard/pages/Add-new/AddAchievement'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },

    { path: "login", element: <Login /> },

    { path: "signup", element: <SignUp /> },

    {
      path: "dashboard", element: <DashboardLayout/>,
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
        element: <Projects/>
       },
       {
        path: "experiences",
        element: <Experiences/>
       },
       {
        path: "experiences/add-experience",
        element: <AddExperience/>
       },
       {
        path: "achievements",
        element: <Achievements/>
       },
       {
        path: "achievements/add-achievement",
        element: <AddAchievement/>
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
