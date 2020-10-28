import styled from 'styled-components';

const TitleSalary = styled.span({
  '@media (max-width: 1020px)': {
    lineHeight: '11px',
  },
  color: '#51b368',
  verticalAlign: 'middle',
  textAlign: 'right',
  fontSize: 16,
  whiteSpace: 'nowrap',
});

export default {
  TitleSalary,
};
