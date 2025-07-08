import Section from "../ui/Section";
import styled from "styled-components";

const TitlepageContainer = styled.div`
  background-color: rgba(0, 255, 255, 0.3);
  height: 90vh;
  width: 100%;
`;

export default function Titlepage({sectionNumber}) {

  return (
    <TitlepageContainer>
      <h1>Section Titlepage</h1>
      <Section number={sectionNumber}></Section>
    </TitlepageContainer>
  );
}