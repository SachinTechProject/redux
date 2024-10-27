import React from 'react'
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import useTheme from '../context/themeContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar() {

    const {themeMode, lightMode, darkMode} = useTheme()
   function handleClick(){
    if(themeMode === 'dark'){
        lightMode()
     }else{
         darkMode()
     }
   }

   const selector = useSelector(state => state.cart)
    
    
  return (
    <>

<div className="navbar  bg-base-100 dark:bg-gray-800 dark:text-white">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu dark:bg-gray-800 dark:text-white menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link>Homepage</Link></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="navbar-end">
    <button onClick={handleClick} className="btn btn-ghost text-lg dark:bg-white text-black btn-circle">
        {themeMode === 'dark' ? <LuSunMoon /> : <FaMoon /> }
      {/* {<FaMoon />:<LuSunMoon />} */}
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
     <Link to='/cart' >
     <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M3 3h2l1 4h13l1.5-4H5M3 3l2 12h14l1-6H7L5 5M9 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z" />
</svg>
     </Link>

        <Link to='/cart' className="badge badge-xs badge-warning indicator-item">{selector.length}</Link>
      </div>
    </button>
  </div>
</div>


  

    </>
  )
}

export default Navbar