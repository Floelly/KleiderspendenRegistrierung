import FancyBordure from "../ui/FancyBordure.jsx";
import ContentContainer from "../ui/Container.jsx";
import CenteredText from "../ui/CenteredText.jsx";

export default function Impressum() {
  return (
    <main>
      <FancyBordure/>
      <ContentContainer>
        <CenteredText>
          <h1>Impressum</h1>

          <h3>Diensteanbieter</h3>
          <address>
            Florian&nbsp;Bowitz<br />
            Fairstofft! – Verein für Kleiderspenden&nbsp;e.&nbsp;V.<br />
            Musterstraße&nbsp;1<br />
            60313&nbsp;Frankfurt&nbsp;am&nbsp;Main<br />
            Deutschland
          </address>

          <h3>Kontakt</h3>
          <p>
            Telefon: <a href="tel:+496912345678">+49&nbsp;69&nbsp;123&nbsp;456&nbsp;78</a><br />
            E‑Mail: <a href="mailto:info@fairstofft.de">info@fairstofft.de</a><br />
            Website: <a href="https://fairstofft.de">https://fairstofft.de</a>
          </p>

          <h3>Vertretungsberechtigte</h3>
          <p>Florian&nbsp;Bowitz (Vorstandsvorsitzender)</p>

          <h3>Registereintrag</h3>
          <p>
            Vereinsregister Frankfurt&nbsp;am&nbsp;Main<br />
            Registernummer&nbsp;VR&nbsp;012345
          </p>

          <h3>Umsatzsteuer‑ID</h3>
          <p>DE&nbsp;999&nbsp;999&nbsp;999&nbsp;999</p>

          <h3>Haftung für Inhalte</h3>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
            keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
            für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
            nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
            Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
            entfernen.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
            entsprechend gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung
            und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
            Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
            nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Texte auf dieser Website wurden teilweise mit Unterstützung von ChatGPT
            (OpenAI) erstellt und redaktionell angepasst.
          </p>

          <h3>Bildnachweis</h3>
          <p>
            Die verwendeten Bilder stammen von Unsplash.com und sind unter der Unsplash‑Lizenz frei verwendbar.<br />
            Beispiele:<br />
          </p>
          <p>Unsplash / Foto: <a href="https://unsplash.com/photos/person-holding-white-clothes-hanger-aAVVmgod3N4">aAVVmgod3N4</a></p>
            <p>Weitere Bildquellen werden direkt am Bild oder in den Alt‑Attributen angegeben.</p>

          <hr />
          <small>Stand: Juli 2025</small>
        </CenteredText>
      </ContentContainer>
    </main>
  );
}