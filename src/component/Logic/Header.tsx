import React from 'react';

import logoSrc from '../../img/header/logo.svg';
import accountSrc from '../../img/header/account.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logoSrc} alt="logo" width={48} height={48} />
        <h1>Wrench CRM</h1>
      </div>
      <div className="header__account">
        <img src={accountSrc} alt="account" width={48} height={48} />
        <h1>Имя Фамилия</h1>
      </div>
    </header>
  );
};

export default Header;
