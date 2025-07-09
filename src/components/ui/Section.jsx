import styled from "styled-components"

export const ContentContainer = styled.div`
  width: clamp(60vw, 95vw, 1300px);  // In theme packen!
  margin: 0 auto;
  padding-block: clamp(0.1rem, 1vw, 0.5rem);
`;

const StyledSection = styled.section`
    background-color: ${({ theme}) => theme.colors.lightBg};
    color: ${({ theme}) => theme.colors.lightText };
    position: relative;
    min-height: 50vh;

    &:nth-child(odd) {
      background-color: ${({ theme}) => theme.colors.darkBg};
      color: ${({ theme}) => theme.colors.darkText};
    }

    &:not(:first-child):nth-child(odd) {
      padding-top: 20vh;
    }

    &:not(:last-child):not(:first-child):nth-child(odd) {
      padding-bottom: 20vh;
    }
    
    &:not(:first-child):nth-child(odd)::before {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: 20vh;

      background-color: ${({theme}) => theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 0, 100% 1%, 0 100%);
      z-index: 1;
    }    

    &:not(:last-child):nth-child(odd)::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 20vh;
      background-color: ${({theme}) => theme.colors.lightBg};
      clip-path: polygon(0 99%, 100% 0, 100% 100%, 0 100%);
      z-index: 1;
    }
  `

const Section = ({ children, contentWrapper = true, ...props }) => {


  return (
      <StyledSection {...props}>
        {contentWrapper ? <ContentContainer>{children}</ContentContainer> : children}
      </StyledSection>
  );
}

export default Section;