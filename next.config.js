const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

if (process.env.DOTENV_OVERRIDE) {
  const envConfig = dotenv.parse(
    fs.readFileSync(path.join(__dirname, process.env.DOTENV_OVERRIDE))
  );
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
  env: {
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  experimental: {
    reactRefresh: process.env.NODE_ENV === 'production' ? false : true
  }
});
