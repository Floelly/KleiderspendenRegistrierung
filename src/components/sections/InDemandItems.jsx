import Section from "../ui/Section";

export default function InDemandItems() {
  return (
    <Section>
      <h2>Besonders gefragt</h2>
      <p>Diese Kleidungsstücke werden aktuell besonders häufig benötigt:</p>

      <ul>
        <li>
          <img src="/icons/tshirt.svg" alt="T-Shirt Icon" />
          <span>T-Shirts</span>
        </li>
        <li>
          <img src="/icons/jeans.svg" alt="Jeans Icon" />
          <span>Jeans</span>
        </li>
        <li>
          <img src="/icons/jacket.svg" alt="Jacke Icon" />
          <span>Jacken</span>
        </li>
        <li>
          <img src="/icons/shoes.svg" alt="Schuhe Icon" />
          <span>Schuhe</span>
        </li>
        <li>
          <img src="/icons/sweater.svg" alt="Pullover Icon" />
          <span>Pullover</span>
        </li>
        <li>
          <img src="/icons/underwear.svg" alt="Unterwäsche Icon" />
          <span>Unterwäsche (neu)</span>
        </li>
      </ul>
    </Section>
  );
}