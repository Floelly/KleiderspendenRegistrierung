import { useEffect, useState } from "react";
import styled from "styled-components";
import FancyHeader from "../ui/FancyHeader";
import NavButton from "../ui/NavButton";
import Logo from "../ui/Logo";
import { HeaderContainer } from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";

const Container = styled(HeaderContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const RightGroup = styled(LeftGroup)`
  margin-left: auto;
  gap: ${({ theme }) => theme.spacing.m};
`;

const DonateButton = styled(Button)`
  background-color: ${({ $isTop, theme }) => $isTop? theme.colors.primary : theme.colors.dark};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.body};
  transition: transform .3s ease, background-color .3s ease;
`;

const Logoname = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 400;
  letter-spacing: 0.02em;
  text-transform: uppercase;
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
        <LeftGroup>
          <Logo />
          <Logoname>Fairstofft!</Logoname>
        </LeftGroup>

        <RightGroup>
          <DonateButton $isTop={isTop}>Jetzt Kleider spenden</DonateButton>
          <NavButton />
        </RightGroup>
      </Container>
    </FancyHeader>
  );
}