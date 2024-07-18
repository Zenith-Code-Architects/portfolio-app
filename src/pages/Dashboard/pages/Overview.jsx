import { useEffect, useState } from "react"
import NavBar from "../../../components/NavBar"
import PagesLayout from "../layouts/PagesLayout"
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetProjects } from "../../../services/projects";
import { apiGetEducations } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetVolunteerings } from "../../../services/volunteering";
import { apiGetLicenses } from "../../../services/licenses";
import PageLoader from "../components/PageLoader";



const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteerings: 0,
    experiences: 0,
    licenses: 0,
    educations: 0,
  });

  const [isLoading, setIsLoading] = useState(false);


  const getData = async () => {
    setIsLoading(true)
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalEducations,
        totalExperiences,
        totalVolunteerings,
        totalLicenses,
      ]
        = await Promise.all([
          apiGetSkills(),
          apiGetAchievements(),
          apiGetProjects(),
          apiGetEducations(),
          apiGetVolunteerings(),
          apiGetExperiences(),
          apiGetLicenses(),
        ]);

      console.log("total skills", totalSkills)

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteerings.length,
        experiences: totalExperiences.length,
        licenses: totalLicenses.length,
        education: totalEducations.length,
      };
      console.log(newData)

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      {
        isLoading ?
          <PageLoader /> :
          <div>
            <NavBar />
            <PagesLayout />
          </div>
      }
    </>
  )
};


export default Overview