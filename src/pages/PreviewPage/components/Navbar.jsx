import React from 'react'
import { Link } from 'react-router-dom'
import N from "./constants/index"

const Navbar = () => {

  return (
    <div className='fixed top-0 left-0 bottom-0 px-4 overflow-y-auto z-[997] min-w-48 text-lime-800'>
      <nav className='flex flex-col space-y-4 mt-6'>
        {N.NAVLINKS.map((item, index) => {

          return (
            <Link key={index} to={item.path}>
              <span className='text-xl'>{item.Icon}</span>
            </Link>
          )

        }

        )

        }

      </nav>
    </div>
  )
}

export default Navbar