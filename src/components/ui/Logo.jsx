import styled from 'styled-components';

const Logo = styled.div`
  width: ${({ $size }) => $size || '100px'};
  height: ${({ $size }) => $size || '100px'};
  background-image: url("src/assets/favicon.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Logo;