import styled from "styled-components";

const OptionalFlexRow = styled.div`
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.l};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.m};
    }
`
export default OptionalFlexRow;