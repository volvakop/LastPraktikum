import React from 'react';
import '../boxmodel/header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/destinasi">Destinasi</a></li>
          {}
        </ul>
      </nav>
    </header>
  );
}

export default Header;