import { NextResponse } from "next/server";
import { site } from "@/data/site";

export async function GET() {
	const items = ``;

	const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>
  <rss version=\"2.0\">
    <channel>
      <title>${escapeXml(site.title)}</title>
      <link>${site.url}</link>
      <description>${escapeXml(site.description)}</description>
      ${items}
    </channel>
  </rss>`;
	return new NextResponse(xml, {
		headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
	});
}

function escapeXml(s: string) {
	return s.replace(
		/[<>&"']/g,
		(c) =>
			({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[
				c
			]!)
	);
}
