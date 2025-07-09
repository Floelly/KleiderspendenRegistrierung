import styled from 'styled-components';

const ImageWrapper = styled.div`
  aspect-ratio: 16 / 9;
  width: 100%;
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

const LandscapeImage = ({ src, alt, title }) => (
  <ImageWrapper>
    <StyledImg src={src} alt={alt} title={title} />
  </ImageWrapper>
);

export default LandscapeImage;