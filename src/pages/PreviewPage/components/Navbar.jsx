import React from 'react'
import { Link } from 'react-router-dom'
import N from "./constants/index"

const Navbar = () => {

  return (
    <div className="fixed top-0 left-0 bottom-0 px-2 py-8 overflow-y-auto z-[997] w-32 bg- text-black rounded-r-lg shadow-lg m-2">
      <nav className="flex flex-col space-y-6 mt-6">
        {N.NAVLINKS.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center space-x-3 p-2 hover:bg-lime-300 rounded "
          >
            <span className="text-xl">{item.Icon}</span>
            <span className="text-lg">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Navbar