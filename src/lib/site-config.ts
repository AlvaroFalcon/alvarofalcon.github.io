/** Single source of truth for identity and off-site links. */
export const SITE_CONFIG = {
	name: "Alvaro Falcón",
	wordmark: "ALVARO FALCÓN.",
	initials: "AF",
	role: "Senior Frontend Engineer",
	tagline: "Full-stack curious",
	description:
		"Senior frontend engineer building web and mobile products with React, React Native and TypeScript.",
	email: "alvaro.falconm93@gmail.com",
	links: {
		linkedin: "https://www.linkedin.com/in/alvaro-falcon-morales/",
		github: "https://github.com/AlvaroFalcon",
	},
} as const satisfies Record<string, unknown>;
