module.exports = [
  { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
  { text: 'Ecotope', ariaLabel: 'Ecotope', items: [
    { text: 'Vue', link: '/ecotope/vue/', ariaLabel: 'Vue' },
    { text: 'React', link: '/ecotope/React/', ariaLabel: 'React' }
  ]},
  { text: 'Engineering', ariaLabel: 'Engineering', items: [
    { text: 'Build Tools', ariaLabel: 'Build Tools', items: [
      { text: 'Webpack', link: '/engineering/buildTools/webpack/', ariaLabel: 'Webpack' },
      { text: 'Rollup', link: '/engineering/buildTools/rollup/', ariaLabel: 'Rollup' }
    ]},
    { text: 'CI', link: '/engineering/ci/', ariaLabel: 'CI' },
  ]},
  { text: 'Specification', link: '/specification/', ariaLabel: 'Specification' },
  { text: 'Life', link: '/life/', ariaLabel: 'Life' }
];