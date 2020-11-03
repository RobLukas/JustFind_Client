import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import navLinks from 'api/headerNavLinks';
import S from './Header.styles';
import NavLink from './NavLink/NavLink';
import HeaderProps from './Header.interface';

const Header: FC<HeaderProps> = ({ logo }: HeaderProps) => {
  return (
    <S.Header>
      <S.Logo src={logo} alt={'justfind.pl'} />
      {navLinks.map((navLink) => (
        <NavLink key={uuid()} {...navLink} />
      ))}
    </S.Header>
  );
};

export default React.memo(Header);
