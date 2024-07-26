import React from "react";
import { useNavigate } from "react-router-dom";
import PagesLayout from "../layouts/PagesLayout";

const Licenses = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PagesLayout
        buttonText="Add New"
        onClick={() => navigate("/dashboard/licenses/add-license")}
      />
    </div>
  );
};

export default Licenses;
