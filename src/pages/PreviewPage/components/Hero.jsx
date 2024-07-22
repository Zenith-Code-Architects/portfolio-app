import React from 'react'
import "../../../App.css"
import HeroImage from "../../../assets/images/laptop-image.jpg"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="">
      <div className="hero-container py-20 flex items-center content-center relative min-h-screen">
        <img src={HeroImage} alt="Hero Background" className="absolute inset-0 block w-full h-full  z-0" />
        <div className="container relative z-[3] px-3 -mx-28">
          <div className="flex justify-center ">
            <div className="text-[#07090c] text-center ml-[400px]">
              <h2 className="text-5xl font-bold ">Lilian Ziwu</h2>
              <p>I'm <span>Freelancer, Designer, Developer, Photographer</span><span className="typed-cursor" >|</span><span></span></p>
              <p className='flex justify-center mt-4 space-x-4'>
                <InstagramIcon className='w-6 h-6'/>
                <GithubIcon className='w-6 h-6'/>
                <LinkedinIcon className='w-6 h-6'/>
                <FacebookIcon className='w-6 h-6'/>
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