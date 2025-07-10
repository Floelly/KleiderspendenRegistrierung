export function printNode(nodeId, title = 'Drucken') {
  const source = document.getElementById(nodeId);
  if (!source) return;

  const printWindow = window.open('', '_blank', 'width=800,height=600');
  if (!printWindow) return;

  const doc = printWindow.document;

  doc.open();

  // HTML-Basis
  const html = doc.createElement('html');
  const head = doc.createElement('head');
  const body = doc.createElement('body');

  // Titel setzen
  const titleTag = doc.createElement('title');
  titleTag.innerText = title;
  head.appendChild(titleTag);

  // Alle <link rel="stylesheet"> aus Hauptfenster kopieren
  Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach(link => {
    const newLink = doc.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = link.href;
    head.appendChild(newLink);
  });

  // Alle <style> Tags aus Hauptfenster kopieren (z.B. styled-components inline styles)
  Array.from(document.querySelectorAll('style')).forEach(style => {
    const newStyle = doc.createElement('style');
    newStyle.textContent = style.textContent;
    head.appendChild(newStyle);
  });

  // Content rein
  const clonedNode = source.cloneNode(true);
  body.appendChild(clonedNode);

  html.appendChild(head);
  html.appendChild(body);
  doc.appendChild(html);

  doc.close();

  printWindow.focus();
  printWindow.print();
  printWindow.close();
}