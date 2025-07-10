import styled from "styled-components";
import footerImage from "/src/assets/FooterImage.jpg";

const StyledFooter = styled.footer`
  background: url(${footerImage});
  background-position: center 15%;
  background-size: cover;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  width: 100%;
  min-height: ${({ theme }) => theme.sizes.footerMinHeight};
`;
export default StyledFooter;
