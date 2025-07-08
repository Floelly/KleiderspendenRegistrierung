import Section from "../ui/Section";

export default function Success({sectionNumber}) {

  return (
    <>
      <h1>Section Success</h1>
      <Section number={sectionNumber}></Section>
    </>
  );
}