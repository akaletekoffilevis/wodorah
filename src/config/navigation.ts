import type { Bilingual } from "@/domain/bilingual";
import { ROUTES, type Route } from "./routes";

export type NavigationItem = {
	readonly href: Route;
	readonly label: Bilingual;
};

export const MAIN_NAVIGATION: readonly NavigationItem[] = [
	{ href: ROUTES.home, label: { fr: "Accueil", en: "Home" } },
	{ href: ROUTES.about, label: { fr: "À propos", en: "About" } },
	{ href: ROUTES.publications, label: { fr: "Publications", en: "Publications" } },
	{ href: ROUTES.projects, label: { fr: "Nos projets", en: "Our projects" } },
	{ href: ROUTES.news, label: { fr: "Actualités", en: "News" } },
	{ href: ROUTES.team, label: { fr: "Notre équipe", en: "Our team" } },
	{ href: ROUTES.careers, label: { fr: "Recrutements", en: "Recruitment" } },
	{ href: ROUTES.contact, label: { fr: "Contact", en: "Contact" } },
];
