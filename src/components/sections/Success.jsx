import Section from "../ui/Section";
import OptionalFlexRow from "../ui/OptionalFlexRow.jsx";
import SuccessCard from "../ui/SuccessCard.jsx";
import CenteredText from "../ui/CenteredText.jsx";

export default function Success() {

  return (
    <>
      <Section>
        <CenteredText>
          <h2>Unser gemeinsamer Erfolg</h2>
          <p>
            Mit deiner Unterstützung konnten wir bereits tausende Kleidungsstücke dorthin bringen, wo sie am dringendsten gebraucht werden.
            Ob direkt in deiner Nähe oder an Orten auf der ganzen Welt – jede Spende zählt!
          </p>
        </CenteredText>

        <OptionalFlexRow>
          <SuccessCard success="1900+" description="glückliche Spender:innen"/>
          <SuccessCard success="17" description="verschiedene Spendenziele weltweit"/>
          <SuccessCard success="17.000+" description="gespendete Kleidungsstücke"/>
        </OptionalFlexRow>
      </Section>
    </>
  );
}