import styled from 'styled-components';
import { PiGlobeHemisphereWestThin } from "react-icons/pi";

const Logo = styled(PiGlobeHemisphereWestThin)`
  width: ${({ theme }) => theme.sizes.logoSize};
  height: ${({ theme }) => theme.sizes.logoSize};
`;

export default () => <Logo alt="Logo" />;
