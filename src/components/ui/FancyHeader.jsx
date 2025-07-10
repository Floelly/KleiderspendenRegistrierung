import styled from 'styled-components';

const StyledHeader = styled.header`
  transition: background-color 0.3s ease, min-height 0.3s ease;
  
  position: ${({$isTop}) => ($isTop ? "absolute" : "fixed")};
  top: 0;
  left: 0;
  width: 100%;
  min-height: ${({$isTop, theme}) => ($isTop ? theme.sizes.header.large : theme.sizes.header.small)};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  z-index: ${({theme}) => theme.zIndex.header || 10};

  //TODO: überdenken
  background-color: ${({$isTop, theme}) => ($isTop ? "transparent" : theme.colors.primary)};
  color: ${({theme}) => theme.colors.light};
`;
export default StyledHeader;