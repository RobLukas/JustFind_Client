import React, { FC, useCallback, useState } from 'react';

import S from './DropDownSalary.styles';
import { SalaryButton } from 'components/common';
import { ClickAwayListener } from '@material-ui/core';

const DropDownSalary: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClickAway = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <S.DropDownSalary>
      <SalaryButton handleClick={handleClick} />
      {open ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <S.Wrapper>
            <S.Title>{'Choose salary range'}</S.Title>
            <S.SliderMui />
          </S.Wrapper>
        </ClickAwayListener>
      ) : null}
    </S.DropDownSalary>
  );
};

export default DropDownSalary;
