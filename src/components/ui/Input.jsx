import styled from "styled-components";

const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.body};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  border: 1px solid;
  border-radius: 4px;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
  outline-offset: 2px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;
export default Input;
