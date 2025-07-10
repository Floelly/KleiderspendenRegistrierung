import { useForm } from 'react-hook-form';

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export default function RegistrationForm({ onSuccess }) {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { mode: 'handover' },
  });


  const onSubmit = async (data) => {
    await sleep(1000);

    const stamped = {
      ...data,
      createdAt: new Date().toISOString(),
    };

    onSuccess(stamped);
  };

  //const mode = watch('mode'); // später für Conditional Fields

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

      {/* 2) Kleiderart */}
      <label>
        Art der Kleidung
        <select {...register('clothes')}>
          <option value="tops">Oberteile (T‑Shirts, Blusen, Hemden)</option>
          <option value="bottoms">Hosen & Röcke</option>
          <option value="outerwear">Jacken & Mäntel</option>
          <option value="shoes">Schuhe</option>
          <option value="kids">Kinder­kleidung</option>
          <option value="mixed">Gemischte Kleiderspende</option>
        </select>
      </label>

      {/* 3) Krisenregion */}
      <label>
        Krisengebiet
        <select {...register('region')}>
          <option value="ukraine">Ukraine</option>
          <option value="gaza">Gaza</option>
          <option value="sudan">Sudan</option>
          <option value="afghanistan">Afghanistan</option>
        </select>
      </label>

      <button type="submit">Weiter</button>
    </form>
  );
}