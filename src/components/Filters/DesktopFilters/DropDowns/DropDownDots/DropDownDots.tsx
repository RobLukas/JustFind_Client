import React, { FC, useCallback, useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import S from './DropDownDots.styles';
import { DotsButton } from 'components/common';
import DropDownDotsProps from './DropDownDots.interface';

const DropDownDots: FC<DropDownDotsProps> = ({
  children,
}: DropDownDotsProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen(!open), [open]);
  const handleClickAway = useCallback(() => setOpen(false), []);

  return (
    <S.DropDownDots>
      <DotsButton handleClick={handleClick} />
      {open ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <S.ContentWrapper>
            <S.ListWrapper>{children}</S.ListWrapper>
          </S.ContentWrapper>
        </ClickAwayListener>
      ) : null}
    </S.DropDownDots>
  );
};

export default DropDownDots;
