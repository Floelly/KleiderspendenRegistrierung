import styled from "styled-components";

const Select = styled.select`
  font-size: ${({ theme }) => theme.fontSizes.body};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  border: 1px solid;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
  outline-offset: 2px;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;

export default Select;
