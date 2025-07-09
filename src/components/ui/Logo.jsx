import styled from 'styled-components';
import { PiGlobeHemisphereWestThin } from "react-icons/pi";

const Logo = styled(PiGlobeHemisphereWestThin)`
  width: clamp(1.1rem, 11vw, 5.5rem);
  height: clamp(1.1rem, 11vw, 5.5rem);
`;

export default () => <Logo alt="Logo" />;
