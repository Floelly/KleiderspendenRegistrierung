import styled from "styled-components";
import Button from "../ui/Button";
import { printNode } from "../../utils/printNode";

const ConfirmationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.m};
  align-items: center;

  & :nth-child(odd):not(button) {
    text-align: right;
  }
`;

export default function Confirmation({ data, onNew }) {
  const {
    mode,
    clothes,
    region,
    street,
    houseNumber,
    postalCode,
    additionalInfo,
    createdAt, // neuer Zeitstempel
  } = data;

  const ts = new Date(createdAt);

  return (
    <div id="registration-confirmation">
      <h2 style={{ textAlign: "center" }}>Kleiderspende registriert!</h2>

      <ConfirmationGrid>
        <strong>Art der Spende:</strong>
        <span>{mode}</span>

        {postalCode && (
          <>
            <strong>Abholadresse:</strong>
            <span>{street + " " + houseNumber}</span>

            <strong>PLZ:</strong>
            <span>{postalCode}</span>

            {additionalInfo && (
              <>
                <strong>Bemerkung:</strong>
                <span>{additionalInfo}</span>
              </>
            )}
          </>
        )}

        <strong>Kategorie der Kleidung:</strong>
        <span>{clothes}</span>

        <strong>Krisengebiet:</strong>
        <span>{region}</span>

        <strong>Datum:</strong>
        <span>{ts.toLocaleDateString()}</span>

        <strong>Uhrzeit:</strong>
        <span>
          {ts.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>

        <Button onClick={() => printNode("registration-confirmation")}>
          Drucken
        </Button>
        <Button onClick={onNew}>Weitere Spende registrieren</Button>
      </ConfirmationGrid>
    </div>
  );
}
