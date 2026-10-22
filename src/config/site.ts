import type { Bilingual } from "@/domain/bilingual";

export type SiteConfig = {
	readonly url: string;
	readonly name: string;
	readonly tagline: Bilingual;
	readonly description: Bilingual;
	readonly contact: {
		readonly email: string;
		readonly address: Bilingual;
	};
	readonly social: Readonly<Record<"linkedin" | "x" | "facebook" | "youtube", string | null>>;
};

export const SITE: SiteConfig = {
	url: "https://wodorah.org",
	name: "Wodorah",
	tagline: {
		fr: "De la donnée probante à la décision publique",
		en: "From evidence to public decisions",
	},
	description: {
		fr: "Laboratoire régional de politiques publiques basé à Parakou, au Bénin.",
		en: "Regional public policy lab based in Parakou, Benin.",
	},
	contact: {
		email: "info@wodorah.org",
		address: {
			fr: "Parakou, Bénin",
			en: "Parakou, Benin",
		},
	},
	social: {
		linkedin: null,
		x: null,
		facebook: null,
		youtube: null,
	},
};
