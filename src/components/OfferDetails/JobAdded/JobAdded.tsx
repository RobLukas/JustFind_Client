import React, { FC } from 'react';

import S from './JobAdded.styles';
import TileRoundedEdges from '../TileRoundedEdges/TileRoundedEdges';
import JobAddedProps from './JobAdded.interface';
import calculateTimeDiff from 'utils/calculateTimeDiffIsItNew';

const JobAdded: FC<JobAddedProps> = ({ createdAt }: JobAddedProps) => {
  const newUntilDays = 5;
  const { isNew, timeDifferenceInDays } = calculateTimeDiff(
    createdAt,
    newUntilDays,
  );

  return (
    <>
      {isNew ? (
        <S.NewBar>New</S.NewBar>
      ) : (
        <TileRoundedEdges>{`${timeDifferenceInDays}d ago`}</TileRoundedEdges>
      )}
    </>
  );
};

export default JobAdded;
