import { useForm } from 'react-hook-form';
import Button from '../ui/Button.jsx'
import Select from '../ui/Select.jsx';
import Input from '../ui/Input.jsx';
import styled from 'styled-components';
import { FaTruckFast } from "react-icons/fa6";
import { TbBuildingStore } from "react-icons/tb";
import { zodResolver } from '@hookform/resolvers/zod';
import schema from './RegistrationSchema.js';

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const FormGrid = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.m};

  @media screen AND (min-width: ${({theme}) => theme.breakpoints.m}) {
    max-width: ${({theme}) => theme.breakpoints.l};
    width: 90%;
    margin: 0 auto;
  }
`;

const GridLabel = styled.label`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({theme}) => theme.spacing.xs};

    @media screen AND (min-width: ${({theme}) => theme.breakpoints.m}) {
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: ${({theme}) => theme.spacing.m};

        & > span {
            text-align:right;
        }
  }
`

const ModeWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme}) => theme.spacing.m};
    text-align: center;
`

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + label {
    background-color: ${({theme}) => theme.colors.primary};
    border-color: ${({theme}) => theme.colors.primary};
  }
`;

const RadioLabel = styled.label`
  display: block;
  padding: ${({theme}) => theme.spacing.s} ${({theme}) => theme.spacing.m};
  border: 1px solid;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    border-color: ${({theme}) => theme.colors.primary};
  }
`;

const IconWrapper = styled.p`
    margin:0;
    font-size: ${({theme}) => theme.sizes.iconSize};
`

const ErrorP = styled.p`
  color: ${({theme}) => theme.colors.primary};
  margin-top: 0;
  text-align: center;
`

export default function RegistrationForm({ onSuccess }) {
  const { register, handleSubmit, watch, formState: {errors} } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { 
        mode: 'Übergabe an Geschäftsstelle',
        clothes: '',
        region: '',
    },
  });


  const onSubmit = async (data) => {
    await sleep(1000);

    const stamped = {
        ...data,
        createdAt: new Date().toISOString(),
    };

    onSuccess(stamped);

    //an den Anfang der Section scrollen
    const el = document.getElementById('registration');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const mode = watch('mode');

  return (
    <FormGrid noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Jetzt registrieren und Kleider spenden</h2>
        {/* 1) Modus */}
        <ModeWrapper>
            <HiddenRadio
                id="handover"
                value="Übergabe an Geschäftsstelle"
                {...register('mode')}
                />
            <RadioLabel htmlFor="handover">
                <IconWrapper><TbBuildingStore /></IconWrapper>
                <span>Übergabe an Geschäftsstelle</span>
            </RadioLabel>
            <HiddenRadio
                id="pickup"
                value="Abholung (Sammelfahrzeug)"
                {...register('mode')}
            />
            <RadioLabel htmlFor="pickup">
                <IconWrapper><FaTruckFast/></IconWrapper>
                <span>Abholung (Sammelfahrzeug)</span>
            </RadioLabel>
        </ModeWrapper>
        {errors.mode && <ErrorP>{errors.mode.message}</ErrorP>}

      { /* 1.5) Adress */
      mode === 'Abholung (Sammelfahrzeug)' && (
        <>
          <GridLabel>
            <span>Postleitzahl</span>
            <Input 
              type="text"
              inputMode='numeric'
              pattern="\d{5}"
              maxLength={5}
              required 
              {...register('postalCode')} 
              placeholder="PLZ" />
          </GridLabel>
          {errors.postalCode && <ErrorP>{errors.postalCode.message}</ErrorP>}

          <GridLabel>
            <span>Straße</span>
            <Input 
              type="text" 
              required
              {...register('street')} 
              placeholder="Straße" />
          </GridLabel>
          {errors.street && <ErrorP>{errors.street.message}</ErrorP>}

          <GridLabel>
            <span>Hausnummer</span>
            <Input 
              type="text" 
              pattern="^[0-9]{1,4}[a-zA-Z]?(-[0-9]{1,4})?$"
              required
              {...register('houseNumber')} 
              placeholder="Hausnummer" />
          </GridLabel>
          {errors.houseNumber && <ErrorP>{errors.houseNumber.message}</ErrorP>}
          
          <GridLabel>
            <span>Zusatzbemerkung</span>
            <Input 
              type="text" 
              {...register('additionalInfo')} 
              placeholder="z.B. 3. Stock, links" />
          </GridLabel>
          {errors.additionalInfo && <ErrorP>{errors.additionalInfo.message}</ErrorP>}
        </>
      )}

      {/* 2) Kleiderart */}
      <GridLabel>
        <span>Art der Kleidung</span>
        <Select required {...register('clothes')}>
          <option value="" disabled>Bitte wählen …</option>
          <option value="Oberteile (T‑Shirts, Blusen, Hemden)">Oberteile (T‑Shirts, Blusen, Hemden)</option>
          <option value="Hosen & Röcke">Hosen & Röcke</option>
          <option value="Jacken & Mäntel">Jacken & Mäntel</option>
          <option value="shoes">Schuhe</option>
          <option value="Kinder­kleidung">Kinder­kleidung</option>
          <option value="Gemischte Kleiderspende">Gemischte Kleiderspende</option>
        </Select>
      </GridLabel>
      {errors.clothes && <ErrorP>{errors.clothes.message}</ErrorP>}

      {/* 3) Krisenregion */}
      <GridLabel>
        <span>Krisengebiet</span>
        <Select required {...register('region')}>
          <option value="" disabled>Bitte wählen …</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Gaza">Gaza</option>
          <option value="Sudan">Sudan</option>
          <option value="Afghanistan">Afghanistan</option>
        </Select>
      </GridLabel>
      {errors.region && <ErrorP>{errors.region.message}</ErrorP>}

      <Button type="submit">Weiter</Button>
    </FormGrid>
  );
}