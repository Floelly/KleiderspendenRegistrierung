import Section from "../ui/Section";

export default function News({sectionNumber}) {

  return (
    <>
      <h1>Section News</h1>
      <Section number={sectionNumber}></Section>
    </>
  );
}