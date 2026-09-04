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
        { label: 'Blog', link: '/blog/' },
        { label: 'Glossary', link: '/glossary/' },
        { label: 'Technologies', link: '/technologies/' },
        { label: 'Repositories', link: '/repositories/' },
        { label: 'Patterns', link: '/patterns/' },
      ],
    }),
  ],
});
