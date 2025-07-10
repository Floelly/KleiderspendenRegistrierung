import styled from "styled-components";
import Section from "../ui/Section";
import RegistrationForm from "../forms/RegistrationForm.jsx";
import { useState } from "react";

const ConfirmRegistration = styled.h1`
  
`

export default function Registration() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <>
      <Section id="registration">
        {submittedData ? 
          <ConfirmRegistration data={submittedData} onPointerDown={() => setSubmittedData(null)}>Registration Confirmation</ConfirmRegistration>
        : <RegistrationForm onSuccess={setSubmittedData}/>}
      </Section>
    </>
  );
}