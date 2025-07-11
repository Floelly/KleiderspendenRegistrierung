import Section from "layoutComponents/Section.jsx";
import CardGrid from "ui/CardGrid.jsx";
import CenteredText from "ui/CenteredText.jsx";
import LocationCard from "ui/rare/LocationCard.jsx";
import RoundImage from "ui/RoundImage.jsx";
import Button from "ui/Button.jsx";
import DonateButton from "ui/rare/DonateButton.jsx";

import aboutImage from "assets/About_Kleiderspende.jpg";
import workImage from "assets/joinUs_Teamarbeit.jpg";
import memberImage from "assets/joinUs_Mitgliedschaft.jpg";

export default function JoinUs() {
  return (
    <Section id="join-us">
      <div>
        <CenteredText>
          <h2>Werde Teil der Bewegung</h2>
          <p>
            Ob du Kleidung spendest, dich ehrenamtlich engagierst oder als
            Mitglied Teil unserer Vision wirst – jede Unterstützung zählt.
          </p>
        </CenteredText>

        <CardGrid>
          <LocationCard>
            <RoundImage
              src={aboutImage}
              alt="Foto Kleiderspende"
              title="Bildquelle: https://unsplash.com/photos/person-holding-white-clothes-hanger-aAVVmgod3N4"
            />
            <h3>Spende Kleidung</h3>
            <p>
              Gib deinen gut erhaltenen Kleidungsstücken ein neues Zuhause und
              hilf Menschen weltweit.
            </p>
            <DonateButton to="/#registration" smooth>
              Jetzt spenden
            </DonateButton>
          </LocationCard>

          <LocationCard>
            <RoundImage
              src={workImage}
              alt="Foto Teammitglieder beim arbeiten"
              title="Bildquelle: https://unsplash.com/photos/a-woman-and-a-girl-looking-at-a-laptop-coCGW4SsxX4"
            />
            <h3>Engagiere dich</h3>
            <p>
              Du möchtest aktiv mithelfen? Werde Teil unseres Teams vor Ort oder
              unterstütze unsere Logistik.
            </p>
            <Button>Mithelfen</Button>
          </LocationCard>

          <LocationCard>
            <RoundImage
              src={memberImage}
              alt="Foto Mitgliedschaft"
              title="Bildquelle: https://unsplash.com/photos/person-writing-on-white-paper-GJao3ZTX9gU"
            />
            <h3>Werde Mitglied</h3>
            <p>
              Gestalte unsere Zukunft mit oder sei stiller Unterstützer – als
              offizielles Mitglied unseres Vereins.
            </p>
            <Button>Mitglied werden</Button>
          </LocationCard>
        </CardGrid>
      </div>
    </Section>
  );
}
