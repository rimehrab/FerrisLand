import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z
        .string()
        .max(
          60,
          "Title should be 60 characters or less for optimal Open Graph display.",
        ),
      description: z
        .string()
        .max(
          155,
          "Description should be 155 characters or less for optimal Open Graph display.",
        ),
      date: z.coerce.date(),
      image: image()
        .refine((img) => img.width === 1200 && img.height === 630, {
          message:
            "The image must be exactly 1200px × 630px for Open Graph requirements.",
        })
        .optional(),
      tags: z.array(z.string()).optional(),
      authors: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
});

const webring = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    webringKind: z.string().optional(),
    avatar: z.string().url(),
    bio: z.string().optional(),
    mail: z.string().email().optional(),
    website: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    discord: z.string().url().optional(),
    stream: z.string().url().optional(),
    telegram: z.string().url().optional(),
  }),
});

export const collections = { blog, webring };
