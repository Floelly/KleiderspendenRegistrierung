import Section from "../ui/Section";
import sponsorLogo1 from "/src/assets/sponsors_logo1.svg";
import sponsorLogo2 from "/src/assets/sponsors_logo2.svg";
import sponsorLogo3 from "/src/assets/sponsors_logo3.svg";
import sponsorLogo4 from "/src/assets/sponsors_logo4.svg";
import sponsorLogo5 from "/src/assets/sponsors_logo5.svg";
import sponsorLogo6 from "/src/assets/sponsors_logo6.svg";
import sponsorLogo7 from "/src/assets/sponsors_logo7.svg";

export default function Sponsors() {

  return (
    <Section>
      <h2>Unsere Unterstützer</h2>
      <p>Ein großes Dankeschön an unsere Partner & Sponsoren:</p>

      <ul>
        <li>
          <img src={sponsorLogo1} alt="Western Union Logo" title="Bildquelle: https://unsplash.com/illustrations/the-western-union-logo-on-a-white-background-lXiy7Gv3MDY" />
        </li>
        <li>
          <img src={sponsorLogo2} alt="Citi Logo" title="Bildquelle: https://unsplash.com/illustrations/the-citi-logo-with-a-red-circle-around-it-IbTyp9QRx2Q" />
        </li>
        <li>
          <img src={sponsorLogo3} alt="2CO Logo" title="Bildquelle: https://unsplash.com/illustrations/a-blue-circle-with-the-words-2cc-on-it-CZEcLbZ6zpg" />
        </li>
        <li>
          <img src={sponsorLogo4} alt="Maestro Logo" title="Bildquelle: https://unsplash.com/illustrations/the-logo-for-maestro-QfF0-clGjEw"/>
        </li>
        <li>
          <img src={sponsorLogo5} alt="Skrill Logo" title="Bildquelle: https://unsplash.com/illustrations/the-skrill-logo-is-shown-on-a-white-background-VNCXI-BvG6I" />
        </li>
        <li>
          <img src={sponsorLogo6} alt="Cirrus Logo" title="Bildquelle: https://unsplash.com/illustrations/the-cirrus-logo-on-a-white-background-kzlrYnBUfT8"/>
        </li>
        <li>
          <img src={sponsorLogo7} alt="BBB Logo" title="Bildquelle: https://unsplash.com/illustrations/the-bbb-logo-3KzP1S1CUzE" />
        </li>
        <li>
          <img src={sponsorLogo2} alt="Citi Logo" title="Bildquelle: https://unsplash.com/illustrations/the-citi-logo-with-a-red-circle-around-it-IbTyp9QRx2Q" />
        </li>
        <li>
          <img src={sponsorLogo3} alt="2CO Logo" title="Bildquelle: https://unsplash.com/illustrations/a-blue-circle-with-the-words-2cc-on-it-CZEcLbZ6zpg" />
        </li>
        <li>
          <img src={sponsorLogo7} alt="BBB Logo" title="Bildquelle: https://unsplash.com/illustrations/the-bbb-logo-3KzP1S1CUzE" />
        </li>
      </ul>
    </Section>
  );
}