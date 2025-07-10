import { useForm } from 'react-hook-form';

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export default function RegistrationForm({ onSuccess }) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { 
        mode: 'handover',
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
  };

  const mode = watch('mode');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 1) Modus */}
      <label>
        <input
          type="radio"
          value="handover"
          {...register('mode')}
        />
        Übergabe an Geschäftsstelle
      </label>
      <label>
        <input
          type="radio"
          value="pickup"
          {...register('mode')}
        />
        Abholung (Sammelfahrzeug)
      </label>
      {mode === 'pickup' && (
        <>
            <label>
                Postleitzahl
                <input 
                    type="text"
                    inputMode='numeric'
                    pattern="\d{5}"
                    maxLength={5}
                    required 
                    {...register('postalCode')} 
                    placeholder="PLZ" />
            </label>
            <label>
                Straße
                <input 
                    type="text" 
                    required
                    {...register('street')} 
                    placeholder="Straße" />
            </label>
            <label>
                Hausnummer
                <input 
                    type="text" 
                    pattern="/^[0-9]{1,4}[a-zA-Z]?(-[0-9]{1,4})?$/"
                    required
                    {...register('houseNumber')} 
                    placeholder="Hausnummer" />
            </label>
            <label>
            Zusatzbemerkung
            <input type="text" {...register('additionalInfo')} placeholder="z.B. 3. Stock, links" />
            </label>
        </>
      )}

      {/* 2) Kleiderart */}
      <label>
        Art der Kleidung
        <select required {...register('clothes')}>
          <option value="" disabled>Bitte wählen …</option>
          <option value="Oberteile (T‑Shirts, Blusen, Hemden)">Oberteile (T‑Shirts, Blusen, Hemden)</option>
          <option value="Hosen & Röcke">Hosen & Röcke</option>
          <option value="Jacken & Mäntel">Jacken & Mäntel</option>
          <option value="shoes">Schuhe</option>
          <option value="Kinder­kleidung">Kinder­kleidung</option>
          <option value="Gemischte Kleiderspende">Gemischte Kleiderspende</option>
        </select>
      </label>

      {/* 3) Krisenregion */}
      <label>
        Krisengebiet
        <select required {...register('region')}>
          <option value="" disabled>Bitte wählen …</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Gaza">Gaza</option>
          <option value="Sudan">Sudan</option>
          <option value="Afghanistan">Afghanistan</option>
        </select>
      </label>

      <button type="submit">Weiter</button>
    </form>
  );
}