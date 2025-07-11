import { HashLink } from "react-router-hash-link";

import NavModal from "layoutComponents/NavModal";
import Button from "ui/Button";

export default function Navigation({ open, onClose }) {
  return (
    <>
      {open && (
        <NavModal open={open} onClose={onClose}>
          <ul>
            <li>
              <HashLink smooth to="/#top">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                Über uns
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#success">
                Unsere Erfolge
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#in-demand-items">
                Dringend benötigt!
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#donation-locations">
                Wohin wird gespendet
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#news">
                News
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#registration">
                Jetzt Kleider spenden
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#join-us">
                Werde Teil des Teams
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/impressum#top">
                Impressum
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/datenschutz#top">
                Datenschutzerklärung
              </HashLink>
            </li>
            <li style={{ marginLeft: "auto" }}>
              <Button onClick={onClose}>Schließen</Button>
            </li>
          </ul>
        </NavModal>
      )}
    </>
  );
}
