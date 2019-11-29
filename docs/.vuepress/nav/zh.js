module.exports = [
  { text: '指南', link: '/guide/', ariaLabel: 'Guide' },
  { text: '生态', ariaLabel: 'Ecotope', items: [
    { text: 'Vue', link: '/ecotope/vue/', ariaLabel: 'Vue' },
    { text: 'React', link: '/ecotope/React/', ariaLabel: 'React' }
  ]},
  { text: '工程化', ariaLabel: 'Engineering', items: [
    { text: '构建工具', ariaLabel: 'Build Tools', items: [
      { text: 'Webpack', link: '/engineering/buildTools/webpack/', ariaLabel: 'Webpack' },
      { text: 'Rollup', link: '/engineering/buildTools/rollup/', ariaLabel: 'Rollup' }
    ]},
    { text: '持续集成', link: '/engineering/ci/', ariaLabel: 'CI' },
  ]},
  { text: '规范', link: '/specification/', ariaLabel: 'Specification' },
  { text: '生活', link: '/life/', ariaLabel: 'Life' }
];