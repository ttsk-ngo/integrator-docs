import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Integrator 2.0",
  tagline: "#integrator20",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://integrator.docs.ttsk.ngo",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/integrator-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TTSK",
  projectName: "integrator-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          include: ["**/*.md", "**/*.mdx"],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ttsk-ngo/integrator-docs/tree/main/",
          remarkPlugins: [require("remark-gfm")],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: "announcement-bar",
      content:
        'If you want to develop Integrator 2.0 tool please contact XoorbeS</a>',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
    navbar: {
      title: "TTSK",
      logo: {
        alt: "TTSK Logo",
        src: "/img/logo_ttsk.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "requirementsSidebar",
          position: "left",
          label: "Requirements",
        },
        {
          type: "docSidebar",
          sidebarId: "designSidebar",
          position: "left",
          label: "Design",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/ttsk-ngo/integrator-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Integrator's repositories",
          items: [
            {
              label: "Documentation repository",
              href: "https://github.com/ttsk-ngo/integrator-docs",
            },
            {
              label: "API repository",
              href: "https://github.com/ttsk-ngo/integrator-api",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://td2.info.pl/",
            },
            {
              label: "Mattermost",
              href: "https://chat.ttsk.ngo/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/TrainDriver2",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/ttsk-ngo",
            },
          ],
        },
      ],
      copyright: `<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">Integrator 2.0 Docs</span> by <span property="cc:attributionName">TTSK and the community</span> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt=""></a></p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: [tailwindPlugin],
};

export default config;
