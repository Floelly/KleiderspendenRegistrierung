import styled from "styled-components";

const StyledFooter = styled.footer`
  background: url('src/assets/FooterImage.jpg');
  background-position: center 15%;
  background-size: cover;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  width: 100%;
  min-height: 20vh;
`;
export default StyledFooter;