import React, { FC } from 'react';

import SelectButton from 'components/common/Buttons/SelectButton/SelectButton';
import S from './MobileFilters.styles';
import { cityCategoryCollection } from 'api/cityCategory';
import { techCollection } from 'api/technologyCategory';

const MobileFilters: FC = () => {
  return (
    <S.MobileFilters>
      <SelectButton
        collection={cityCategoryCollection}
        value={'All'}
        onChange={() => console.log('changed city category')}
      />
      <S.Separate />
      <SelectButton
        collection={techCollection}
        value={'All'}
        onChange={() => console.log('changed city category')}
      />
    </S.MobileFilters>
  );
};

export default MobileFilters;
