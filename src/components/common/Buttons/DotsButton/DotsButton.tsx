import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';

import S from './DotsButton.styles';
import DotsButtonProps from './DotsButton.interface';

const DotsButton: FC<DotsButtonProps> = ({ handleClick }: DotsButtonProps) => {
  return (
    <S.DotsButton>
      <IconButton onClick={handleClick} size={'small'}>
        <S.MoreHorizMuiIcon />
      </IconButton>
    </S.DotsButton>
  );
};

export default DotsButton;
