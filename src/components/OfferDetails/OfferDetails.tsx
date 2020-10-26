import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import OfferDetailsProps from './OfferDetails.interface';
import LinearBackground from './LinearBackground/LinearBackground';
import LogoCompany from '../common/LogoCompany/LogoCompany';
import Salary from '../common/Salary/Salary';
import S from './OfferDetails.styles';
import JobTitle from '../common/JobTitle/JobTitle';
import CompanyAddressInfo from './CompanyAddressInfo/CompanyAddressInfo';
import { Business, Place } from '@material-ui/icons';
import TileRoundedEdges from './TileRoundedEdges/TileRoundedEdges';
import JobAdded from './JobAdded/JobAdded';

const OfferDetails: FC<OfferDetailsProps> = ({
  mainlyTechnology,
  logoSrc,
  title,
  salary,
  companyName,
  companyAddress,
  technologies,
  createdAt,
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
              <JobTitle>{title}</JobTitle>
              <S.SalaryWrapper>
                <Salary salary={salary} />
                <S.SeparateDateAgoFromSalary />
                <JobAdded createdAt={createdAt} />
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
