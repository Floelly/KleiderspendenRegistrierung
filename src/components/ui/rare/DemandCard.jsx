import styled from "styled-components";

const DemandCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  & svg {
    font-size: ${({ theme }) => theme.sizes.logoSize};
    margin-bottom: 0.2em;
    margin-inline: auto;
  }

  & > p {
    margin-top: 0.2em;
  }
`;
export default DemandCard;
