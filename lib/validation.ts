import * as z from "zod";

export const agentSchema = z.object({
  name: z.string().min(2),
  lastname: z.string().min(2),
  email: z
    .string()
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@redberry\.ge$/),
  phoneNum: z.string().regex(/^\d+$/),
  image: z.string().min(1),
});
