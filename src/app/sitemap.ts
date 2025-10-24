import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const items: MetadataRoute.Sitemap = [
		{
			url: site.url,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1.0,
		},
		{
			url: `${site.url}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${site.url}/projects`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${site.url}/experiences`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];

	return items;
}
