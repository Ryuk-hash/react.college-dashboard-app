import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Sidebar.module.css';
import { SidebarItems } from './SidebarItems';
import { IconContext } from 'react-icons';

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={classes.navmenu}>
          <ul className={classes.navmenuitems}>
            {SidebarItems.map((item, index) => {
              return (
                <li key={index} className={classes.navtext}>
                  <NavLink
                    exact={item.path === '/'}
                    to={item.path}
                    activeClassName={classes.active}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
