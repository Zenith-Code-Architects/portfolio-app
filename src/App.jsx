
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
import Education from './pages/dashboard/pages/Education'
import AddEducation from './pages/dashboard/pages/Add-new/AddEducation'
import Licenses from './pages/dashboard/pages/Licenses'
import AddLicense from './pages/dashboard/pages/Add-new/AddLicense'
import AddBio from './pages/dashboard/pages/Add-new/AddBio'
import AddSkill from './pages/dashboard/pages/Add-new/AddSkill'

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
          path: "bio/add-bio",
          element: <AddBio/>
       },
        {
          path: "education",
          element: <Education/>
       },
        {
          path: "education/add-education",
          element: <AddEducation/>
       },
        {
          path: "skills",
          element: <Skills/>
       },
        {
          path: "skills/add-skill",
          element: <AddSkill/>
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
        path: "licenses",
        element: <Licenses/>
       },
       {
        path: "licenses/add-license",
        element: <AddLicense/>
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
