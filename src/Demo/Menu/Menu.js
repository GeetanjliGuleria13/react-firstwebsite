import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Menu(props) {
   
  return (
    <>
    <li className="nav-item">
        <NavLink  exact className={({ isActive }) => isActive ? 'menu_active nav-link' : 'nav-link'} aria-current="page" to={props.link}>{props.title}</NavLink>
    </li>
      
    </>
  )
}
