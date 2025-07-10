import NavModal from '../ui/NavModal';
import Button from '../ui/Button';

export default function Navigation({open, onClose}) {

  return (
    <>
      {open && 
        <NavModal open={open} onClose={onClose}>
          <ul>
              <li><a href="/">Startseite</a></li>
              <li><a href="/spenden">Kleider spenden</a></li>
              <li><a href="/ueber-uns">Über uns</a></li>
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/datenschutz">Datenschutzerklärung</a></li>
              <li style={{marginLeft: 'auto'}}><Button onClick={onClose}>Schließen</Button></li>
            </ul>
        </NavModal>
      }
    </>
  );
}