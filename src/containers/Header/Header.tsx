import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectIsDarkMode } from 'features/ThemeMode/themeModeSlice';
import { darkLogo, lightLogo } from 'assets';
import { Header as HeaderComponent } from 'components';

const Header: FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const logo = isDarkMode ? darkLogo : lightLogo;

  return <HeaderComponent logo={logo} />;
};

export default Header;
