import Section from "../ui/Section";
import annaImage from "/src/assets/news_anna.jpg";
import clothsImage from "/src/assets/news_clothes.jpg";
import hamburgImage from "/src/assets/news_hamburg.jpg";

export default function News() {

  return (
    <>
      <Section>
        <h2>Neuigkeiten & Geschichten</h2>

        <article>
          <img src={hamburgImage} alt="Neues Zentrum Hamburg" title="Bildquelle: https://unsplash.com/photos/a-brick-building-with-windows-and-a-sign-on-it-NOKuyUVkPZI" />
          <h3>Neue Hilfezentren in Hamburg & Leipzig</h3>
          <p>9. Juli 2025</p>
          <p>
            Mit großer Freude verkünden wir die Planung von zwei weiteren lokalen Hilfezentren! Ab November 2025 unterstützen wir auch direkt vor Ort in Hamburg und Leipzig Menschen dabei, gut erhaltene Kleidung weiterzugeben oder selbst Unterstützung zu finden.
          </p>
          <a href="#">Mehr erfahren</a>
        </article>

        <article>
          <img src={clothsImage} alt="Haufen Klamotten" title="Bildquelle: https://unsplash.com/photos/a-pile-of-colorful-clothing-sitting-on-top-of-a-bed-PZh2jybKh0I" />
          <h3>Spendenrekord geknackt!</h3>
          <p>24. Juni 2025</p>
          <p>
            Dank eurer unglaublichen Spendenbereitschaft haben wir die Marke von 91.000 Kleidungsstücken überschritten! Diese helfen Menschen in über 189 Regionen weltweit – von Berlin bis Bamako.
          </p>
          <a href="#">Mehr erfahren</a>
        </article>

        <article>
          <img src={annaImage} alt="Teammitglied Anna lächelt in die Kamera" title="Bildquelle: https://unsplash.com/photos/woman-wearing-black-shirt-smiling-photography-tpvSmb_EfXU"/>
          <h3>Im Fokus: Anna aus Frankfurt</h3>
          <p>10. Juni 2025</p>
          <p>
            Als Koordinatorin in unserem Frankfurter Logistikzentrum sorgt Anna dafür, dass jede Spende den richtigen Weg findet. Ihre Erfahrung, ihr Engagement und ihr großes Herz machen sie zu einer unverzichtbaren Stütze unseres Teams.
          </p>
          <a href="#">Mehr erfahren</a>
        </article>
      </Section>
    </>
  );
}