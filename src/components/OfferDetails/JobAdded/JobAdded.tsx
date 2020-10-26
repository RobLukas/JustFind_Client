import React, { FC } from 'react';
import S from './JobAdded.styles';
import TileRoundedEdges from '../TileRoundedEdges/TileRoundedEdges';
import JobAddedProps from './JobAdded.interface';

const JobAdded: FC<JobAddedProps> = ({ createdAt }: JobAddedProps) => {
  const toFiveDaysIsNew = 5;
  const timeDifferenceFromNow = new Date().getDate() - createdAt.getDate();
  const isNew = timeDifferenceFromNow < toFiveDaysIsNew;

  return (
    <>
      {isNew ? (
        <S.NewBar>New</S.NewBar>
      ) : (
        <TileRoundedEdges>{`${timeDifferenceFromNow} ago`}</TileRoundedEdges>
      )}
    </>
  );
};

export default JobAdded;
