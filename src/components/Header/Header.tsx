import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import navLinks from '@api/headerNavLinks';
import S from './Header.styles';
import NavLink from './NavLink/NavLink';
import { darkLogo } from '@assets/index';

const Header: FC = () => {
  return (
    <S.Header>
      <S.Logo src={darkLogo} alt={'justfind.pl'} />
      {navLinks.map((navLink) => (
        <NavLink key={uuid()} {...navLink} />
      ))}
    </S.Header>
  );
};

export default Header;
