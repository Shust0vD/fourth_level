import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavbarComponent from '../Navbar/NavbarComponent';
import RoutesComponent from '../Routes/RoutesComponent';
import './Header.css';

export default function Header() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <RoutesComponent />
    </BrowserRouter>
  );
}
