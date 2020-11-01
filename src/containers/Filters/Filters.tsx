import React, { FC } from 'react';
import DesktopFilters from './DesktopFilters/DesktopFilters';
import MobileFilters from './MobileFilters/MobileFilters';

const Filters: FC = () => {
  return (
    <>
      <MobileFilters />
      <DesktopFilters />
    </>
  );
};

export default Filters;
