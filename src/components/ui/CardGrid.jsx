import styled from "styled-components";

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${({$minWidth}) => $minWidth || "250px"}, 1fr));
    gap: ${({ theme }) => theme.spacing.l};
`
export default CardGrid;