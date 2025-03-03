import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import './sidebar.css';
import {
  AiFillHome,
  AiOutlineBook,
  AiOutlinePlus,
  AiOutlineSolution,
  AiOutlineUser,
  AiOutlineCheckCircle,
  AiOutlineUpload,
  AiOutlineClockCircle,
  AiOutlineLogout,
} from 'react-icons/ai';

const Sidebar = () => {
  const location = useLocation(); // Get current route location

  return (
    <nav className='sidebar'>
      <ul className='nav flex-column'>
        {sidebarData.map((panelItem) => {
          let icon;
          switch (panelItem.id) {
            case 1:
              icon = <AiFillHome className='icon' />;
              break;
            case 2:
              icon = <AiOutlineBook className='icon' />;
              break;
            case 3:
              icon = <AiOutlinePlus className='icon' />;
              break;
            case 4:
              icon = <AiOutlineSolution className='icon' />;
              break;
            case 5:
              icon = <AiOutlineUser className='icon' />;
              break;
            case 6:
              icon = <AiOutlineCheckCircle className='icon' />;
              break;
            case 7:
              icon = <AiOutlineUpload className='icon' />;
              break;
            case 8:
              icon = <AiOutlineClockCircle className='icon' />;
              break;
            case 10:
              icon = <AiOutlineLogout className='icon' />;
              break;
            default:
              icon = null;
          }

          return (
            <li className='nav-item sidebar-nav-item' key={panelItem.id}>
              <Link
                to={panelItem.url}
                className={`nav-link sidebar-nav-link ${
                  location.pathname === panelItem.url ? 'active' : ''
                }`}
              >
                {icon}
                {panelItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;