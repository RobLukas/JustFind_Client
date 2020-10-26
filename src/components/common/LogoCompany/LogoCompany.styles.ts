import styled from 'styled-components';

const Image = styled.img({
  position: 'absolute',
  border: 0,
  top: '50%',
  left: '50%',
  maxHeight: 40,
  maxWidth: 85,
  transform: 'translate(-50%, -50%)',
  display: 'block',
  borderRadius: 5,
});

export default { Image };
