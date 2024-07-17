import { useEffect, useState } from "react"
import NavBar from "../../../components/NavBar"
import PagesLayout from "../layouts/PagesLayout"
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetProjects } from "../../../services/projects";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetVolunteering } from "../../../services/volunteering";
import { apiGetLicenses } from "../../../services/licenses";



const Overview = () => {

  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    experiences: 0,
    licenses: 0,
    education: 0,
  });

  const [isLoading, setIsLoading] = useState(false);


  const getData = async () => {
    setIsLoading(true)
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalEducation,
        totalExperience,
        totalVolunteering,
        totalLicenses,
      ]
        = await Promise.all([
          apiGetSkills,
          apiGetAchievements,
          apiGetProjects,
          apiGetEducation,
          apiGetVolunteering,
          apiGetExperiences,
          apiGetLicenses,
        ]);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteering: totalVolunteering.length,
        experiences: totalExperience.length,
        licenses: totalLicenses.length,
        education: totalEducation.length,
      };
      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    // getData();
  }, [])

  return (
    <div>
      <NavBar />
      <PagesLayout />
    </div>
  )
};


export default Overview