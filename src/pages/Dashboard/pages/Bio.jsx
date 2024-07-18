import React from 'react';
import PagesLayout from '../layouts/PagesLayout';
import NavBar from '../../../components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import { PencilIcon } from '@heroicons/react/20/solid';
import BioCards from '../../../components/BioCards';
import BioOverview from '../../../components/BioOverview';
import LilianZiwu from "../../../assets/images/braids.jpeg"

const Bio = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <PagesLayout buttonText="Add New" onClick={() => navigate("/dashboard/bio/add-bio")} />
      <div className='flex justify-evenly mt-8 mb-12'>
        <div className='w-64 h-64 bg-red-400 relative rounded-full'>
          <img src={LilianZiwu} alt="user imaage" />
          <span className='absolute right-0 bg-green-500 p-2 rounded-[50%]'><PencilIcon width={20} /></span>
        </div>
        <div className='flex flex-col space-y-4'>
          <BioCards name="Full Name" value="Lilian Awo Ziwu" />
          <BioCards name="Gender" value="Female" />
          <BioCards name="Date Of Birth" value="19th August, 2005" />
          <BioCards name="Location" value="Nungua" />
        </div>
      </div>

      <div className="min-h-screen py-10">
        <div className="bg-white shadow-sm rounded-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Overview</h1>

          <BioOverview
            label="Bio"
            result="Lilian Ziwu is a passionate software engineer based in New York City, with a strong background in web development and a keen interest in technology and innovation. With a Bachelor's degree in Computer Science and over 5 years of experience, Jane has played a key role in numerous projects, demonstrating expertise in JavaScript, React.js, Node.js, and Python. Her dedication to continuous learning and collaborative spirit has earned her recognition for both technical skills and leadership. Outside of work, Jane enjoys hiking, playing guitar, and volunteering in her community."
          />

          <hr className="my-8 border-gray-300" />

          <div className="space-y-6">
            <BioOverview
              label="Socials"
              result={
                <ul className="list-disc list-inside">
                  <li>GitHub: <Link className="text-blue-500" to="https://github.com/your-profile">your-profile</Link></li>
                  <li>LinkedIn: <Link className="text-blue-500" to="https://linkedin.com/in/your-profile">your-profile</Link></li>
                  <li>Twitter: <Link className="text-blue-500" to="https://twitter.com/your-profile">@your-profile</Link></li>
                </ul>
              }
            />

            <hr className="my-4 border-gray-300" />

            <BioOverview
              label="Spoken Languages"
              result="French, Latin, Greek, Dagaare"
            />

            <hr className="my-4 border-gray-300" />

            <BioOverview
              label="Contact"
              result="your-email@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
