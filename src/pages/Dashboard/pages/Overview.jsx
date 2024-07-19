import { useEffect, useState } from "react"
import NavBar from "../../../components/NavBar"
import PagesLayout from "../layouts/PagesLayout"
import OverviewCard from "../../../components/OverviewCard"
import { ShoppingBagIcon } from "@heroicons/react/20/solid"
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

  const [isLoading, setIsLoading] = useState(true); // Start loading initially
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const getData = async () => {
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalEducations,
        totalExperiences,
        totalVolunteerings,
        totalLicenses,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetEducations(),
        apiGetVolunteerings(),
        apiGetExperiences(),
        apiGetLicenses(),
      ]);

      const newData = {
        skills: totalSkills.length,
        projects: totalProjects.length,
        achievements: totalAchievements.length,
        volunteerings: totalVolunteerings.length,
        experiences: totalExperiences.length,
        licenses: totalLicenses.length,
        educations: totalEducations.length,
      };

      setData(newData);
      setIsDataLoaded(true); // Set data loaded
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className={`p-4 bg-white ${isDataLoaded ? 'animate-fadeIn' : ''}`}>
          <NavBar />
          <PagesLayout headerText="Overview">
            <div className="">
              <div className="flex justify-between mb-4">
                <p className="text-2xl">Hello Lilian, welcome to your Dashboard</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
                <div className="border-l-8 border-l-[#246fec]">
                  <OverviewCard
                    heading="Achievements"
                    icon={<ShoppingBagIcon width={20} />}
                    statistics={data.achievements}
                  />
                </div>
                <div className="border-l-8 border-l-[#f5674f]">
                  <OverviewCard
                    heading="Projects"
                    icon={<ShoppingBagIcon width={20} />}
                    statistics={data.projects}
                  />
                </div>
                <div className="border-l-8 border-l-[#367952]">
                  <OverviewCard
                    heading="Skills"
                    icon={<ShoppingBagIcon width={20} />}
                    statistics={data.skills}
                  />
                </div>
                <div className="border-l-8 border-l-[#cc3c43]">
                  <OverviewCard
                    heading="Volunteering"
                    icon={<ShoppingBagIcon width={20} />}
                    statistics={data.volunteerings}
                  />
                </div>
                <div className="border-l-8 border-l-[#246fec]">
                  <OverviewCard
                    heading="Experiences"
                    icon={<ShoppingBagIcon width={20} />}
                    statistics={data.experiences}
                  />
                </div>
                <div className="border-l-8 border-l-[#f5674f]">
                  <OverviewCard
                    heading="Licenses"
                    icon={<ShoppingBagIcon width={20} />}
                    statistics={data.licenses}
                  />
                </div>
                <div className="border-l-8 border-l-[#367952]">
                  <OverviewCard
                    heading="Education"
                    icon={<ShoppingBagIcon width={20} />}
                    statistics={data.educations}
                  />
                </div>
              </div>
            </div>
          </PagesLayout>
        </div>
      )}
    </>
  );
};

export default Overview;






