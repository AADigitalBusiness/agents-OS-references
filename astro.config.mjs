import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://aadigitalbusiness.github.io/agents-OS-references',
  integrations: [
    starlight({
      title: 'AI Technology References',
      description: 'Practical guides, tutorials, glossary, and repository profiles for learning modern AI technology.',
      social: {
        github: 'https://github.com/aavendano/agents-OS-references',
      },
      sidebar: [
        { label: 'Start Here', slug: 'index' },
        {
          label: 'Guides',
          items: [
            { label: 'How to Read an AI Stack', slug: 'guides/read-ai-technology-stack' },
            { label: 'AI Technology Map', slug: 'guides/ai-technology-map' },
          ],
        },
        {
          label: 'Tutorials',
          items: [
            { label: 'Choose an Agent Framework', slug: 'tutorials/choose-agent-framework' },
          ],
        },
        { label: 'SEO Editorial Plan', slug: 'seo-editorial-plan' },
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
