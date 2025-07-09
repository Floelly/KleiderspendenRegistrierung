import { useEffect, useState } from "react";
import styled from "styled-components";
import FancyHeader from "../ui/FancyHeader";
import NavButton from "../ui/NavButton";
import Logo from "../ui/Logo";
import { HeaderContainer } from "../ui/Container.jsx";

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

const DonateButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  cursor: pointer;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.body};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
  }
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
          <DonateButton>Jetzt Kleider spenden</DonateButton>
          <NavButton />
        </RightGroup>
      </Container>
    </FancyHeader>
  );
}