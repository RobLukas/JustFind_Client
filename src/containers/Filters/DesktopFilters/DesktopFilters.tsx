import React, { FC } from 'react';

import SwitchMode from 'containers/SwitchMode/SwitchMode';
import CityFilter from './CityFilter/CityFilter';
import S from './DesktopFilters.styles';
import TechnologyFilter from './TechnologyFilter/TechnologyFilter';
import SalaryFilter from './SalaryFilter/SalaryFilter';
import ExperienceFilter from './ExperienceFilter/ExperienceFilter';

const DesktopFilters: FC = () => {
  return (
    <S.FilterDesktop>
      <S.FilterWrapper>
        <S.CityFilterWrapper>
          <CityFilter />
          <SwitchMode />
        </S.CityFilterWrapper>
        <S.TechnologyFilterWrapper>
          <TechnologyFilter />
          <S.DropDownsWrapper>
            <SalaryFilter />
            <ExperienceFilter />
          </S.DropDownsWrapper>
        </S.TechnologyFilterWrapper>
      </S.FilterWrapper>
    </S.FilterDesktop>
  );
};

export default DesktopFilters;
