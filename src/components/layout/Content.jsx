import Titlepage from "../sections/Titlepage";
import About from "../sections/About";
import Success from "../sections/Success";
import News from "../sections/News";
import DonationLocation from "../sections/DonationLocation";
import InDemandItems from "../sections/InDemandItems";
import Registration from "../sections/Registration";
import Sponsors from "../sections/Sponsors";
import JoinUs from "../sections/JoinUs";
import PartnerProjects from "../sections/PartnerProjects";

export default function Main() {
  let sectionCounter = 0;

  return (
    <main>
      <Titlepage sectionNumber={++sectionCounter}></Titlepage>
      <About sectionNumber={++sectionCounter}></About>
      <Success sectionNumber={++sectionCounter}></Success>
      <News sectionNumber={++sectionCounter}></News>
      <DonationLocation sectionNumber={++sectionCounter}></DonationLocation>
      <InDemandItems sectionNumber={++sectionCounter}></InDemandItems>
      <Registration sectionNumber={++sectionCounter}></Registration>
      <Sponsors sectionNumber={++sectionCounter}></Sponsors>
      <JoinUs sectionNumber={++sectionCounter}></JoinUs>
      <PartnerProjects sectionNumber={++sectionCounter}></PartnerProjects>
    </main>
  );
}