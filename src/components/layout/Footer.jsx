import CardGrid from "../ui/CardGrid";
import ContentContainer from "../ui/Container";
import StyledFooter from "../ui/FancyFooter";
import styled from "styled-components";

const FooterSection = styled.div`

  h3 {
    font-size: ${({theme}) => theme.fontSizes.small};
    opacity: .6;
    margin-bottom: ${({theme}) => theme.spacing.s};
  }

  ul {
    list-style: none;
    padding: 0;
  }

  p, a {
    color: inherit;
    margin: 0;
    font-size: ${({theme}) => theme.fontSizes.small};
  }
`;

const FooterBottom = styled.div`
  margin-top: ${({theme}) => theme.spacing.l};
  text-align: center;
  font-size: ${({theme}) => theme.fontSizes.copyright};
  color: ${({ theme }) => theme.colors.dark || '#111'};
  opacity: .6 ;
`;

export default function Footer() {
  return (
    <StyledFooter title="Bildquelle: https://www.freepik.com/free-vector/abstract-banner-with-monotone-low-poly-design_13219284.htm#fromView=keyword&page=1&position=25&uuid=6">
      <ContentContainer>
        <CardGrid>
          <FooterSection>
            <h3>Rechtliches</h3>
            <ul>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/datenschutz">Datenschutzerklärung</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Kontakt</h3>
            <ul>
              <li>
                <p>Fairstofft!</p>
                <p>Musterstraße 1</p>
                <p>60313 Frankfurt</p>
              </li>
              <li>
                <p><a href="tel:+496912345678">+49 69 12345678</a></p>
              </li>
              <li>
                <p><a href="mailto:info@fairstofft.de">info@fairstofft.de</a></p>
              </li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Startseite</a></li>
              <li><a href="/spenden">Kleider spenden</a></li>
              <li><a href="/ueber-uns">Über uns</a></li>
              <li><a href="/ueber-uns">Jetzt Mitglied werden</a></li>
            </ul>
          </FooterSection>
        </CardGrid>

        <FooterBottom>
          © 2025 Fairstofft! – Diese Website entstand im Rahmen einer Modulabschlussarbeit an der IU Erfurt.
        </FooterBottom>
      </ContentContainer>
    </StyledFooter>
  );
}