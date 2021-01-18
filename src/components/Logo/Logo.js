import React from 'react';

import collegeLogo from '../../assets/college-icon.png';
import classes from './Logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={collegeLogo} alt="myLogo"></img>
  </div>
);

export default logo;
