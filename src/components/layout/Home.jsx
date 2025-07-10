import Titlepage from "../sections/Titlepage";
import About from "../sections/About";
import Success from "../sections/Success";
import News from "../sections/News";
import DonationLocation from "../sections/DonationLocation";
import InDemandItems from "../sections/InDemandItems";
import Registration from "../sections/Registration";
import JoinUs from "../sections/JoinUs";

export default function Home() {
  let sectionCounter = 0;

  return (
    <main>
      <Titlepage sectionNumber={++sectionCounter}></Titlepage>
      <About sectionNumber={++sectionCounter}></About>
      <Success sectionNumber={++sectionCounter}></Success>
      <InDemandItems sectionNumber={++sectionCounter}></InDemandItems>
      <DonationLocation sectionNumber={++sectionCounter}></DonationLocation>
      <News sectionNumber={++sectionCounter}></News>
      <Registration sectionNumber={++sectionCounter}></Registration>
      <JoinUs sectionNumber={++sectionCounter}></JoinUs>
    </main>
  );
}
