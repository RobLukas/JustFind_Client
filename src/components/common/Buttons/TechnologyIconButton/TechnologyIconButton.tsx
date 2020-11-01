import getTechnologyResources from 'api/technologyResouces';
import React, { FC } from 'react';
import TechnologyIconButtonProps from './TechnologyIconButton.interface';
import S from './TechnologyIconButton.styles';

const TechnologyIconButton: FC<TechnologyIconButtonProps> = ({
  technology,
}: TechnologyIconButtonProps) => {
  const {
    icon: { path, width, widthBox, heightBox },
  } = getTechnologyResources(technology);

  return (
    <S.TechnologyIconButton>
      <S.IconWrapper>
        <S.Icon
          width={width}
          height={heightBox}
          viewBox={`0 0 ${widthBox} ${heightBox}`}
        >
          <path d={path} />
        </S.Icon>
      </S.IconWrapper>
      <S.TechnologyTitle>{technology}</S.TechnologyTitle>
    </S.TechnologyIconButton>
  );
};

export default TechnologyIconButton;
