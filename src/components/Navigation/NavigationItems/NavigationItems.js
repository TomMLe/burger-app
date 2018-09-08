import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
  <ul className = {classes.NavigationItems}>
    <NavigationItem link="/" active><strong> Burger Builder </strong></NavigationItem>
    <NavigationItem link="/"> <strong>Checkout </strong> </NavigationItem>
  </ul>
);

export default navigationItems;
