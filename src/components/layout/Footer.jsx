import styled from "styled-components";

export default function Footer() {
  const Footer = styled.footer`
    background: url('src/assets/FooterImage.jpg');
    background-position: center 15%;
    background-size: cover;
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;
    width: 100%;
    min-height: 20vh;
  `;


  return (
    <Footer>
      <h1>FOOTER</h1>
    </Footer>
  );
}