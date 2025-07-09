import Section from "../ui/Section";

export default function DonationLocation() {

  return (
    <>
      <Section>
        <div>
          <article>
            <img src="pfad/zu/kapstadt.jpg" alt="Kapstadt, Südafrika" />
            <h3>Kapstadt, Südafrika</h3>
            <p>
              In Zusammenarbeit mit lokalen Organisationen versorgen wir Bedürftige in den Townships mit warmer Kleidung.
            </p>
          </article>

          <article>
            <img src="pfad/zu/manila.jpg" alt="Manila, Philippinen" />
            <h3>Manila, Philippinen</h3>
            <p>
              In den dicht besiedelten Vororten unterstützen wir Familien mit sauberer, intakter Kleidung für Alltag und Schule.
            </p>
          </article>

          <article>
            <img src="pfad/zu/ukraine.jpg" alt="Lwiw, Ukraine" />
            <h3>Lwiw, Ukraine</h3>
            <p>
              Seit 2022 liefern wir regelmäßig Kleidung an Hilfszentren im Westen der Ukraine für Geflüchtete und Bedürftige.
            </p>
          </article>
        </div>

        <div>
          <button type="button">Weitere Spendenorte entdecken</button>
        </div>
      </Section>
    </>
  );
}