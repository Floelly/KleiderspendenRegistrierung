import styled from "styled-components";

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem;
`;

export default function TestComponent() {
  return <Box data-testid="test-box">Themed Box</Box>;
}
