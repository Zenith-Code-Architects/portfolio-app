
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
import Bio from './pages/Dashboard/pages/Bio/Bio'
import Contact from './pages/Dashboard/pages/Contact/Contact'
import Socials from './pages/Dashboard/pages/Socials'
import Experiences from './pages/Dashboard/pages/Experiences/Experiences'
import AddExperience from './pages/Dashboard/pages/Experiences/addExperience'
import Achievements from './pages/Dashboard/pages/achievements/Achievements'
import AddAchievements from './pages/Dashboard/pages/achievements/addAchievements'

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
        path: "experiences",
        element:<Experiences/>
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
        element: <AddAchievements/>
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
