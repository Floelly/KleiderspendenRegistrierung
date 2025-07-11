import Section from "layoutComponents/Section";
import RoundImage from "ui/RoundImage";
import CardGrid from "ui/CardGrid";
import CenteredText from "ui/CenteredText";
import LocationCard from "ui/rare/LocationCard";
import Button from "ui/Button";

import manilaImage from "assets/location_manila.jpg";
import ukraineImage from "assets/location_ukraine.jpg";
import kapstadtImage from "assets/location_kapstadt.jpg";

export default function DonationLocation() {
  return (
    <>
      <Section id="donation-locations">
        <CenteredText>
          <h2>Spendenziele weltweit</h2>
          <p>
            Unsere Kleiderspenden erreichen Menschen in über 189 Regionen –
            unter anderem hier:
          </p>
        </CenteredText>

        <CardGrid>
          <LocationCard>
            <RoundImage
              src={kapstadtImage}
              alt="Kapstadt, Südafrika"
              title="Bildquelle: https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime-HwFJlomisJ4"
            />
            <h3>Kapstadt, Südafrika</h3>
            <p>
              In Zusammenarbeit mit lokalen Organisationen versorgen wir
              Bedürftige in den Townships mit warmer Kleidung.
            </p>
          </LocationCard>

          <LocationCard>
            <RoundImage
              src={manilaImage}
              alt="Manila, Philippinen"
              title="Bildquelle: https://unsplash.com/photos/woman-in-black-tank-top-and-black-pants-holding-umbrella-standing-beside-green-car-during-daytime--bMWUB5_Lj8"
            />
            <h3>Manila, Philippinen</h3>
            <p>
              In den dicht besiedelten Vororten unterstützen wir Familien mit
              sauberer, intakter Kleidung für Alltag und Schule.
            </p>
          </LocationCard>

          <LocationCard>
            <RoundImage
              src={ukraineImage}
              alt="Lwiw, Ukraine"
              title="Bildquelle: https://unsplash.com/photos/a-pile-of-rubble-sitting-next-to-a-building-81Dc3H1iipk"
            />
            <h3>Lwiw, Ukraine</h3>
            <p>
              Seit 2022 liefern wir regelmäßig Kleidung an Hilfszentren im
              Westen der Ukraine für Geflüchtete und Bedürftige.
            </p>
          </LocationCard>
        </CardGrid>

        <div style={{ textAlign: "right" }}>
          <Button type="button">Weitere Spendenorte entdecken</Button>
        </div>
      </Section>
    </>
  );
}
