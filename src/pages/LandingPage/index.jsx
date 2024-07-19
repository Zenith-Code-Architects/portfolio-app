import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className=''>

      <div className="min-h-screen landing bg-gray-100 ">
        <div className='landing-overlay'>
          <header className="bg-black/20 w-full py-4 flex justify-between items-center px-8">
            <h1 className="text-white text-3xl">ZCA Portfolio</h1>
            <div>
              <Link to="login" className="bg-white hover:text-white hover:bg-green-500 text-green-bg-green-500 px-4 py-2 rounded mr-2">Login</Link>
              <Link to="signup" className="bg-white  hover:text-white hover:bg-green-500  text-green-bg-green-500 px-4 py-2 rounded">Sign Up</Link>
            </div>
          </header>
          <main className="flex justify-center content-center mt-14">
            <section className="text-center p-8">
              <h2 className="text-5xl font-bold mb-4 text-white">Showcase Your Projects</h2>
              <p className=" mb-6 text-white">A simple and elegant way to display your work.</p>
              <Link to="signup" className="bg-green-500 text-white px-4 py-2 rounded">Get Started</ Link>
            </section>
          </main>
          
        </div>
      </div>

    </div>
  )
}

export default LandingPage