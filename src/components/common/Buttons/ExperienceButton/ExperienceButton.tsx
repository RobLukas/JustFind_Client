import React, { FC } from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import S from './ExperienceButton.styles';
import ExperienceButtonProps from './ExperienceButton.interface';

const ExperienceButton: FC<ExperienceButtonProps> = ({
  handleClick,
}: ExperienceButtonProps) => {
  return (
    <S.ExperienceButton>
      <S.DropDownButton onClick={handleClick}>
        <S.MuiIcon component={TrendingUpIcon} />
        <S.Title>{'Exp. level'}</S.Title>
        <S.MuiIcon component={ExpandMoreIcon} />
      </S.DropDownButton>
    </S.ExperienceButton>
  );
};

export default ExperienceButton;
