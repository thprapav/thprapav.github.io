const commonPlugins = [
  'postcss-import',
  'tailwindcss',
  'postcss-flexbugs-fixes',
  'autoprefixer',
  'postcss-100vh-fix',
  'postcss-hover-media-feature',
  [
    'postcss-preset-env',
    {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  ],
];

module.exports =
  process.env.NODE_ENV !== 'development'
    ? {
        plugins: [
          ...commonPlugins,
          [
            'cssnano',
            {
              preset: 'default',
            },
          ],
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./**/*.tsx'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ],
      }
    : {
        plugins: commonPlugins,
      };
