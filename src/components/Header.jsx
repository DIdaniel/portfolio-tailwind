import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between py-5 px-5 absolute w-full text-white">
      <div className="logo">
        <h2 className="text-3xl lg:text-4xl ">
          <Link to="/"><span className="transition-all hover:text-yellow-200">DONG-IL</span></Link>
        </h2>
      </div>

      <nav>
        <ul className="flex">
          <li className="mr-5">
            <Link to="/">HOME</Link>
          </li>
          <li className="mr-5">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link 
              to="/hire"
              className="mr-5 bg-green-500 p-1 px-4 rounded-full font-semibold transition-all hover:bg-green-800">
              HIRE
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
