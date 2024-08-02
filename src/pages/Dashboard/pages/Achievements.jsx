import React, { useEffect, useState } from "react";
import PagesLayout from "../layouts/PagesLayout";
import { useNavigate } from "react-router-dom";
import Tile from "../../../components/Tile";
import {
  apiDeleteAchievement,
  apiGetAchievements,
} from "../../../services/achievements";
import Loader from "../../../components/Loader";
import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid";
import PageLoader from "../components/PageLoader";

const Achievements = () => {
  const navigate = useNavigate();
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState({});

  const fetchAchievements = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAchievements();
      console.log(res.data);
      setAchievements(res.data.achievement);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const res = await apiDeleteAchievement(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <div>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <PagesLayout
            headerText="Achievements"
            buttonText="Add New"
            onClick={() => navigate("/dashboard/achievements/add-achievement")}
            children=""
          />
          {achievements?.length == 0 ? (
            <p>No Achievements added yet</p>
          ) : (
            <div>
              {achievements?.map((achievement, index) => (
                <div key={index}>
                  <Tile
                    awardName={achievement.awards}
                    nameOfInstitution={achievement.nameOfInstitution}
                    dateObtained={achievement.date}
                    description={achievement.description}
                    editIcon={
                      <PencilIcon
                        width={15}
                        height={15}
                        className="text-blue-500 cursor-pointer"
                      />
                    }
                    trashIcon={
                      <TrashIcon
                        width={15}
                        height={15}
                        className="text-red-500 cursor-pointer"
                      />
                    }
                    deleteOnclick={() => handleDelete(achievement.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Achievements;
