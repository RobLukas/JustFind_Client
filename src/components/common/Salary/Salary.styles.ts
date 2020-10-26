import styled from 'styled-components';

const SalaryWrapper = styled.div({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
});

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
  SalaryWrapper,
  TitleSalary,
};
