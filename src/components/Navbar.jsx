import React ,{useState,useEffect,BrowserRouter} from 'react'
import { Link, NavLink } from 'react-router-dom'

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <NavLink to="/" className="flex items-center gap-2"
          onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-15 h-12 object-contain"  />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Alaa Alkady &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </NavLink>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((NavLink) => (
            <li>
              <a href={`#${NavLink.id}`}
                className={`${active ===NavLink.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(NavLink.title)}>{NavLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center"/*  this  sm:hidden means that its on small devices is hidden but usually whats after it*/>
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" //this toggle ? close : menu means if toggle is true then close else menu
            onClick={() => setToggle(!toggle)} />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((NavLink) => (
                  <li>
                    <a href={`#${NavLink.id}`}
                      className={`${active ===NavLink.title?"text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(NavLink.title);
                      }}>{NavLink.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          
        </div>

      </div>
    </nav>
  )
}

export default Navbar