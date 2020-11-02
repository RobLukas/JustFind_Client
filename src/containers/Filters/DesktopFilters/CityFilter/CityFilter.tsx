import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { cityCategoryCollection } from 'api/cityCategory';
import CategoryButton from 'components/common/Buttons/CategoryButton/CategoryButton';
import DropDownList from 'components/Filters/DesktopFilters/DropDowns/DropDownList/DropDownList';
import { DotsButton } from 'components/common';

const CityFilter: FC = () => {
  const limitButtons = 7;
  const dropDownButtonsFrom = limitButtons + 1;

  const listOfCity = cityCategoryCollection.slice(0, limitButtons);
  const restOfCities = cityCategoryCollection.slice(dropDownButtonsFrom);

  return (
    <>
      <CategoryButton>{'All'}</CategoryButton>
      {listOfCity.map((city) => {
        return <CategoryButton key={uuid()}>{city}</CategoryButton>;
      })}
      <DropDownList ButtonComponent={DotsButton} collection={restOfCities} />
    </>
  );
};

export default CityFilter;
