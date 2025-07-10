export default function Confirmation({ data, onNew }) {
  const {
    mode,
    clothes,
    region,
    address,
    plz,
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
            <li><strong>Abholadresse:</strong> {address}</li>
            <li><strong>PLZ:</strong> {plz}</li>
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