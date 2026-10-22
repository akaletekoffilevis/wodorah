import { describe, expect, it } from "vitest";
import { localize } from "./bilingual";

describe("localize", () => {
	const content = { fr: "Bonjour", en: "Hello" };

	it("returns French by default", () => {
		expect(localize(content)).toBe("Bonjour");
	});

	it("returns English when requested", () => {
		expect(localize(content, "en")).toBe("Hello");
	});

	it("falls back to French for missing, blank or null translations", () => {
		expect(localize({ fr: "Bonjour" }, "en")).toBe("Bonjour");
		expect(localize({ fr: "Bonjour", en: "  " }, "en")).toBe("Bonjour");
		expect(localize({ fr: "Bonjour", en: null }, "en")).toBe("Bonjour");
	});
});
