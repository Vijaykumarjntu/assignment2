
import React from "react";
import { FaFilm, FaUser, FaComment, FaSignOutAlt } from "react-icons/fa";
import './index.css'

const Navigation = () => {
  const items = [
    { text: "My moves", icon: <FaFilm />,isActive:true },
    { text: "My profile", icon: <FaUser />,isActive:false },
    { text: "Get quote", icon: <FaComment />,isActive:false },
    { text: "Log out", icon: <FaSignOutAlt />,isActive:false },
  ];

  return (
    <ul className='navigation-container'>
      {items.map((item) => (
        <li key={item.text} className={item.isActive ? 'active':'not-active'}>
          <p className='navigation-icon-container'>{item.icon}</p>
          <p className='navigation-text-container'>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

