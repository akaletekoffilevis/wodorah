export const ROUTES = {
	home: "/",
	about: "/a-propos",
	publications: "/publications",
	projects: "/projets",
	news: "/actualites",
	team: "/equipe",
	careers: "/recrutements",
	contact: "/contact",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
