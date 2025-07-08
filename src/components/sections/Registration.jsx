import Section from "../ui/Section";

export default function Registration({sectionNumber}) {

  return (
    <>
      <h1>Section Registration</h1>
      <Section number={sectionNumber}></Section>
    </>
  );
}