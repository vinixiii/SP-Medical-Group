//Libs
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

//Styles
import '../styles/components/Sidebar.css';

//Images
import logo from '../img/icons/sp-medical-group-logo.svg';

const Sidebar = ({ showSidebar, sidebarData }) => {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <aside className={showSidebar ? 'sidebar__aside active' : 'sidebar__aside'}>
      <nav className="sidebar__nav">
        <img className="sidebar__logo" src={logo} alt="" />
        <ul className="sidebar__ul">
          {sidebarData.map(({ title, icon, path }) => {
            return (
              <li className="sidebar__li" key={title}>
                <Link
                  className="sidebar__link"
                  to={path}
                  onClick={() => setPathname(path)}
                >
                  <div
                    className="sidebar__current-page"
                    id={pathname === path ? 'active' : ''}
                  >
                    {icon}
                    <span>{title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
          <li className="sidebar__li">
            <a
              className="sidebar__link"
              href="/"
              onClick={() => localStorage.removeItem('token')}
            >
              <div className="sidebar__current-page">
                <FiLogOut />

                <span>Sair</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
