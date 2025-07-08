import Section from "../ui/Section";

export default function Titlepage({sectionNumber}) {

  return (
    <>
      <h1>Section Titlepage</h1>
      <Section number={sectionNumber}></Section>
    </>
  );
}