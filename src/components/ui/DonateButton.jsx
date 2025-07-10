import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const DonateButton = styled(HashLink)`
  background-color: inherit;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes.body};
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  border: 1px solid;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    text-decoration: none;
    opacity: 1;
  }
`;
export default DonateButton;
