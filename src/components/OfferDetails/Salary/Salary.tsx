import React, { FC } from 'react';
import SalaryProps from './Salary.interface';
import S from './Salary.styles';

const Salary: FC<SalaryProps> = ({ salary }: SalaryProps) => {
  const { from, to, currency } = salary;

  return <S.TitleSalary>{`${from} - ${to} ${currency}`}</S.TitleSalary>;
};

export default Salary;
