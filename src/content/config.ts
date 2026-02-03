import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    category: z.string(),
    author: z.string().default("Aquorix Team"),
  }),
});

export const collections = { blog };
