import Section from "../ui/Section";
import RoundImage from "../ui/RoundImage";

export default function About() {

  return (
    <>
      <Section>
        <div>
          <h2>Wohin mit gut erhaltener Kleidung? Wir kümmern uns darum – weltweit.</h2>
          <p>
            Du willst Platz schaffen im Kleiderschrank und gleichzeitig Gutes tun? Bei <strong>Fairstofft!</strong> aus Frankfurt kannst du ganz einfach deine Kleiderspende mit einem Wunschziel auf der ganzen Welt verbinden. Ob nach Ghana, Indien, Rumänien oder in lokale Einrichtungen – wir bringen deine Kleidung genau dorthin, wo sie gebraucht wird.
          </p>
          <p>
            Egal ob du sie persönlich bei uns in Frankfurt vorbeibringst, sie per Post an uns versendest oder unseren kostenlosen Abholservice in deiner Nähe nutzt – der Weg deiner Spende ist einfach, transparent und sinnvoll.
          </p>
          <p><strong>Wähle dein Ziel. Wir machen den Rest.</strong></p>
        </div>
        <RoundImage src="/src/assets/kleiderspende.jpg" alt="Foto Kleiderspende" />
      </Section>
    </>
  );
}