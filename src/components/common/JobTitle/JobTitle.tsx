import React, { FC } from 'react';
import JobTitleProps from './JobTitle.interface';
import S from './JobTitle.styles';

const JobTitle: FC<JobTitleProps> = ({ children }: JobTitleProps) => {
  return <S.JobTitle>{children}</S.JobTitle>;
};

export default JobTitle;
