import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact";
import { NAME_MAX_LENGTH } from "./constraints";

const validContact = {
	name: "Awa Dossou",
	email: "awa@example.com",
	phone: "+229 97 00 00 00",
	subject: "Demande d'information",
	message: "Bonjour, je souhaite en savoir plus sur vos programmes.",
	locale: "fr",
};

describe("contactSchema", () => {
	it("accepts a valid message and trims text fields", () => {
		const result = contactSchema.safeParse({
			...validContact,
			name: "  Awa Dossou  ",
		});

		expect(result.success).toBe(true);
		expect(result.data?.name).toBe("Awa Dossou");
	});

	it("turns blank optional fields into undefined", () => {
		const result = contactSchema.safeParse({
			...validContact,
			phone: "",
			subject: "   ",
		});

		expect(result.success).toBe(true);
		expect(result.data?.phone).toBeUndefined();
		expect(result.data?.subject).toBeUndefined();
	});

	it("rejects an invalid e-mail address", () => {
		const result = contactSchema.safeParse({ ...validContact, email: "not-an-email" });

		expect(result.success).toBe(false);
	});

	it("rejects a name outside the allowed boundaries", () => {
		const tooShort = contactSchema.safeParse({ ...validContact, name: "A" });
		const tooLong = contactSchema.safeParse({
			...validContact,
			name: "a".repeat(NAME_MAX_LENGTH + 1),
		});

		expect(tooShort.success).toBe(false);
		expect(tooLong.success).toBe(false);
	});

	it("rejects a message shorter than ten characters", () => {
		const result = contactSchema.safeParse({ ...validContact, message: "Trop bref" });

		expect(result.success).toBe(false);
	});

	it("rejects an invalid phone number", () => {
		const result = contactSchema.safeParse({ ...validContact, phone: "abc" });

		expect(result.success).toBe(false);
	});
});
