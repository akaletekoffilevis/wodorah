import { z } from "zod";
import { LOCALES } from "../locale";
import {
	CONTACT_MESSAGE_MAX_LENGTH,
	CONTACT_MESSAGE_MIN_LENGTH,
	SUBJECT_MAX_LENGTH,
} from "./constraints";
import { emailSchema, nameSchema, optionalString, phoneSchema } from "./fields";

export const contactSchema = z.object({
	name: nameSchema,
	email: emailSchema,
	phone: optionalString(phoneSchema),
	subject: optionalString(z.string().trim().max(SUBJECT_MAX_LENGTH, "L'objet est trop long.")),
	message: z
		.string()
		.trim()
		.min(
			CONTACT_MESSAGE_MIN_LENGTH,
			`Le message doit contenir au moins ${CONTACT_MESSAGE_MIN_LENGTH} caractères.`,
		)
		.max(
			CONTACT_MESSAGE_MAX_LENGTH,
			`Le message ne peut pas dépasser ${CONTACT_MESSAGE_MAX_LENGTH} caractères.`,
		),
	locale: z.enum(LOCALES),
});

export type ContactInput = z.infer<typeof contactSchema>;
