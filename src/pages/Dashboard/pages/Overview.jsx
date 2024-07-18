import { useEffect, useState } from "react"
import NavBar from "../../../components/NavBar"
import PagesLayout from "../layouts/PagesLayout"
import OverviewCard from "../../../components/OverviewCard"
import { ShoppingBagIcon } from "@heroicons/react/20/solid"
import ReactApexChart from 'react-apexcharts';
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetProjects } from "../../../services/projects";
import { apiGetEducations } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import { apiGetVolunteerings } from "../../../services/volunteering";
import { apiGetLicenses } from "../../../services/licenses";
import PageLoader from "../components/PageLoader";



const Overview = () => {

  const [state, setState] = useState({
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }

      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  })



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
            <div>
              <NavBar />
              <PagesLayout headerText="Overview">
                <div className="">
                  <div className="flex justify-between">
                    <p className="text-2xl">Hello Lilian welcome to your Dashboard</p>
                  </div>

                  <div className="grid grid-cols-[1fr_1fr_1fr] gap-5 my-5">

                    <div className="border-l-8 border-l-[#246fec]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>

                    <div className="border-l-8 border-l-[#f5674f]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>

                    <div className="border-l-8 border-l-[#367952]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>

                    <div className="border-l-8 border-l-[#cc3c43]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>

                    <div className="border-l-8 border-l-[#246fec]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>

                    <div className="border-l-8 border-l-[#246fec]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>

                    <div className="border-l-8 border-l-[#246fec]">

                    </div>
                    <div className="border-l-8 border-l-[#246fec]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>
                    <div className="border-l-8 border-l-[#246fec]">
                      <OverviewCard
                        heading="Achievements"
                        icon={<ShoppingBagIcon width={20} />}
                        statistics="23"
                      />
                    </div>
                    <ReactApexChart
                      options={state.options}
                      series={state.series}
                      type="bar"
                      height={350} />
                  </div>


                  {/* <img src={OverViewImage} alt="welcome img" className="w-1/2" /> */}
                </div>
              </PagesLayout>


            </div>
          </div>
      }
    </>
  )
};


export default Overview






