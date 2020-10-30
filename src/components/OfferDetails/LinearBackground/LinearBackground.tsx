import React, { FC } from 'react';
import getTechnologyResources from 'api/technologyResouces';
import LinearBackgroundProps from './LinearBackground.interface';
import S from './LinearBackground.styles';

const LinearBackground: FC<LinearBackgroundProps> = ({
  technology,
}: LinearBackgroundProps) => {
  const { linearBackgroundColor } = getTechnologyResources(technology);

  return <S.LinearBackground backgroundColor={linearBackgroundColor} />;
};

export default LinearBackground;
