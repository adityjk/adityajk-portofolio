export interface WorkItem {
	number: number;
	title: string;
	link: string;
	description: string;
	role?: string;
	year: number;
	image?: string;
}

export const works: WorkItem[] = [
	{
		number: 1,
		title: "Acme Studio — Brand Site",
		link: "https://example.com",
		description:
			"A clean, content-first marketing site built on WordPress with a custom block theme.",
		role: "Design & development",
		year: 2025,
		image: "/images/project-placeholder.svg",
	},
	{
		number: 2,
		title: "Field Notes — Editorial",
		link: "https://example.com",
		description:
			"A quiet, typography-led publication focused on fast, readable long-form.",
		role: "Front-end development",
		year: 2024,
		image: "/images/project-placeholder.svg",
	},
	{
		number: 3,
		title: "Northwind — Storefront",
		link: "https://example.com",
		description:
			"A lightweight headless storefront with a considered, restrained interface.",
		year: 2024,
		image: "/images/project-placeholder.svg",
	},
];
