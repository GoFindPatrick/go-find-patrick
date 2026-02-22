import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    location: z.string(),
    country: z.string(),
    category: z.enum(['hotel', 'food', 'coffee', 'travel']),
    heroImage: z.string().url(),
    cardImage: z.string().url().optional(),
    ratingName: z.string(),
    breakdown: z.array(
      z.object({
        label: z.string(),
        score: z.number().min(0).max(5),
      })
    ),
    readTime: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    comingSoon: z.boolean().default(false),
    gallery: z.array(z.string().url()).optional(),
  }),
});

export const collections = { blog };
