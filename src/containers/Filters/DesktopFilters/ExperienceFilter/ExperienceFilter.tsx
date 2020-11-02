import { experienceLvlCollection } from 'api/expCategory';
import { ExperienceButton } from 'components/common';
import DropDownList from 'components/Filters/DesktopFilters/DropDowns/DropDownList/DropDownList';
import React, { FC } from 'react';

const ExperienceFilter: FC = () => {
  return (
    <DropDownList
      ButtonComponent={ExperienceButton}
      collection={experienceLvlCollection}
    />
  );
};

export default ExperienceFilter;
