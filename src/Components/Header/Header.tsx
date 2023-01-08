import React from 'react';
import style from './Header.module.css'

const Header = () => {
  return (
      <div>
          <header className={style.header}>
              <img src="/logo192.png" alt="image"/>
          </header>
      </div>
  );
}

export default Header;
