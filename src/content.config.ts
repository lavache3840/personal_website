import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts live in src/content/blog/*.md (or .mdx).
// The filename becomes the URL: my-post.md -> /blog/my-post/
const blog = defineCollection({
  // _templates/ holds the Obsidian post template, so it is never published.
  loader: glob({ base: './src/content/blog', pattern: ['**/*.{md,mdx}', '!_templates/**'] }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
