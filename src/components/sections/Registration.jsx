import Section from "../ui/Section";
import RegistrationForm from "../forms/RegistrationForm.jsx";
import ConfirmRegistration from "./ConfirmRegistration.jsx";
import { useState } from "react";

export default function Registration() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <>
      <Section id="registration">
        {submittedData ? (
          <ConfirmRegistration
            data={submittedData}
            onNew={() => setSubmittedData(null)}
          >
            Registration Confirmation
          </ConfirmRegistration>
        ) : (
          <RegistrationForm onSuccess={setSubmittedData} />
        )}
      </Section>
    </>
  );
}
