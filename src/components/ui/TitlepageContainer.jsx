import styled from 'styled-components';

const TitlepageContainer = styled.div`
  background: url('src/assets/TitleImage1.jpg');
  background-position: 35% 42%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: ${({theme}) => theme.sizes.titlePageHeight};
  width: 100%;
`;
export default TitlepageContainer;