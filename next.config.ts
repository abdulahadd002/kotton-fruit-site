import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "kotton-fruit-site";

const config: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.kottonfruit.com" },
      { protocol: "https", hostname: "kottonfruit.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
    ],
  },
};

export default config;
