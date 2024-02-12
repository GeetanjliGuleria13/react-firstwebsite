import React from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'


const MenuData = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "service",
        link: "/service",
    },
    {
        title: "about",
        link: "/about",
    },
    {
        title: "contact",
        link: "/contact",
    },

];

export default function Navbar() {
   
  return (
    <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg ">
                    <NavLink className="navbar-brand" to="/">Geetanjli Guleria</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {
                            MenuData.map((val, index) =>{
                            return <Menu
                            key={index}
                            title={val.title}
                            link={val.link}
                            />
                        })
                        }
                        {/* <li className="nav-item">
                        <NavLink  exact className={({ isActive }) => isActive ? 'menu_active nav-link' : 'nav-link'} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className={({ isActive }) => isActive ? 'menu_active nav-link' : 'nav-link'} to="/service">Service</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className={({ isActive }) => isActive ? 'menu_active nav-link' : 'nav-link'} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact className={({ isActive }) => isActive ? 'menu_active nav-link' : 'nav-link'} to="/contact">contact</NavLink>
                        </li> */}
                    </ul>
                    </div>
                </nav>
            </div> 
        </div>
    </div>
    </>
  )
}
