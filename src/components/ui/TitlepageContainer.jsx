import styled from 'styled-components';

const TitlepageContainer = styled.div`
  background: url('src/assets/TitleImage1.jpg');
  background-position: 35% 42%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: ${({theme}) => theme.sizes.titlePageHeight};
  width: 100%;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.l}) {
    background: ${({theme}) =>  `linear-gradient(to right, ${theme.colors.primary} 0%, rgba(255, 255, 255, 0) 20%), url('src/assets/TitleImage1.jpg')`};
    background-position: 35% 42%;
    background-size: cover;
  }
`;
export default TitlepageContainer;