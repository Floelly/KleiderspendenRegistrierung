import styled from 'styled-components';
import logoSrc from '/src/assets/favicon.svg';

const Logo = styled.img`
  width: clamp(1.1rem, 11vw, 5.5rem);
  height: clamp(1.1rem, 11vw, 5.5rem);
  transform: translateY(0.2rem);
`;

export default () => <Logo src={logoSrc} alt="Logo" />;
