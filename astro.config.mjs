import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://aadigitalbusiness.github.io/agents-OS-references',
  integrations: [
    starlight({
      title: 'Agents-OS References',
      description: 'Reference knowledge base for AI technology patterns.',
      social: {
        github: 'https://github.com/AADigitalBusiness/agents-OS-references',
      },
      sidebar: [
        { label: 'Start Here', slug: 'index' },
        { label: 'Stack', slug: 'stack' },
        { label: 'Content Model', slug: 'content-model' },
        { label: 'Glossary', autogenerate: { directory: 'glossary' } },
        { label: 'Technologies', autogenerate: { directory: 'technologies' } },
        { label: 'Patterns', autogenerate: { directory: 'patterns' } },
      ],
    }),
  ],
});
