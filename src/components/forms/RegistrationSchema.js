import { z } from 'zod';

const schema = z.object({
  clothes: z.string().min(1, "Bitte eine Kleiderart auswählen"),
  region: z.string().min(1, "Bitte ein Krisengebiet auswählen"),
});

export default schema;