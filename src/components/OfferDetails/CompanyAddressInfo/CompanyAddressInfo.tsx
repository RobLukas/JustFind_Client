import React, { FC } from 'react';
import CompanyAddressInfoProps from './CompanyAddressInfo.interface';
import S from './CompanyAddressInfo.styles';

const CompanyAddressInfo: FC<CompanyAddressInfoProps> = ({
  children,
  icon,
}: CompanyAddressInfoProps) => {
  return (
    <>
      <S.MuiIcon component={icon} />
      <S.AddressTitle>{children}</S.AddressTitle>
    </>
  );
};

export default CompanyAddressInfo;
