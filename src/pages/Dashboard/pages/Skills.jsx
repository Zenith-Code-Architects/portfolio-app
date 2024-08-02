import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";
import { apiDeleteSkill, apiGetSkills } from "../../../services/skills";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setIsDeleting((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteSkill(_id);
      console.log(res.data);
      toast.success(res.data.mesage);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsDeleting((prev) => ({ ...prev, [_id]: false }));
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <>
      <PagesLayout
        headerText="Skills"
        buttonText="Add New"
        onClick={() => navigate("/dashboard/skills/add-skill")}
      />
      <div className="flex flex-col items-center h-screen">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {skills.length == 0 ? (
              <p>No skill added yet</p>
            ) : (
              <>
                <div className="w-full flex justify-center">
                  <table className="table-auto border-collapse shadow-lg rounded-lg w-full max-w-4xl">
                    <thead className="bg-[#ccc] text-[#222]">
                      <tr>
                        <th className="p-4">Skills</th>
                        <th className="p-4">Level Of Proficiency</th>
                        <th className="p-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {skills.map((skill, index) => {
                        return (
                          <tr key={index}>
                            <td className="p-4 border-t-[0.5px] border-[#ddd] overflow-hidden overflow-ellipsis">
                              {skill.name}
                            </td>
                            <td className="p-4">{skill.levelOfProficiency}</td>
                            <td className="p-4">
                              <button onClick={() => handleDelete(skill.id)}>
                                {isDeleting[skill.id] ? (
                                  <Loader width={10} />
                                ) : (
                                  <TrashIcon
                                    width={15}
                                    height={15}
                                    className="text-red-500 cursor-pointer"
                                  />
                                )}
                              </button>
                              <button>
                                {" "}
                                <PencilIcon
                                  width={15}
                                  height={15}
                                  className="text-blue-500 cursor-pointer"
                                />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
