/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
	async rewrites() {
		return [{ source: "/rss.xml", destination: "/rss" }];
	},
	async redirects() {
		return [
			{
				source: "/interests-hobbies",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
