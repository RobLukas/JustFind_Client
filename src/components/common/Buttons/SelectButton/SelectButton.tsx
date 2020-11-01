import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import SelectButtonProps from './SelectButton.interface';
import S from './SelectButton.styles';

const SelectButton: FC<SelectButtonProps> = ({
  collection,
  value,
  onChange,
}: SelectButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value);

  return (
    <S.Select onChange={handleChange} value={value}>
      {collection.map((item) => (
        <option key={uuid()}>{item}</option>
      ))}
    </S.Select>
  );
};

export default SelectButton;
