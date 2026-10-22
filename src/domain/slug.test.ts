import { describe, expect, it } from "vitest";
import { createSlug, isSlug } from "./slug";

describe("createSlug", () => {
	it("lowercases and hyphenates words", () => {
		expect(createSlug("Notre équipe")).toBe("notre-equipe");
	});

	it("strips diacritics and expands ligatures", () => {
		expect(createSlug("Cœur et æquo")).toBe("coeur-et-aequo");
	});

	it("removes leading and trailing separators", () => {
		expect(createSlug("  Wodorah 2026!  ")).toBe("wodorah-2026");
	});

	it("returns an empty string when no latin character remains", () => {
		expect(createSlug("!!!")).toBe("");
	});
});

describe("isSlug", () => {
	it("accepts canonical slugs", () => {
		expect(isSlug("a-propos")).toBe(true);
	});

	it("rejects uppercase, repeated separators and empty strings", () => {
		expect(isSlug("A propos")).toBe(false);
		expect(isSlug("a--b")).toBe(false);
		expect(isSlug("")).toBe(false);
	});
});
