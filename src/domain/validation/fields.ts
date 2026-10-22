import { z } from "zod";
import { EMAIL_MAX_LENGTH, NAME_MAX_LENGTH, NAME_MIN_LENGTH, PHONE_PATTERN } from "./constraints";

export const nameSchema = z
	.string()
	.trim()
	.min(NAME_MIN_LENGTH, `Le nom doit contenir au moins ${NAME_MIN_LENGTH} caractères.`)
	.max(NAME_MAX_LENGTH, `Le nom ne peut pas dépasser ${NAME_MAX_LENGTH} caractères.`);

export const emailSchema = z
	.email("Adresse e-mail invalide.")
	.max(EMAIL_MAX_LENGTH, "L'adresse e-mail est trop longue.");

export const phoneSchema = z.string().trim().regex(PHONE_PATTERN, "Numéro de téléphone invalide.");

/**
 * Optional text fields arrive as empty strings from HTML forms but should be
 * stored as absent values, so both representations are accepted.
 */
export function optionalString(schema: z.ZodString) {
	return z.preprocess(
		(value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
		schema.optional(),
	);
}
