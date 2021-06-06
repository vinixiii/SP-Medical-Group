import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import '../styles/components/Sidebar.css';

import logo from '../img/icons/sp-medical-group-logo.svg';

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
                <div
                  className="sidebar__current-page"
                  id={pathname === link ? 'active' : ''}
                >
                  {icon}
                  <Link to={link} onClick={() => setPathname(link)}>
                    {title}
                  </Link>
                </div>
              </li>
            );
          })}
          <li className={showSidebar ? 'sidebar__li active' : 'sidebar__li'}>
            <div
              className={
                showSidebar
                  ? 'sidebar__current-page active'
                  : 'sidebar__current-page'
              }
            >
              <FiLogOut />
              <Link to="/">Sair</Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* <nav className="sidebar__nav">
        <img className="sidebar__logo" src={logo} alt="" />
        <ul>
          <li className={showSidebar ? 'sidebar__li active' : 'sidebar__li'}>
            <div
              className={
                showSidebar
                  ? 'sidebar__current-page active'
                  : 'sidebar__current-page'
              }
            >
              <RiDashboardLine />
              <Link to="/">Home</Link>
            </div>
          </li>
        </ul>
      </nav> */}
    </aside>
  );
};

export default Sidebar;
