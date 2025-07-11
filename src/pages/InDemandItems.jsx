import {
  GiUnderwear,
  GiMonclerJacket,
  GiConverseShoe,
  GiTrousers,
} from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";

import Section from "layoutComponents/Section";
import CenteredText from "ui/CenteredText";
import CardGrid from "ui/CardGrid";
import DemandCard from "ui/rare/DemandCard";

export default function InDemandItems() {
  return (
    <Section id="in-demand-items">
      <CenteredText>
        <h2>Besonders gefragt</h2>
        <p>Diese Kleidungsstücke werden aktuell besonders häufig benötigt:</p>
      </CenteredText>

      <CardGrid $minWidth="100px">
        <DemandCard>
          <IoShirt alt="T-Shirt Icon" />
          <p>T-Shirts</p>
        </DemandCard>
        <DemandCard>
          <GiTrousers alt="Jeans Icon" />
          <p>Jeans</p>
        </DemandCard>
        <DemandCard>
          <GiMonclerJacket alt="Jacke Icon" />
          <p>Jacken</p>
        </DemandCard>
        <DemandCard>
          <GiConverseShoe alt="Schuhe Icon" />
          <p>Schuhe</p>
        </DemandCard>
        <DemandCard>
          <PiShirtFoldedFill alt="Hemden Icon" />
          <p>Hemden</p>
        </DemandCard>
        <DemandCard>
          <GiUnderwear alt="Unterwäsche Icon" />
          <p>Unterwäsche (neu)</p>
        </DemandCard>
      </CardGrid>
    </Section>
  );
}
