import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// transforms string to date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			author: z.string().optional(),
			time: z.string().optional(),
			difficulty: z.string().optional(),
			ageRange: z.string().optional(),
			tags: z.array(z.string()).optional(),
		}),
});
export const collections = { blog };
