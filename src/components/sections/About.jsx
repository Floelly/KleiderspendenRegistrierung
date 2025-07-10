import Section from "../ui/Section";
import RoundImage from "../ui/RoundImage";
import aboutImage from "/src/assets/About_Kleiderspende.jpg";
import styled from "styled-components";

const SideBySide = styled.div`
  @media screen AND (min-width: ${({ theme }) => theme.breakpoints.l}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.l};
  }
`;

export default function About() {

  return (
    <>
      <Section id="about">
        <SideBySide>
          <div>
            <h2>Wohin mit gut erhaltener Kleidung? Wir kümmern uns darum – weltweit.</h2>
            <p>
              Du willst Platz schaffen im Kleiderschrank und gleichzeitig Gutes tun? Bei <strong>Fairstofft!</strong> aus Frankfurt kannst du ganz einfach deine Kleiderspende mit einem Wunschziel auf der ganzen Welt verbinden. Ob nach Ghana, Indien, Rumänien oder in die Ukraine – wir bringen deine Kleidung genau dorthin, wo sie gebraucht wird.
            </p>
            <p>
              Egal ob du sie persönlich bei uns in Frankfurt vorbeibringst, sie per Post an uns versendest oder unseren kostenlosen Abholservice in deiner Nähe nutzt – der Weg deiner Spende ist einfach, transparent und sinnvoll.
            </p>
            <p><strong>Wähle dein Ziel. Wir machen den Rest.</strong></p>
          </div>
          <RoundImage src={aboutImage} alt="Foto Kleiderspende" title="Bildquelle: https://unsplash.com/photos/person-holding-white-clothes-hanger-aAVVmgod3N4" />
        </SideBySide>
      </Section>
    </>
  );
}