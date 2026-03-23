import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["ntdkry-3000.csb.app"],
  experimental:{
    serverActions:{
      allowedOrigins:[
        'localhost:3000',
        '*.app.github.dev',
        '*.github.dev'
      ]
    }
  }
};

export default nextConfig;
