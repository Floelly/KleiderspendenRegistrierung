import { useEffect, useState } from "react";
import styled from "styled-components";
import FancyHeader from "../ui/FancyHeader";
import NavButton from "../ui/NavButton";
import Logo from "../ui/Logo";
import { HeaderContainer } from "../ui/Container.jsx";
import Navigation from "./Navigation.jsx";
import { useLocation } from "react-router-dom";
import DonateButton from "../ui/DonateButton.jsx";

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
  user-select: none;
`;

const RightGroup = styled(LeftGroup)`
  margin-left: auto;
  gap: ${({ theme }) => theme.spacing.m};
`;

const HeaderDonateButton = styled(DonateButton)`
  background-color: ${({ $isTop, theme }) =>
    $isTop ? theme.colors.primary : theme.colors.dark};
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
  font-weight: 600;
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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll info für header
  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Schließt navigation beim Route‑/Hash‑Wechsel
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [location]);

  return (
    <>
      <div id="top"></div>
      <FancyHeader $isTop={isTop}>
        <Container>
          <LeftGroup>
            <Logo />
            <Logoname>Fairstofft!</Logoname>
          </LeftGroup>

          <RightGroup>
            <HeaderDonateButton to="/#registration" smooth $isTop={isTop}>
              Jetzt Kleider spenden
            </HeaderDonateButton>
            <NavButton
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
            />
          </RightGroup>
        </Container>
      </FancyHeader>
      <Navigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
