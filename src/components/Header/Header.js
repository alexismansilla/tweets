import React from 'react';
import Logo from '../../assets/img/logo.png';

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <h1>Tweets</h1>
    </div>
  )
}
