import React from 'react';
import SocialNavbar from './SocialNavbar';
import MainNavbar from './MainNavbar';

const Navbar: React.FC = () => {
  return (
    <div>
      <SocialNavbar />
      <MainNavbar />
    </div>
  )
}

export default Navbar;