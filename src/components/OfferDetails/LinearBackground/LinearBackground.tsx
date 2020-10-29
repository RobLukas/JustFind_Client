import React, { FC } from 'react';
import linearBackgroundTechCollection from 'styles/linearBackgroundTechEnum';
import LinearBackgroundProps from './LinearBackground.interface';
import S from './LinearBackground.styles';

const LinearBackground: FC<LinearBackgroundProps> = ({
  technology,
}: LinearBackgroundProps) => {
  return (
    <S.LinearBackground
      backgroundColor={linearBackgroundTechCollection[technology]}
    />
  );
};

export default LinearBackground;
