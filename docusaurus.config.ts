import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenHacienda',
  tagline: 'Documentación no oficial sobre la AEAT',
  favicon: 'img/favicon.ico',

  url: 'https://openhacienda.github.io',
  baseUrl: '/website/',

  organizationName: 'OpenHacienda',
  projectName: 'website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themes: ['cosmos-docusaurus-theme'],

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/OpenHacienda/website/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OpenHacienda',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/aldoborrero/llave',
          label: 'Llave',
          position: 'left',
        },
        {
          href: 'https://github.com/OpenHacienda',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Proyectos',
          items: [
            {
              label: 'Llave',
              href: 'https://github.com/aldoborrero/llave',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OpenHacienda',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenHacienda. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
