import styled from 'styled-components';
import menuIconSrc from '/src/assets/MenuIcon.svg';

const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(1rem, 10vw, 5rem);
  height: clamp(1rem, 10vw, 5rem);

  &:hover {
    opacity: 0.7;
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const NavButton = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Nav menu">
    <IconImage src={menuIconSrc} alt="Menu Icon" />
  </IconButton>
);

export default NavButton;