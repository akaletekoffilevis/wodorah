import { describe, expect, it } from "vitest";
import { formatDate } from "./format";

describe("formatDate", () => {
	it("formats the same date for both locales", () => {
		expect(formatDate("2026-10-22", "fr")).toContain("2026");
		expect(formatDate("2026-10-22", "en")).toContain("2026");
	});

	it("accepts a Date instance", () => {
		expect(formatDate(new Date("2026-10-22T12:00:00Z"), "fr")).toContain("2026");
	});
});
