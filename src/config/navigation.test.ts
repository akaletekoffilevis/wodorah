import { describe, expect, it } from "vitest";
import { MAIN_NAVIGATION } from "./navigation";
import { ROUTES } from "./routes";

describe("MAIN_NAVIGATION", () => {
	it("links each public section exactly once", () => {
		const hrefs = MAIN_NAVIGATION.map((item) => item.href);

		expect(new Set(hrefs).size).toBe(hrefs.length);
		expect(hrefs).toEqual([
			ROUTES.home,
			ROUTES.about,
			ROUTES.publications,
			ROUTES.projects,
			ROUTES.news,
			ROUTES.team,
			ROUTES.careers,
			ROUTES.contact,
		]);
	});

	it("provides a French and an English label", () => {
		for (const item of MAIN_NAVIGATION) {
			expect(item.label.fr).not.toHaveLength(0);
			expect(item.label.en).not.toHaveLength(0);
		}
	});

	it("keeps publications and news as distinct destinations", () => {
		const destinations = MAIN_NAVIGATION.map((item) => item.href);

		expect(ROUTES.publications).not.toBe(ROUTES.news);
		expect(destinations).toContain(ROUTES.publications);
		expect(destinations).toContain(ROUTES.news);
	});
});
