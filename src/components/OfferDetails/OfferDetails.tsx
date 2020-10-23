import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import OfferDetailsProps from './OfferDetails.interface';
import LinearBackground from './LinearBackground/LinearBackground';
import LogoCompany from './LogoCompany/LogoCompany';
import Salary from './Salary/Salary';
import S from './OfferDetails.styles';
import Title from './Title/Title';
import CompanyAddressInfo from './CompanyAddressInfo/CompanyAddressInfo';
import { Business, Place } from '@material-ui/icons';
import TileRoundedEdges from './TileRoundedEdges/TileRoundedEdges';

const OfferDetails: FC<OfferDetailsProps> = ({
  mainlyTechnology,
  logoSrc,
  title,
  salary,
  companyName,
  companyAddress,
  technologies,
  isNew,
  addedDate,
}: OfferDetailsProps) => {
  return (
    <S.OfferDetails>
      <S.OfferDetailsWrapper>
        <LinearBackground technology={mainlyTechnology} />
        <S.LinkWrapper>
          <S.LogoCompanyWrapper>
            <LogoCompany logoSrc={logoSrc} />
          </S.LogoCompanyWrapper>
          <S.DescriptionWrapper>
            <S.TitleWrapper>
              <Title>{title}</Title>
              <S.SalaryWrapper>
                <Salary salary={salary} />
                <S.SeparateDateAgoFromSalary />
                {isNew ? (
                  <S.NewBar>New</S.NewBar>
                ) : (
                  <TileRoundedEdges>{`${addedDate} ago`}</TileRoundedEdges>
                )}
              </S.SalaryWrapper>
            </S.TitleWrapper>
            <S.AddressWrapper>
              <CompanyAddressInfo icon={Business}>
                {companyName}
              </CompanyAddressInfo>
              <S.SeparateCompanyInfo />
              <CompanyAddressInfo icon={Place}>
                {companyAddress}
              </CompanyAddressInfo>
              <S.TechnologyWrapper>
                {technologies.map((technology) => (
                  <TileRoundedEdges key={uuid()}>{technology}</TileRoundedEdges>
                ))}
              </S.TechnologyWrapper>
            </S.AddressWrapper>
          </S.DescriptionWrapper>
        </S.LinkWrapper>
      </S.OfferDetailsWrapper>
    </S.OfferDetails>
  );
};

export default OfferDetails;
