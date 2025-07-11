import Titlepage from "pages/Titlepage";
import About from "pages/About";
import Success from "pages/Success";
import News from "pages/News";
import DonationLocation from "pages/DonationLocation";
import InDemandItems from "pages/InDemandItems";
import Registration from "pages/Registration";
import JoinUs from "pages/JoinUs";

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
