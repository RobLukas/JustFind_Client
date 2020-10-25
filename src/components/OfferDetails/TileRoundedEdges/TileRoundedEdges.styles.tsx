import styled from 'styled-components';

const TileRoundedEdges = styled.span`
  @media (max-width: 1020px) {
    margin-left: auto;
  }
  color: ${({ theme }) => theme.styles.primary.color};
  border: 1px solid ${({ theme }) => theme.styles.offers.techTitle.border};
  background-color: ${({ theme }) => theme.styles.offers.techTitle.background};
  display: inline-block;
  margin-left: 6px;
  border-radius: 16px;
  text-transform: lowercase;
  white-space: nowrap;
  padding: 4px 7px;
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 1ch;
`;

export default { TileRoundedEdges };
