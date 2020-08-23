import React, { useState } from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <header>
      <Link to='/'>Adopt Me!</Link>
      <span role='img' aria-label='logo'>
        Dog Emoji
      </span>
    </header>
  );
};

export default NavBar;
