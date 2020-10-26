import React, { FC } from 'react';
import LogoCompanyProps from './LogoCompany.interface';
import S from './LogoCompany.styles';

const LogoCompany: FC<LogoCompanyProps> = ({ logoSrc }: LogoCompanyProps) => {
  return <S.Image src={logoSrc} />;
};

export default LogoCompany;
