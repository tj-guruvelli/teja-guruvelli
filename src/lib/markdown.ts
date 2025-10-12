import fs from "node:fs/promises";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeKatex from "rehype-katex";
import { VFile } from "vfile";

export interface MarkdownResult {
	contentHtml: string;
	data: Record<string, any>;
}

// Convert a Markdown string (with YAML front-matter) to HTML + extracted data
export async function markdownToHtml(source: string): Promise<MarkdownResult> {
	const { content, data } = matter(source);

	const processed = await remark()
		.use(remarkGfm)
		.use(remarkEmoji)
		.use(remarkHtml, { sanitize: false })
		.process(content);

	// The above is not async and does not run rehype plugins,
	// so for now we'll skip pretty-code, katex, slug.
	// A full mdx-remote or similar pipeline would be better.

	return {
		contentHtml: processed.toString(),
		data,
	};
}

// Read a Markdown file from disk and return the rendered result
export async function markdownFileToHtml(
	fullPath: string
): Promise<MarkdownResult> {
	const raw = await fs.readFile(fullPath, "utf8");
	return markdownToHtml(raw);
}
