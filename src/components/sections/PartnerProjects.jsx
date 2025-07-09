import Section from "../ui/Section";

export default function PartnerProjects() {

  return (
    <Section>
      <h2>Partnerprojekte weltweit</h2>
      <p>
        Gemeinsam mit unseren Partnern unterstützen wir nachhaltige Projekte rund um den Globus, die Menschen vor Ort gezielt fördern.
      </p>
      <ul className="partner-project-list">
        <li>
          <h3>Projekt Hoffnung – Kenia</h3>
          <p>Förderung von Bildungs- und Gesundheitsprogrammen in Nairobi.</p>
        </li>
        <li>
          <h3>FairWears – Indien</h3>
          <p>Nachhaltige Textilproduktion mit fairem Lohn und Umweltbewusstsein.</p>
        </li>
        <li>
          <h3>Sauberes Wasser für alle – Subsahara-Afrika</h3>
          <p>Unterstützung beim Ausbau von Trinkwasser-Infrastruktur für benachteiligte Gemeinden.</p>
        </li>
      </ul>
    </Section>
  );
}