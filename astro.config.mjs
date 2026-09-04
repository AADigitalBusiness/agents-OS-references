import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://aadigitalbusiness.github.io',
  base: '/agents-OS-references',
  integrations: [
    starlight({
      title: 'AI Technology References',
      description: 'Practical guides, tutorials, glossary, and repository profiles for learning modern AI technology.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/AADigitalBusiness/agents-OS-references',
        },
      ],
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
        { label: 'Blog', link: '/agents-OS-references/blog/' },
        { label: 'Glossary', link: '/agents-OS-references/glossary/' },
        { label: 'Technologies', link: '/agents-OS-references/technologies/' },
        { label: 'Repositories', link: '/agents-OS-references/repositories/' },
        { label: 'Patterns', link: '/agents-OS-references/patterns/' },
      ],
    }),
  ],
});
