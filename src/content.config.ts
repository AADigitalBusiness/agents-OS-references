import { defineCollection, z } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

const lifecycle = z.enum(['candidate', 'active', 'deprecated', 'archived']);
const evidenceLevel = z.enum(['unverified', 'source-linked', 'tested', 'adopted']);

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()).default([]),
    status: lifecycle.default('candidate'),
  }),
});

const glossary = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    definition: z.string(),
    aliases: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    status: lifecycle.default('candidate'),
  }),
});

const technologies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'agent-runtime',
      'orchestration',
      'workflow',
      'retrieval',
      'evaluation',
      'governance',
      'software-factory',
      'model-provider',
      'developer-tooling',
      'data-infrastructure',
      'frontend',
      'other',
    ]),
    homepage: z.string().url().optional(),
    repository: z.string().url().optional(),
    license: z.string().optional(),
    language: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    patterns: z.array(z.string()).default([]),
    agentsOsFit: z.enum(['adopt', 'adapt', 'watch', 'discard']).default('watch'),
    evidence: evidenceLevel.default('unverified'),
    status: lifecycle.default('candidate'),
  }),
});

const repositories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    owner: z.string(),
    url: z.string().url(),
    category: z.string(),
    description: z.string(),
    language: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    observedPatterns: z.array(z.string()).default([]),
    agentsOsRelevance: z.string(),
    reviewStatus: evidenceLevel.default('unverified'),
  }),
});

const patterns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    observedIn: z.array(z.string()).default([]),
    agentsOsEquivalent: z.string().optional(),
    adoptionDecision: z.enum(['adopt', 'adapt', 'watch', 'discard']).default('watch'),
    status: lifecycle.default('candidate'),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  blog,
  glossary,
  technologies,
  repositories,
  patterns,
};
