import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { techCollection as technologies } from 'api/technologyCategory';
import { CategoryButton, TechnologyIconButton } from 'components/common';

const TechnologyFilter: FC = () => {
  return (
    <>
      <CategoryButton>{'All'}</CategoryButton>
      {technologies.map((technology) => (
        <TechnologyIconButton key={uuid()} technology={technology} />
      ))}
    </>
  );
};

export default TechnologyFilter;
