import Section from "../ui/Section";
import styled from "styled-components";

const TitlepageContainer = styled.div`
  position: relative;
  background: url('src/assets/TitleImage1.jpg');
  background-position: 35% 40%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 20vh;
    background-color: ${({theme}) => theme.colors.lightBg};
    clip-path: polygon(0 99%, 100% 0, 100% 100%, 0 100%);
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    background: ${({theme}) =>  `linear-gradient(to right, ${theme.colors.primary} 0%, rgba(255, 255, 255, 0) 20%), url('src/assets/TitleImage1.jpg')`};
    background-position: 50% 50%;
    background-size: cover;
    //clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);  //TODO: alternative bedenken
  }
`;

export default function Titlepage({sectionNumber}) {

  return (
      <Section number={sectionNumber}>
        <TitlepageContainer />
      </Section>
  );
}