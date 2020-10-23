import React, { FC } from 'react';
import TileRoundedEdgesProps from './TileRoundedEdges.interface';
import S from './TileRoundedEdges.styles';

const TileRoundedEdges: FC<TileRoundedEdgesProps> = ({
  children,
}: TileRoundedEdgesProps) => {
  return <S.TileRoundedEdges>{children}</S.TileRoundedEdges>;
};

export default TileRoundedEdges;
