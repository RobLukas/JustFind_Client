import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwitchModeButton } from 'components/common';
import {
  selectIsDarkMode,
  switchMode,
} from 'features/ThemeMode/themeModeSlice';

const SwitchMode: FC = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  const handleSwitchMode = useCallback(() => {
    dispatch(switchMode());
  }, [dispatch]);

  return (
    <SwitchModeButton
      checked={isDarkMode}
      handleSwitchMode={handleSwitchMode}
    />
  );
};

export default SwitchMode;
