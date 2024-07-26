import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skillset from "./components/Skillset";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLoaderData } from "react-router-dom";

const PreviewPage = () => {
  const profile = useLoaderData();
  console.log(profile);
  return (
    <div>
      <Hero profile={profile} />
      <About />
      <Skillset skillSet={profile.skills} />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default PreviewPage;
