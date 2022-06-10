// @ts-ignore

export default {
  title: 'ANT DESIGN PRO',
  description: '开箱即用的中台前端/设计解决方案',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  github: 'https://github.com/ant-design/ant-design-pro',
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '简体中文' },
  ],
  searchHotKey: {
    macos: '⌘+k',
    windows: 'ctrl+k',
  },
  navs: [
    {
      path: '/docs',
      title: 'Docs',
      type: 'nav',
      children: [
        {
          title: 'Tutorials',
          children: ['tutorials/getting-started', 'tutorials/blog'],
        },
      ],
    },
  ],
  announcement: {
    title: 'Umi4 即将推出!!!',
    link: 'https://github.com/umijs/umi-next',
  },
};
