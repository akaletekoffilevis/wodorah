import { DEFAULT_LOCALE, type Locale } from "./locale";

export type Bilingual<T = string> = {
	readonly fr: T;
	readonly en?: T | null;
};

/**
 * Returns the requested translation and falls back to French when the
 * translation is missing or blank, mirroring the rule of the previous site.
 */
export function localize<T>(content: Bilingual<T>, locale: Locale = DEFAULT_LOCALE): T {
	if (locale !== "en" || content.en === undefined || content.en === null) {
		return content.fr;
	}

	if (typeof content.en === "string" && content.en.trim() === "") {
		return content.fr;
	}

	return content.en;
}
