import styled from 'styled-components';

const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const RoundImage = ({ src, alt, title }) => (
  <ImageWrapper>
    <StyledImg src={src} alt={alt} title={title} />
  </ImageWrapper>
);

export default RoundImage;