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
		title: "Restoran Nusantara",
		link: "https://restoran-nusantara-lake.vercel.app/",
		description:
			"A clean, content-first marketing site built on WordPress with a custom block theme.",
		role: "Design & development",
		year: 2025,
		image: "/images/project_1.png",
	},
	{
		number: 2,
		title: "Skyline Bistro",
		link: "https://prototype-seven-lake.vercel.app/",
		description:
			"A quiet, typography-led publication focused on fast, readable long-form.",
		role: "Front-end development",
		year: 2024,
		image: "/images/project_2.png",
	},
];
