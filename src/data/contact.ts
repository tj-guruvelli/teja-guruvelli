export type ContactItem = {
	type: string;
	icon: string;
	url?: string;
	noblank?: boolean;
};

export const contact: ContactItem[] = [
	{ type: "github", icon: "fab fa-github" },
	{ type: "twitter", icon: "fa-brands fa-x-twitter" },
	{ type: "email", icon: "fas fa-envelope", noblank: true },
	{
		type: "linkedin",
		icon: "fab fa-linkedin",
		url: "https://www.linkedin.com/in/lowyx/",
	},
];
