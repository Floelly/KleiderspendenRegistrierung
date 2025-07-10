import styled from 'styled-components';

const Button = styled.button`
  background: inherit;
  color: inherit;
  border: 1px solid;
  font-size: ${({ theme }) => theme.fontSizes.body};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  cursor: pointer;
  transition: transform .3s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
  }
`

export default Button;