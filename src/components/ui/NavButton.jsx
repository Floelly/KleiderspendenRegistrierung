import styled from 'styled-components';
import { IoMenuSharp  } from "react-icons/io5";

const IconButton = styled(IoMenuSharp )`
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
    transform: scale(1.1);
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const NavButton = ({ onClick }) => (
  <IconButton onClick={onClick} aria-label="Nav menu">
    <IconImage alt="Menu Icon" />
  </IconButton>
);

export default NavButton;