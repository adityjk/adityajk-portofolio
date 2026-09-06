export interface PricingItem {
	number: number;
	title: string;
	price: string;
	description: string;
}

export const pricing: PricingItem[] = [
	{
		number: 1,
		title: "Landing Page",
		price: "Starting from Rp 500.000",
		description:
			"A single focused page with clear messaging, built to convert visitors into leads.",
	},
	{
		number: 2,
		title: "Company Profile Website",
		price: "Starting from Rp 1.500.000",
		description:
			"A multi-page site showcasing your business, team, and services with a polished editorial feel.",
	},
	{
		number: 3,
		title: "System Website",
		price: "Starting from Rp 5.000.000",
		description:
			"A fully editable WordPress site with a custom theme, ready for you to manage content independently.",
	},
];
