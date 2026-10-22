import { z } from "zod";
import { LOCALES } from "../locale";
import { emailSchema } from "./fields";

export const newsletterSchema = z.object({
	email: emailSchema,
	locale: z.enum(LOCALES),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
