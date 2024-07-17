import React from 'react'
import ProfileImage from "../../../assets/images/profile-img.jpg"

const About = () => {
  return (
    <div className='flex justify-center'>
      <section className="">
      {/* Section Title */}
      <div className="container flex flex-col relative text-center">
        <span className='absolute top-7 text-[#eef0f2] left-0 right-0 z-[1] font-bold text-5xl leading-[0]'>ABOUT ME</span>
        <h2 className='text-3xl font-bold mb-5 pb-0 relative z-[2]'>About Me</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="flex gap-4">
          <div className="w-full lg:w-1/3">
            <img src={ProfileImage} className="img-fluid" alt="Profile" />
          </div>
          <div className="w-full lg:w-2/3 content">
            <h2 className="text-2xl font-bold">UI/UX Designer &amp; Web Developer.</h2>
            <p className="italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About