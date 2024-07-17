import React from 'react'
import "../../../App.css"
import HeroImage from "../../../assets/images/hero-bg.jpg"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="">
      <div className="hero-container py-20 flex items-center content-center relative min-h-screen">
        <img src={HeroImage} alt="Hero Background" className="absolute inset-0 block w-full h-full object-cover z-0" />
        <div className="container relative z-[3] px-3 -mx-28">
          <div className="flex justify-center">
            <div className="text-[#45505B]">
              <h2 className="text-5xl font-bold">Brandon Johnson</h2>
              <p>I'm <span>Freelancer, Designer, Developer, Freelancer, Photographer</span><span className="typed-cursor" >|</span><span></span></p>
              <p className='flex'>
                <InstagramIcon/>
                <GithubIcon/>
                <LinkedinIcon/>
                <FacebookIcon/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero

{/* <p className="text-xl">absolute bottom-48 -left-8
                I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Freel</span>
                <span className="typed-cursor" aria-hidden="true">|</span>
                <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
              </p> */}