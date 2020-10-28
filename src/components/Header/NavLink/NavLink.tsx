import React, { FC } from 'react';
import S from './NavLink.styles';
import NavLinkProps from './NavLink.interface';

const NavLink: FC<NavLinkProps> = ({ icon, link, desc }: NavLinkProps) => {
  return (
    <S.NavLink href={link}>
      <S.MuiIcon component={icon} />
      <span>{desc}</span>
    </S.NavLink>
  );
};

export default NavLink;
