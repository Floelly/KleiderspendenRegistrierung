import styled from "styled-components"
import ContentContainer from "./Container";

const StyledSection = styled.section`
    background-color: ${({ theme}) => theme.colors.light};
    color: ${({ theme}) => theme.colors.dark };
    position: relative;
    min-height: ${({ theme }) => theme.sizes.section.minHeight};

    &:nth-child(odd) {
      background-color: ${({ theme}) => theme.colors.dark};
      color: ${({ theme}) => theme.colors.light};
    }

    &:not(:first-child):nth-child(odd) {
      padding-top: ${({ theme }) => theme.sizes.section.triangleTop};
    }

    &:not(:last-child):not(:first-child):nth-child(odd) {
      padding-bottom: ${({ theme }) => theme.sizes.section.triangleBottom};
    }
    
    &:not(:first-child):nth-child(odd)::before {
      content: '';
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      height: ${({ theme }) => theme.sizes.section.triangleTop};

      background-color: ${({theme}) => theme.colors.light};
      clip-path: polygon(0 0, 100% 0, 100% 1%, 0 100%);
      z-index: ${({ theme }) => theme.zIndex.contentOverlay};
    }    

    &:not(:last-child):nth-child(odd)::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: ${({ theme }) => theme.sizes.section.triangleTop};
      background-color: ${({theme}) => theme.colors.light};
      clip-path: polygon(0 99%, 100% 0, 100% 100%, 0 100%);
      z-index: ${({ theme }) => theme.zIndex.contentOverlay};
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