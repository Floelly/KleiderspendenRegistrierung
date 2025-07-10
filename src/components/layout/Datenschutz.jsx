import FancyBordure from "../ui/FancyBordure.jsx";
import ContentContainer from "../ui/Container.jsx";
import CenteredText from "../ui/CenteredText.jsx";

export default function Datenschutz() {
  return (
    <main>
      <FancyBordure/>
      <ContentContainer>
        <CenteredText>
          <h1>Datenschutzerklärung</h1>

          <p>Wir freuen uns sehr über Ihr Interesse an unserem Verein „Fairstofft!“ und unserer Webseite. Datenschutz hat einen hohen Stellenwert für uns. Im Folgenden informieren wir Sie ausführlich über den Umgang mit Ihren Daten.</p>

          <h3>1. Verantwortliche Stelle</h3>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
          <address>
            Florian Bowitz<br />
            Fairstofft! – Verein für Kleiderspenden e.V.<br />
            Musterstraße 1<br />
            60313 Frankfurt am Main<br />
            Deutschland<br />
            E-Mail: <a href="mailto:info@fairstofft.de">info@fairstofft.de</a>
          </address>

          <h3>2. Erfassung und Verarbeitung personenbezogener Daten</h3>
          <p>Beim Besuch unserer Website werden automatisch Daten wie IP-Adresse, verwendeter Browser, Datum und Uhrzeit des Zugriffs protokolliert. Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs und der Verbesserung unseres Angebots. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.</p>

          <h3>3. Cookies</h3>
          <p>Unsere Website verwendet keine Cookies, die personenbezogene Daten speichern. Sollte dies in Zukunft der Fall sein, werden wir Sie gesondert darüber informieren.</p>

          <h3>4. Nutzung von Social Media und Drittanbieter-Diensten</h3>
          <p>Unsere Webseite verzichtet bewusst auf eingebundene Social-Media-Plugins oder externe Tracking-Dienste, um Ihre Daten zu schützen.</p>

          <h3>5. Ihre Rechte</h3>
          <ul style={{listStylePosition: 'inside'}}>
            <li>Sie haben das Recht auf Auskunft über die bei uns gespeicherten personenbezogenen Daten.</li>
            <li>Sie können die Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen.</li>
            <li>Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</li>
            <li>Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.</li>
          </ul>

          <h3>6. Änderungen dieser Datenschutzerklärung</h3>
          <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um sie aktuellen rechtlichen Anforderungen anzupassen oder Änderungen unserer Leistungen umzusetzen.</p>

          <hr />
          <small>Stand: Juli 2025</small>
        </CenteredText>
      </ContentContainer>
    </main>
  );
}