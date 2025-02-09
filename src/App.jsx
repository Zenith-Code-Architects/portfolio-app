
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import PreviewPage from './pages/PreviewPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Overview from './pages/Dashboard/pages/Overview'
import Skills from './pages/Dashboard/pages/Skills'
import DashboardLayout from './pages/Dashboard/layouts/index'
import Bio from './pages/Dashboard/pages/Bio'
import Experiences from './pages/Dashboard/pages/Experiences'
import Achievements from './pages/Dashboard/pages/Achievements'
import Projects from './pages/Dashboard/pages/Projects'
import AddExperience from './pages/Dashboard/pages/Add-new/AddExperience'
import AddAchievement from './pages/Dashboard/pages/Add-new/AddAchievement'
import Education from './pages/Dashboard/pages/Education'
import AddEducation from './pages/Dashboard/pages/Add-new/AddEducation'
import Licenses from './pages/Dashboard/pages/Licenses'
import AddLicense from './pages/Dashboard/pages/Add-new/AddLicense'
import AddBio from './pages/Dashboard/pages/Add-new/AddBio'
import AddSkill from './pages/Dashboard/pages/Add-new/AddSkill'
import AddProjects from './pages/Dashboard/pages/Add-new/AddProjects'
import AuthLayout from './pages/auth/layouts/authLayout'
import NotFound from "./pages/NotFound";
import { toast } from "react-toastify";
import { apiGetUserDetails } from "./services/preview";


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },

    {
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },

    {
      path: "dashboard", element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />
        },
        {
          path: "bio",
          element: <Bio />
        },
        {
          path: "bio/add-bio",
          element: <AddBio />
        },
        {
          path: "education",
          element: <Education />
        },
        {
          path: "education/add-education",
          element: <AddEducation />
        },
        {
          path: "skills",
          element: <Skills />
        },
        {
          path: "skills/add-skill",
          element: <AddSkill />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "projects/add-project",
          element: <AddProjects />
        },
        {
          path: "experiences",
          element: <Experiences />
        },
        {
          path: "experiences/add-experience",
          element: <AddExperience />
        },
        {
          path: "achievements",
          element: <Achievements />
        },
        {
          path: "achievements/add-achievement",
          element: <AddAchievement />
        },
        {
          path: "licenses",
          element: <Licenses />
        },
        {
          path: "licenses/add-license",
          element: <AddLicense />
        }
      ]
    },

    {
      path: "preview/:username", element: <PreviewPage />, loader: async ({ params }) => {
        const username = params.username;
        try {
          const response = await apiGetUserDetails(username);
          console.log(response)
          const userBioData = response?.data.user;
          return userBioData;
        } catch (error) {
          toast.error("An error occured");
          return null;
        }
      },
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);



  return <RouterProvider router={router} />;

}

export default App
