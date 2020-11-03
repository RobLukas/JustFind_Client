import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwitchModeButton } from 'components/common';
import { switchMode } from 'features/ThemeMode/themeModeSlice';
import { RootState } from 'redux/store';
import { createSelector } from '@reduxjs/toolkit';

const selectThemeMode = createSelector(
  (state: RootState) => state.themeMode,
  (themeMode) => themeMode.isDarkMode,
);

const SwitchMode: FC = () => {
  const isDarkMode = useSelector(selectThemeMode);
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
