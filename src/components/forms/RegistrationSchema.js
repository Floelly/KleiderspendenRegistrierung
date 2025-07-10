import { z } from 'zod';

const plzRegex = /^\d{5}$/;
const houseNoRegex = /^[0-9]{1,4}[a-zA-Z]?(-[0-9]{1,4})?$/; // 12, 12a, 12‑14 …
const streetRegex  = /^[A-Za-zÄÖÜäöüß .'-]{3,}$/;           // mind. 3 Buchstaben

const schema = z.object({
    mode: z.enum([
        'Übergabe an Geschäftsstelle',
        'Abholung (Sammelfahrzeug)',
    ]),
    clothes: z.string().min(1, "Bitte eine Kleiderart auswählen"),
    region: z.string().min(1, "Bitte ein Krisengebiet auswählen"),

    postalCode: z.string().optional(),
    street: z.string().optional(),
    houseNumber: z.string().optional(),
    additionalInfo: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.mode === 'Abholung (Sammelfahrzeug)') {
    // PLZ
    if (!data.postalCode?.match(plzRegex)) {
      ctx.addIssue({ path: ['postalCode'], message: 'Bitte die 5 Ziffern der PLZ angeben', code: 'custom' });
    }
    // Straße & Hausnummer required
    if (!data.street?.match(streetRegex))      ctx.addIssue({ path: ['street'],      message: 'Bitte Straße angeben (min. 3 Buchst.)',      code: 'custom' });
    if (!data.houseNumber?.match(houseNoRegex)) ctx.addIssue({ path: ['houseNumber'], message: 'Bitte Hausnummer angeben (wie 12, 12a, 12‑14)', code: 'custom' });
  }
});

export default schema;