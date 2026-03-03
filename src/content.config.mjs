import { defineCollection } from "astro:content";

const collections = {
  index: defineCollection({ type: "content" }),
  apply: defineCollection({ type: "content" }),
};

export { collections };
