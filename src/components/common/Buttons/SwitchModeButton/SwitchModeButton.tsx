import React, { FC } from 'react';
import Switch from '@material-ui/core/Switch';

import S from './SwitchModeButton.styles';
import SwitchModeButtonProps from './SwitchModeButton.interface';

const SwitchModeButton: FC<SwitchModeButtonProps> = ({
  checked,
  handleSwitchMode,
}: SwitchModeButtonProps) => {
  return (
    <S.SwitchModeButton>
      <div>
        <S.SunnyMuiIcon />
        <Switch
          checked={checked}
          color={'default'}
          onChange={handleSwitchMode}
        />
        <S.BrightnessMuiIcon />
      </div>
    </S.SwitchModeButton>
  );
};

export default SwitchModeButton;
