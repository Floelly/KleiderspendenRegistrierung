import { useState } from "react";

import Section from "layoutComponents/Section.jsx";
import RegistrationForm from "src/features/registration/RegistrationForm.jsx";
import ConfirmRegistration from "src/features/registration/ConfirmRegistration.jsx";

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
