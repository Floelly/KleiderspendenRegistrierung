import styled from "styled-components"

const StyledSection = styled.section`
    background-color: ${({ $variant, theme}) => $variant === 'light' ? theme.colors.lightBg : theme.colors.darkBg};
    color: ${({ $variant, theme}) => $variant === 'light' ? theme.colors.lightText : theme.colors.darkText};
  `

const Section = ({ number, children, ...props }) => {
  const variant = number % 2 === 0 ? 'light' : 'dark';


  return (
      <StyledSection $variant={variant} {...props}>
        {children}
      </StyledSection>
  );
}

export default Section;