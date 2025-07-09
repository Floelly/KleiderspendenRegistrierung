import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m};
`;

export default FlexRow;