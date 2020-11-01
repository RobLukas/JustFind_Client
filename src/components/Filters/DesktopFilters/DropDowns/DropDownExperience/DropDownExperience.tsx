import React, { FC, useCallback, useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';
import { v4 as uuid } from 'uuid';

import { experienceLvlCollection } from 'api/expCategory';
import { ExperienceButton } from 'components/common';
import S from './DropDownExperience.styles';
import DropDownStyle from '../DropDown.styles';

const DropDownExperience: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClickAway = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <S.DropDownExperience>
      <ExperienceButton handleClick={handleClick} />
      {open ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <S.Wrapper>
            <S.ListWrapper>
              {experienceLvlCollection.map((expLevel) => (
                <DropDownStyle.DropDownListItem key={uuid()}>
                  {expLevel}
                </DropDownStyle.DropDownListItem>
              ))}
            </S.ListWrapper>
          </S.Wrapper>
        </ClickAwayListener>
      ) : null}
    </S.DropDownExperience>
  );
};

export default DropDownExperience;
