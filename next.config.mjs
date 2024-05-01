import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Setze dies auf `false`, falls es eine temporäre Umleitung sein soll
      },
    ];
  },
});

export default nextConfig;
