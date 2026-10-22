import { describe, expect, it } from "vitest";
import {
	APPLICATION_STATUSES,
	APPLICATION_STATUS_LABELS,
	ARTICLE_CATEGORIES,
	ARTICLE_CATEGORY_LABELS,
	ARTICLE_FORMATS,
	ARTICLE_FORMAT_LABELS,
	OFFER_STATUSES,
	OFFER_STATUS_LABELS,
	OFFER_TYPES,
	OFFER_TYPE_LABELS,
	PROJECT_STATUSES,
	PROJECT_STATUS_LABELS,
	PUBLICATION_TYPES,
	PUBLICATION_TYPE_LABELS,
	RECRUITMENT_PROGRAMMES,
	RECRUITMENT_PROGRAMME_LABELS,
} from "./taxonomy";

const taxonomies: readonly {
	name: string;
	values: readonly string[];
	labels: Readonly<Record<string, { readonly fr: string; readonly en: string }>>;
}[] = [
	{
		name: "ARTICLE_CATEGORIES",
		values: ARTICLE_CATEGORIES,
		labels: ARTICLE_CATEGORY_LABELS,
	},
	{
		name: "ARTICLE_FORMATS",
		values: ARTICLE_FORMATS,
		labels: ARTICLE_FORMAT_LABELS,
	},
	{
		name: "PUBLICATION_TYPES",
		values: PUBLICATION_TYPES,
		labels: PUBLICATION_TYPE_LABELS,
	},
	{ name: "OFFER_TYPES", values: OFFER_TYPES, labels: OFFER_TYPE_LABELS },
	{ name: "OFFER_STATUSES", values: OFFER_STATUSES, labels: OFFER_STATUS_LABELS },
	{
		name: "APPLICATION_STATUSES",
		values: APPLICATION_STATUSES,
		labels: APPLICATION_STATUS_LABELS,
	},
	{ name: "PROJECT_STATUSES", values: PROJECT_STATUSES, labels: PROJECT_STATUS_LABELS },
	{
		name: "RECRUITMENT_PROGRAMMES",
		values: RECRUITMENT_PROGRAMMES,
		labels: RECRUITMENT_PROGRAMME_LABELS,
	},
];

describe.each(taxonomies)("$name", ({ values, labels }) => {
	it("has no duplicate value", () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it("provides a French and an English label for every value", () => {
		for (const value of values) {
			const label = labels[value];

			expect(label).toBeDefined();
			expect(label.fr).not.toHaveLength(0);
			expect(label.en).not.toHaveLength(0);
		}
	});

	it("does not define labels for unknown values", () => {
		expect(Object.keys(labels).sort()).toEqual([...values].sort());
	});
});
