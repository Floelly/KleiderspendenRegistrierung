import Section from "../ui/Section";
import styled from "styled-components";

const TitlepageContainer = styled.div`
  background-image: url('src/assets/TitleImage1.jpg');
  background-position: 35% 40%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100%;
`;

export default function Titlepage({sectionNumber}) {

  return (
    <TitlepageContainer>
      <Section number={sectionNumber}></Section>
    </TitlepageContainer>
  );
}