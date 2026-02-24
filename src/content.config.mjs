import { defineCollection } from "astro:content";

// Define all content collections
const collections = {
  // Existing collections (auto-discovered)
  index: defineCollection({ type: "content" }),
  Pricing: defineCollection({ type: "content" }),
  aboutPage: defineCollection({ type: "content" }),
  apply: defineCollection({ type: "content" }),
  blogs: defineCollection({ type: "content" }),
  career: defineCollection({ type: "content" }),
  comingSoon: defineCollection({ type: "content" }),
  contact: defineCollection({ type: "content" }),
  gettingStarted: defineCollection({ type: "content" }),
  notFound: defineCollection({ type: "content" }),
  portfolio: defineCollection({ type: "content" }),
  privacyPolicy: defineCollection({ type: "content" }),
  services: defineCollection({ type: "content" }),
  site: defineCollection({ type: "content" }),
  termsCondition: defineCollection({ type: "content" }),
};

export { collections };
