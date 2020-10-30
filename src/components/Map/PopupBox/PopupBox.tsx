import React, { FC } from 'react';
import S from './PopupBox.styles';
import PopupProps from 'api/offers.interface';

const PopupBox: FC<PopupProps> = ({
  logoSrc,
  title,
  salary,
  companyName,
}: PopupProps) => {
  return (
    <S.PopupBox>
      <S.LogoWrapper>
        <S.CompanyLogo src={logoSrc} alt={companyName} />
      </S.LogoWrapper>
      <S.DescWrapper>
        <S.JobTitle>{title}</S.JobTitle>
        <S.Salary>{`${salary.from} - ${salary.to} ${salary.currency}`}</S.Salary>
        <S.CompanyName>{companyName}</S.CompanyName>
      </S.DescWrapper>
    </S.PopupBox>
  );
};

export default PopupBox;
