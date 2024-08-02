import React, { useEffect, useState } from "react";
import PagesLayout from "../layouts/PagesLayout";
import { Link, useNavigate } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/20/solid";
import BioCards from "../../../components/BioCards";
import BioOverview from "../../../components/BioOverview";
import LilianZiwu from "../../../assets/images/braids.jpeg";
import "../../../App.css";
import { apiAddProfile } from "../../../services/profile";
import Loader from "../../../components/Loader";
import PageLoader from "../components/PageLoader";

const Bio = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const res = await apiAddProfile();
      console.log(res.data);
      setProfile(res.data.bio);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleDelete = async (_id) => {
  //   setIsDeleting((prev) => ({ ...prev, [_id]: true }));
  //   try {
  //     const res = await api
  //   } catch (error) {

  //   }
  // };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="p-4 bg-white">
      <PagesLayout
        buttonText="Add New"
        onClick={() => navigate("/dashboard/bio/add-bio")}
      />

      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {profile.length == 0 ? (
            <p>No Bio added yet</p>
          ) : (
            <>
              {profile.map((profile, index) => {
                return (
                  <>
                    <div key={index} className="flex justify-evenly mt-8 mb-12">
                      <div className="w-64 h-64 relative staggered-item">
                        <img src={LilianZiwu} alt="user image" className="" />
                        <span className="absolute right-0 bg-green-500 p-2 rounded-full staggered-item">
                          <PencilIcon width={20} />
                        </span>
                      </div>

                      <div className="flex flex-col space-y-4 staggered-item">
                        <BioCards name="Full Name" value={profile.user} />
                        <BioCards name="Gender" value="Female" />
                        <BioCards
                          name="Date Of Birth"
                          value="19th August, 2005"
                        />
                        <BioCards name="Location" value="Nungua" />
                        <BioCards
                          name="Address"
                          value="Number 4 Nii Kotey Street"
                        />
                      </div>
                    </div>
                    <div className="min-h-screen py-10">
                      <div className="bg-white shadow-sm rounded-lg p-6 max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-6 staggered-item">
                          Overview
                        </h1>

                        <BioOverview
                          label="Bio"
                          result="Lilian Ziwu is a passionate software engineer based in New York City, with a strong background in web development and a keen interest in technology and innovation. With a Bachelor's degree in Computer Science and over 5 years of experience,she has played a key role in numerous projects, demonstrating expertise in JavaScript, React.js, Node.js, and Python. Her dedication to continuous learning and collaborative spirit has earned her recognition for both technical skills and leadership. Outside of work,Lilian enjoys hiking, playing guitar, and volunteering in her community."
                          className="staggered-item"
                        />

                        <hr className="my-8 border-gray-300 staggered-item" />

                        <div className="space-y-6">
                          <BioOverview
                            label="Socials"
                            result={
                              <ul className="list-disc list-inside staggered-item">
                                <li>
                                  GitHub:
                                  <Link
                                    className="text-blue-500"
                                    to="https://github.com/your-profile"
                                  >
                                    your-profile
                                  </Link>
                                </li>
                                <li>
                                  LinkedIn:
                                  <Link
                                    className="text-blue-500"
                                    to="https://linkedin.com/in/your-profile"
                                  >
                                    your-profile
                                  </Link>
                                </li>
                                <li>
                                  Twitter:
                                  <Link
                                    className="text-blue-500"
                                    to="https://twitter.com/your-profile"
                                  >
                                    @your-profile
                                  </Link>
                                </li>
                              </ul>
                            }
                            className="staggered-item"
                          />

                          <hr className="my-4 border-gray-300 staggered-item" />

                          <BioOverview
                            label="Spoken Languages"
                            result="French, Latin, Greek, Dagaare"
                            className="staggered-item"
                          />

                          <hr className="my-4 border-gray-300 staggered-item" />

                          <BioOverview
                            label="Contact"
                            result="your-email@example.com"
                            className="staggered-item"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Bio;
