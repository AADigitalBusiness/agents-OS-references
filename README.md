# Agents-OS References

Agents-OS References is a public knowledge base for studying technology patterns related to AI systems, agent infrastructure, governance, software factories, retrieval, orchestration, evaluation, and related tools.

This repository is intentionally separate from `agents-os-core`.

- `agents-os-core` defines governance semantics, contracts, and executable controls.
- `agents-OS-references` documents external technologies and extracts reusable patterns.

## Purpose

Build a documentary database that supports human and agent analysis of AI technology patterns.

The site will include:

- A blog for research notes, comparisons, and architectural reflections.
- A glossary for stable concepts and terminology.
- A repository catalog for open-source and commercial technology references.
- Technology reference pages with structured metadata and narrative analysis.

## Recommended Stack

The recommended stack is:

- **Astro** as the static site framework.
- **Starlight** as the documentation shell.
- **Astro Content Collections** for typed Markdown, MDX, YAML, and JSON content.
- **Pagefind** for static search without backend infrastructure.
- **TypeScript + Zod schemas** for validating content metadata.
- **GitHub Pages, Cloudflare Pages, or Vercel** for deployment.

This keeps the knowledge base Git-native, public, fast, cheap to host, easy for agents to edit, and friendly to future analysis pipelines.

## Content Model

Primary collections:

- `blog`: research notes and public essays.
- `glossary`: canonical terms and definitions.
- `technologies`: structured technology profiles.
- `repositories`: repo-level references and metadata.
- `patterns`: reusable architectural or operational patterns observed across technologies.

## Repository Structure

```text
src/content.config.ts
src/content/
  docs/
  blog/
  glossary/
  technologies/
  repositories/
  patterns/
src/pages/
  blog/
  glossary/
  technologies/
  repositories/
  patterns/
```

## Status

Initial architecture scaffold. The next step is to add CI validation, deployment, and the first batch of AI technology references.
