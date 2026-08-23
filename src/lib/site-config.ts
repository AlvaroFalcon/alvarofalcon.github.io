/** Single source of truth for identity and off-site links. */
export const SITE_CONFIG = {
	name: "Alvaro Falcón",
	wordmark: "ALVARO FALCÓN.",
	initials: "AF",
	role: "Frontend Developer",
	tagline: "Full-stack curious",
	description:
		"Frontend developer building clean, practical applications across the stack.",
	email: "alvaro.falconm93@gmail.com",
	links: {
		linkedin:
			"https://www.linkedin.com/in/alvaro-falc%C3%B3n-morales-158a3b128/",
		github: "https://github.com/AlvaroFalcon",
	},
} as const satisfies Record<string, unknown>;
