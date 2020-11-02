import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SwitchModeButton } from 'components/common';
import { switchMode } from 'features/ThemeMode/themeModeSlice';
import { RootState } from 'redux/store';

const SwitchMode: FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.themeMode);
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
