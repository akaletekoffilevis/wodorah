import type { Locale } from "@/domain/locale";

const INTL_LOCALES: Record<Locale, string> = {
	fr: "fr-FR",
	en: "en-GB",
};

export function formatDate(value: Date | string, locale: Locale): string {
	const date = typeof value === "string" ? new Date(value) : value;

	return new Intl.DateTimeFormat(INTL_LOCALES[locale], { dateStyle: "long" }).format(date);
}
