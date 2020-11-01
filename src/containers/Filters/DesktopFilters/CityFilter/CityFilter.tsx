import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { CityCategoryEnum, cityCategoryCollection } from 'api/cityCategory';
import DropDownDots from 'components/Filters/DesktopFilters/DropDowns/DropDownDots/DropDownDots';
import CategoryButton from 'components/common/Buttons/CategoryButton/CategoryButton';
import S from 'components/Filters/DesktopFilters/DropDowns/DropDown.styles';

const CityFilter: FC = () => {
  const limitButtons = 7;
  const dropDownButtonsFrom = limitButtons + 1;

  const listOfCityButtons = cityCategoryCollection.slice(0, limitButtons);
  const restOfButtons = cityCategoryCollection.slice(dropDownButtonsFrom);

  return (
    <>
      {listOfCityButtons.map((city) => {
        const cityName: CityCategoryEnum =
          CityCategoryEnum[city as keyof typeof CityCategoryEnum];
        return <CategoryButton key={uuid()}>{cityName}</CategoryButton>;
      })}
      <DropDownDots>
        {restOfButtons.map((city) => {
          const cityName: CityCategoryEnum =
            CityCategoryEnum[city as keyof typeof CityCategoryEnum];
          return (
            <S.DropDownListItem key={uuid()}>{cityName}</S.DropDownListItem>
          );
        })}
      </DropDownDots>
    </>
  );
};

export default CityFilter;
