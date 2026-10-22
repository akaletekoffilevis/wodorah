import type { Bilingual } from "./bilingual";

export const ARTICLE_CATEGORIES = [
	"innovation",
	"dialogue_politique",
	"renforcement_capacites",
	"recherche_donnees",
	"mobilisation_connaissances",
	"annonce",
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export const ARTICLE_CATEGORY_LABELS = {
	innovation: { fr: "Innovation", en: "Innovation" },
	dialogue_politique: { fr: "Dialogue politique", en: "Policy dialogue" },
	renforcement_capacites: { fr: "Renforcement des capacités", en: "Capacity building" },
	recherche_donnees: { fr: "Recherche & données", en: "Research & data" },
	mobilisation_connaissances: {
		fr: "Mobilisation des connaissances",
		en: "Knowledge mobilization",
	},
	annonce: { fr: "Annonce", en: "Announcement" },
} as const satisfies Record<ArticleCategory, Bilingual>;

export const ARTICLE_FORMATS = [
	"article",
	"tribune",
	"communique",
	"annonce",
	"video",
	"webinaire",
	"conference",
	"seminaire",
	"photo",
] as const;

export type ArticleFormat = (typeof ARTICLE_FORMATS)[number];

export const ARTICLE_FORMAT_LABELS = {
	article: { fr: "Article", en: "Article" },
	tribune: { fr: "Tribune", en: "Opinion piece" },
	communique: { fr: "Communiqué", en: "Press release" },
	annonce: { fr: "Annonce", en: "Announcement" },
	video: { fr: "Vidéo", en: "Video" },
	webinaire: { fr: "Webinaire", en: "Webinar" },
	conference: { fr: "Conférence", en: "Conference" },
	seminaire: { fr: "Séminaire", en: "Seminar" },
	photo: { fr: "Photo", en: "Photo" },
} as const satisfies Record<ArticleFormat, Bilingual>;

export const PUBLICATION_TYPES = [
	"factsheet_policy_brief",
	"rapport_working_paper",
	"article_scientifique",
] as const;

export type PublicationType = (typeof PUBLICATION_TYPES)[number];

export const PUBLICATION_TYPE_LABELS = {
	factsheet_policy_brief: {
		fr: "Factsheets et Policy briefs",
		en: "Factsheets & policy briefs",
	},
	rapport_working_paper: {
		fr: "Rapports d'études et Working papers",
		en: "Research reports & working papers",
	},
	article_scientifique: {
		fr: "Articles scientifiques",
		en: "Scientific articles",
	},
} as const satisfies Record<PublicationType, Bilingual>;

export const OFFER_TYPES = ["recrutement", "consultance"] as const;

export type OfferType = (typeof OFFER_TYPES)[number];

export const OFFER_TYPE_LABELS = {
	recrutement: { fr: "Recrutement", en: "Recruitment" },
	consultance: { fr: "Consultance", en: "Consultancy" },
} as const satisfies Record<OfferType, Bilingual>;

export const OFFER_STATUSES = ["ouvert", "en_cours", "cloture"] as const;

export type OfferStatus = (typeof OFFER_STATUSES)[number];

export const OFFER_STATUS_LABELS = {
	ouvert: { fr: "Ouvert", en: "Open" },
	en_cours: { fr: "En cours", en: "Ongoing" },
	cloture: { fr: "Clôturé", en: "Closed" },
} as const satisfies Record<OfferStatus, Bilingual>;

export const APPLICATION_STATUSES = ["nouveau", "lu", "retenu", "ecarte"] as const;

export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];

export const APPLICATION_STATUS_LABELS = {
	nouveau: { fr: "Nouveau", en: "New" },
	lu: { fr: "Lu", en: "Read" },
	retenu: { fr: "Retenu", en: "Shortlisted" },
	ecarte: { fr: "Écarté", en: "Rejected" },
} as const satisfies Record<ApplicationStatus, Bilingual>;

export const PROJECT_STATUSES = ["en_cours", "cloture"] as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export const PROJECT_STATUS_LABELS = {
	en_cours: { fr: "En cours", en: "Ongoing" },
	cloture: { fr: "Clôturé", en: "Completed" },
} as const satisfies Record<ProjectStatus, Bilingual>;

export const RECRUITMENT_PROGRAMMES = ["stages", "pja", "per", "pjc", "pca", "pea"] as const;

export type RecruitmentProgramme = (typeof RECRUITMENT_PROGRAMMES)[number];

export const RECRUITMENT_PROGRAMME_LABELS = {
	stages: { fr: "Stagiaires", en: "Interns" },
	pja: {
		fr: "Programme de jeunes professionnels associés (PJA)",
		en: "Young Professionals Associates Program (PJA)",
	},
	per: {
		fr: "Programme d'expertise régionale (PER)",
		en: "Regional Expertise Program (PER)",
	},
	pjc: {
		fr: "Programme de jeunes chercheurs associés (PJC)",
		en: "Young Researchers Associates Program (PJC)",
	},
	pca: {
		fr: "Programme de chercheurs associés (PCA)",
		en: "Research Associates Program (PCA)",
	},
	pea: {
		fr: "Programme d'experts associés (PEA) – Junior et Senior",
		en: "Experts Associates Program (PEA) – Junior and Senior",
	},
} as const satisfies Record<RecruitmentProgramme, Bilingual>;
