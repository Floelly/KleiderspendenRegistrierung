import styled from 'styled-components';

const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: ${({ $width }) => $width || "90%"};
  border-radius: 50%;
  overflow: hidden;
  margin: ${({theme}) => theme.spacing.m} auto;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const RoundImage = ({ src, alt, title, width }) => (
  <ImageWrapper $width={width}>
    <StyledImg src={src} alt={alt} title={title} />
  </ImageWrapper>
);

export default RoundImage;