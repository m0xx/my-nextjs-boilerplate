// we need to use require in storybook config but not with Next.js

const storybookConfig = {
  plugins: [require('tailwindcss')]
};

const nextConfig = {
  plugins: ['tailwindcss', 'postcss-preset-env']
};

module.exports = process.env.STORYBOOK_ENABLED ? storybookConfig : nextConfig;
