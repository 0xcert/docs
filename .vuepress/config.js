module.exports = {
  title: '0xcert Docs',
  description: 'Leverage the most advanced open-source framework to create, manage and swap digital assets (ERC-721) and value tokens (ERC-20) on the blockchain.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-114983924-2'
    },
    '@vuepress/last-updated': {}
  },
  themeConfig: {
    logo: '/0xcert-logo.svg',
    displayAllHeaders: false,
    lastUpdated: 'Last Updated',
    repo: '0xcert/docs',
    repoLabel: 'GitHub',
    docsRepo: '0xcert/docs',
    docsDir: '',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page.',
    nav: [
      { text: 'Framework', link: '/framework/v2/' },
      { text: '0xcert API', link: '/api/' },
      { text: 'Website', link: 'https://0xcert.org' },
    ],
    sidebar: {
      '/api/': [
        {
          title: 'Guides',
          collapsable: false,
          children: [
            'guides/non-fungible-assets',
            'guides/fungible-values',
            'guides/atomic-operations',
            'guides/dashboard',
            'guides/get-credits',
            'guides/certification',
            'guides/providers',
            'guides/installation',
            'guides/asset-ledger-deployment',
            'guides/issue-asset',
            'guides/transfer-asset',
            'guides/update-asset-imprint',
            'guides/destroy-asset',
            'guides/set-asset-ledger-abilities',
            'guides/transfer-value',
            'guides/additional-scenarios',
          ],
        },
        {
          title: 'API References',
          collapsable: false,
          children: [
            'api/certification',
            'api/client',
            'api/rest',
          ],
        },
      ],
      '/framework/v2/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            'introduction/getting-started',          
            'introduction/non-fungible-assets',
            'introduction/fungible-values',
            'introduction/0xcert-tokens.md',
            'introduction/atomic-transactions',
            'introduction/interoperability',
            'introduction/authenticity',
            'introduction/threat-models',
          ],
        },
        {
          title: 'Guides',
          collapsable: false,
          children: [
            'guides/certification',
            'guides/communication',
            'guides/providers',
            'guides/asset-management',
            'guides/value-management',
            'guides/atomic-deployments',
            'guides/atomic-actions',
            'guides/atomic-approval',
          ],
        },
        {
          title: 'API References',
          collapsable: false,
          children: [
            'api/certification',
            'api/ethereum-connectors',
            'api/wanchain-connectors',
            ['api/vuejs-plugin', 'Vue.js Plugin'],
          ],
        },
      ],
      '/framework/v1/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            'guide/getting-started', 
            'guide/communication', 
            'guide/using-providers', 
            'guide/about-assets', 
            'guide/certification', 
            'guide/asset-management',
            'guide/about-cryptocurrency',
            'guide/value-management',
            'guide/atomic-orders',
          ],
        },
        {
          title: 'API',
          collapsable: false,
          children: [
            'api/core',
            'api/ethereum',
            'api/wanchain',
          ],
        },
        {
          title: 'Plugins',
          collapsable: false,
          children: [
            'plugins/vuejs'
          ],
        },
      ],
    }
  },
  markdown: {
    lineNumbers: false,
    extendMarkdown: md => {
      md.use(require('markdown-it-container'), 'card', {
        validate: function (params) {
          return params.trim().match(/^card\s+(.*)$/);
        },
        render: function (tokens, idx) {
          let title = tokens[idx].info.trim().match(/^card\s+(.*)$/);
          return tokens[idx].nesting === 1 ? 
            '<div class="card custom-block"><p class="custom-block-title">' + md.utils.escapeHtml(title[1]) + "</p>\n"
            : '</div>\n';
        },
      });
    },
    externalLinks: {
      target: '_self',
      rel: 'noopener noreferrer alternate',
    },
  },
};
