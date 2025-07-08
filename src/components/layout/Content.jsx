import Section from "../ui/Section";
import Titlepage from "../sections/Titlepage";

export default function Main() {
  let sectionCounter = 0;

  return (
    <main>
      <h1>MAIN</h1>
      <Titlepage sectionNumber={++sectionCounter}></Titlepage>
      <Section number={++sectionCounter}></Section>
      <Section number={++sectionCounter}></Section>
      <Section number={++sectionCounter}></Section>
      <Section number={++sectionCounter}></Section>
      <Section number={++sectionCounter}></Section>
      <Section number={++sectionCounter}></Section>
      <Section number={++sectionCounter}></Section>
      <Section number={++sectionCounter}></Section>
    </main>
  );
}