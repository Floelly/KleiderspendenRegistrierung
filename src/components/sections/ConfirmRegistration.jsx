export default function Confirmation({ data, onNew }) {
  const {
    mode,
    clothes,
    region,
    street,
    houseNumber,
    postalCode,
    additionalInfo,
    createdAt,          // neuer Zeitstempel
  } = data;

  const ts = new Date(createdAt);

  return (
    <section>
      <h2>Spende registriert!</h2>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Art der Spende:</strong> {mode === 'handover' ? 'Übergabe an Geschäftsstelle' : 'Abholung'}</li>
        {mode === 'pickup' && (
          <>
            <li><strong>Abholadresse:</strong> {street + " " + houseNumber}</li>
            <li><strong>PLZ:</strong> {postalCode}</li>
            {additionalInfo && <li><strong>Bemerkung:</strong> {additionalInfo}</li>}
          </>
        )}
        <li><strong>Kategorie Kleidung:</strong> {clothes}</li>
        <li><strong>Krisengebiet:</strong> {region}</li>
        <li><strong>Datum:</strong> {ts.toLocaleDateString()}</li>
        <li><strong>Uhrzeit:</strong> {ts.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</li>
      </ul>

      <button onClick={() => window.print()}>Drucken</button>
      <button onClick={onNew}>Weitere Spende registrieren</button>
    </section>
  );
}