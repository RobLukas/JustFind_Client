import React, { FC } from 'react';
import SalaryButtonProps from './SalaryButton.interface';
import S from './SalaryButton.styles';

const SalaryButton: FC<SalaryButtonProps> = ({
  handleClick,
}: SalaryButtonProps) => {
  return (
    <S.SalaryButton>
      <S.DropDownButton onClick={handleClick}>
        <S.AttachMoneyMuiIcon />
        {'Salary'}
        <S.ExpandMoreMuiIcon />
      </S.DropDownButton>
    </S.SalaryButton>
  );
};

export default SalaryButton;
