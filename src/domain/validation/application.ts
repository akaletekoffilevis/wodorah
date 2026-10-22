import { z } from "zod";
import { LOCALES } from "../locale";
import { isSlug } from "../slug";
import { APPLICATION_MESSAGE_MAX_LENGTH, CV_MAX_BYTES, CV_MIME_TYPES } from "./constraints";
import { emailSchema, nameSchema, optionalString, phoneSchema } from "./fields";

export const applicationSchema = z.object({
	offerSlug: z.string().trim().refine(isSlug, "Offre invalide."),
	name: nameSchema,
	email: emailSchema,
	phone: optionalString(phoneSchema),
	message: optionalString(
		z.string().trim().max(APPLICATION_MESSAGE_MAX_LENGTH, "Le message est trop long."),
	),
	consent: z.boolean().refine((value) => value, "Le consentement est requis."),
	locale: z.enum(LOCALES),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export type CvFile = {
	readonly type: string;
	readonly size: number;
};

// The browser-provided MIME type is a first filter only: the server must still
// verify the file signature before storing it.
export function isAcceptedCvFile(file: CvFile): boolean {
	const typeIsAccepted = (CV_MIME_TYPES as readonly string[]).includes(file.type);

	return typeIsAccepted && file.size > 0 && file.size <= CV_MAX_BYTES;
}
