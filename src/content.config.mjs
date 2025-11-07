import { defineCollection } from 'astro:content';

// Define all content collections
const collections = {
  // Existing collections (auto-discovered)
  IndexPage: defineCollection({}),
  Pricing: defineCollection({}),
  aboutPage: defineCollection({}),
  blogs: defineCollection({}),
  career: defineCollection({}),
  comingSoon: defineCollection({}),
  contact: defineCollection({}),
  gettingStarted: defineCollection({}),
  notFound: defineCollection({}),
  portfolio: defineCollection({}),
  privacyPolicy: defineCollection({}),
  services: defineCollection({}),
  site: defineCollection({}),
  termsCondition: defineCollection({}),
};

export { collections };
