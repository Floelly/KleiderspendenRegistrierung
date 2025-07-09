import Section from "../ui/Section";
import partnerLogo1 from "/src/assets/partners_logo1.svg";
import partnerLogo2 from "/src/assets/partners_logo2.svg";
import partnerLogo3 from "/src/assets/partners_logo3.svg";

export default function PartnerProjects() {

  return (
    <Section>
      <h2>Partnerprojekte weltweit</h2>
      <p>
        Gemeinsam mit unseren Partnern unterstützen wir nachhaltige Projekte rund um den Globus, die Menschen vor Ort gezielt fördern.
      </p>
      <ul>
        <li>
          <img src={partnerLogo1} alt="Projekt Hoffnung Logo" title="Bildquelle: https://unsplash.com/illustrations/two-hands-holding-a-heart-in-the-middle-of-a-white-background-qGaXbpw-2VU"/>
          <h3>Projekt Hoffnung – Kenia</h3>
          <p>Förderung von Bildungs- und Gesundheitsprogrammen in Nairobi.</p>
        </li>
        <li>
          <img src={partnerLogo2} alt="FairWears Logo" title="Bildquelle: https://unsplash.com/illustrations/heres-a-possible-caption-black-and-white-lotus-flower-silhouette-YhzaRiXYUXw"/>
          <h3>FairWears – Indien</h3>
          <p>Nachhaltige Textilproduktion mit fairem Lohn und Umweltbewusstsein.</p>
        </li>
        <li>
          <img src={partnerLogo3} alt="Sauberes Wasser Logo" title="Bildquelle: https://unsplash.com/illustrations/two-hands-are-holding-a-small-earth-globe-5vlPVMtnlXk"/>
          <h3>Sauberes Wasser für alle – Subsahara-Afrika</h3>
          <p>Unterstützung beim Ausbau von Trinkwasser-Infrastruktur für benachteiligte Gemeinden.</p>
        </li>
      </ul>
    </Section>
  );
}