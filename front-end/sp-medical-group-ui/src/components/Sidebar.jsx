//Libs
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Styles
import '../styles/components/Sidebar.css';

//Images
import logo from '../img/icons/sp-medical-group-logo.svg';

//Data
import SidebarData from './SidebarData';

const Sidebar = ({ showSidebar }) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <aside className={showSidebar ? 'sidebar__aside active' : 'sidebar__aside'}>
      <nav className="sidebar__nav">
        <img className="sidebar__logo" src={logo} alt="" />
        <ul className="sidebar__ul">
          {SidebarData.map(({ title, icon, link }) => {
            return (
              <li className="sidebar__li" key={title}>
                <Link
                  className="sidebar__link"
                  to={link}
                  onClick={() => setPathname(link)}
                >
                  <div
                    className="sidebar__current-page"
                    id={pathname === link ? 'active' : ''}
                  >
                    {icon}
                    <span>{title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
