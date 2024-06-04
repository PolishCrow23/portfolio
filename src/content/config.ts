import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string(),
        live: z.string().optional(),
        code: z.string().optional(),
        image: z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
};