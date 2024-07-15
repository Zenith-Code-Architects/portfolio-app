import React from 'react'

const Resume = () => {
  return (
    <div>
   <section id="resume" className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-4xl font-bold">Resume</h2>
          
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-[2px]"></div>
          <p className="text-gray-600">Check My Resume</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-l-4 border-r-4 border-blue-500 px-4">
          <div className=" border-r-4 border-blue-500">
            <h3 className="text-2xl font-semibold mb-2">Sumary</h3>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Alex Smith</h4>
              <p className="text-gray-600">Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Portland par 127, Orlando, FL</li>
                <li>(123) 456-7890</li>
                <li>alex@example.com</li>
              </ul>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Master of Fine Arts & Graphic Design</h4>
              <p className="text-gray-600">2015 - 2016</p>
              <p className="text-gray-800">Rochester Institute of Technology, Rochester, NY</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Bachelor of Fine Arts & Graphic Design</h4>
              <p className="text-gray-600">2010 - 2014</p>
              <p className="text-gray-800">Rochester Institute of Technology, Rochester, NY</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Professional Experience</h3>
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Senior Graphic Designer</h4>
              <p className="text-gray-600">2018 - Present</p>
              <p className="text-gray-800">XYZ Design Studio, New York, NY</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Lead the design team in creating visual concepts.</li>
                <li>Developed branding strategies for clients.</li>
                <li>Managed multiple projects simultaneously.</li>
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold">Graphic Designer</h4>
              <p className="text-gray-600">2016 - 2018</p>
              <p className="text-gray-800">ABC Creative Agency, New York, NY</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Designed marketing materials for various clients.</li>
                <li>Collaborated with the marketing team to create campaigns.</li>
                <li>Assisted in the development of client presentations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Resume