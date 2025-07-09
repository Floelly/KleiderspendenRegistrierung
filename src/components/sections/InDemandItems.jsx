import Section from "../ui/Section";
import { GiUnderwear, GiMonclerJacket, GiConverseShoe, GiTrousers } from "react-icons/gi";
import { PiShirtFoldedFill } from "react-icons/pi";
import { IoShirt } from "react-icons/io5";

export default function InDemandItems() {
  return (
    <Section>
      <h2>Besonders gefragt</h2>
      <p>Diese Kleidungsstücke werden aktuell besonders häufig benötigt:</p>

      <ul>
        <li>
          <IoShirt alt="T-Shirt Icon" />
          <span>T-Shirts</span>
        </li>
        <li>
          <GiTrousers alt="Jeans Icon" />
          <span>Jeans</span>
        </li>
        <li>
          <GiMonclerJacket alt="Jacke Icon" />
          <span>Jacken</span>
        </li>
        <li>
          <GiConverseShoe alt="Schuhe Icon" />
          <span>Schuhe</span>
        </li>
        <li>
          <PiShirtFoldedFill alt="Hemden Icon" />
          <span>Hemden</span>
        </li>
        <li>
          <GiUnderwear alt="Unterwäsche Icon" />
          <span>Unterwäsche (neu)</span>
        </li>
      </ul>
    </Section>
  );
}