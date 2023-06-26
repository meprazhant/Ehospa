/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    env: {
      DB_URI: "",
      NEXTAUTH_SECRET: "",
  
      GOOGLE_CLIENT_ID:
        "498599588472-udm7s16pedts3t4nkaenfue1h7t1k0rv.apps.googleusercontent.com",
      GOOGLE_CLIENT_SECRET: "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",

    },
  };
  
  module.exports = nextConfig;