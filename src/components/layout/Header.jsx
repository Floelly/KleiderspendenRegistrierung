import { useEffect, useState } from "react";
import styled from "styled-components";
import FancyHeader from "../ui/FancyHeader";
import NavButton from "../ui/NavButton";
import Logo from "../ui/Logo";
import FlexRow from "../ui/FlexRow";
import { ContentContainer } from "../ui/Section.jsx";

const Container = styled(ContentContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const RightGroup = styled(FlexRow)`
  margin-left: auto;
`;

const DonateButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkText};
  border: 1px solid ${({ theme }) => theme.colors.lightBg};
  padding: clamp(0.3rem, 1vw, 0.6rem) clamp(0.8rem, 2vw, 1.2rem);
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: clamp(.8rem, 2vw, 1.5rem);

  &:hover {
    opacity: 0.7;
  }
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
    <FancyHeader $isTop={isTop}>
      <Container>
        <FlexRow>
          <Logo />
          <h1>Fairstofft!</h1>
        </FlexRow>

        <RightGroup>
          <DonateButton>Jetzt Kleider spenden</DonateButton>
          <NavButton />
        </RightGroup>
      </Container>
    </FancyHeader>
  );
}