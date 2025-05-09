import { defineCollection, z, type SchemaContext } from "astro:content";

const TagSchema = z.enum([
  "elixir",
  "gatsby",
  "javascript",
  "mdx",
  "phoenix",
  "personal",
  "react",
  "stripe",
  "tailwindcss",
  "typescript",
  "python",
  "tensorflow",
  "keras",
  "conda",
  "dependency_management",
  "machine_learning",
  "blockchain",
  "nft",
  "cryptocurrency",
  "web3",
]);

export type Step = { href: string; title: string };

export const MinutesToReadSchema = z.number();

export const HeadingsSchema = z.array(
  z.object({
    depth: z.number().min(1).max(6),
    slug: z.string(),
    text: z.string(),
  })
);

export type Headings = z.infer<typeof HeadingsSchema>;
export type Tag = z.infer<typeof TagSchema>;

export const blogSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    tags: z.array(TagSchema),
    publishedOn: z.date(),
    imageSrc: image(),
    imageAlt: z.string(),
    imageCreditName: z.string(),
    imageCreditUrl: z.string(),
  });

export const tutorialsSchema = (context: SchemaContext) =>
  blogSchema(context).extend({
    tutorial: z.object({
      title: z.string(),
      slug: z.string(),
      homePage: z.boolean().optional(),
    }),
  });

export const translationsSchema = (context: SchemaContext) =>
  blogSchema(context).extend({
    translation: z.object({
      originalTitle: z.string(),
      originalLanguage: z.string(),
      targetLanguage: z.string(),
      title: z.string(),
      originalAuthor: z.string(),
      slug: z.string(),
      homePage: z.boolean().optional(),
    }),
  });

const blogCollection = defineCollection({ schema: blogSchema });
const tutorialsCollection = defineCollection({ schema: tutorialsSchema });
const translationsCollection = defineCollection({ schema: translationsSchema });

export const collections = {
  blog: blogCollection,
  tutorials: tutorialsCollection,
  translations: translationsCollection,
};
