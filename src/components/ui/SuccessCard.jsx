import styled from "styled-components";

const Card = styled.div`
  text-align: center;
`;

const Success = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.2em;
`;

const Description = styled.p`
  margin-top: 0.2em;
`;

const SuccessCard = ({success, description})=> {
  return (
    <Card>
      <Success>{success}</Success>
      <Description>{description}</Description>
    </Card>
  );
}
export default SuccessCard;