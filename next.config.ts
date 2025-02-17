import type { NextConfig } from "next";

const withNextIntl = require('next-intl/plugin')();

require('dotenv').config({ path: `.env.${process.env.ENV_NAME}` })
console.info( `=> ENV: ${process.env.ENV_NAME}` );

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
