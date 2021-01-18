import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {props.isAuthenticated ? <NavigationItem link="/logout">Logout</NavigationItem> : null}
  </ul>
);

export default navigationItems;
