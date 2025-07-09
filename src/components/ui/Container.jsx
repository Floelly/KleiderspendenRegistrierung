import styled from "styled-components";

const ContentContainer = styled.div`
  width: ${({ theme }) => theme.sizes.contentWidth};
  margin: 0 auto;
  padding-block: ${({ theme }) => theme.spacing.l};
`;

export default ContentContainer;

export const HeaderContainer = styled(ContentContainer)`
  padding-block: ${({ theme }) => theme.spacing.xs};
`;
