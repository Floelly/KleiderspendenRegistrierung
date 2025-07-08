import { useEffect, useState } from "react";
import styled from "styled-components"

const StyledHeader = styled.header`
  position: ${({$isTop}) => ($isTop ? "absolute" : "fixed")};
  top: 0;
  left: 0;
  width: 100%;
  min-height: ${({$isTop}) => ($isTop ? "20vh" : "8vh")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  transition: background-color 0.3s ease, min-height 0.3s ease;
  background-color: ${({$isTop}) => ($isTop ? "transparent" : "rgba(255, 0, 0, 1)")};
`;

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <StyledHeader $isTop={isTop}>
      <h1>HEADER</h1>
    </StyledHeader>
  );
}
