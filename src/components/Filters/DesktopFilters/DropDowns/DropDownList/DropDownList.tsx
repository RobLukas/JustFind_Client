import React, { FC, useCallback, useState } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { v4 as uuid } from 'uuid';

import S from './DropDownList.styles';
import DropDownListProps from './DropDownList.interface';

const DropDownList: FC<DropDownListProps> = ({
  ButtonComponent,
  collection,
}: DropDownListProps) => {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => setOpen(!open), [open]);
  const handleClickAway = useCallback(() => setOpen(false), []);

  return (
    <S.DropDownList>
      <ButtonComponent handleClick={handleClick} />
      {open ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <S.ContentWrapper>
            <S.ListWrapper>
              {collection.map((item) => (
                <S.ListItem key={uuid()}>{item}</S.ListItem>
              ))}
            </S.ListWrapper>
          </S.ContentWrapper>
        </ClickAwayListener>
      ) : null}
    </S.DropDownList>
  );
};

export default DropDownList;
