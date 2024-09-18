/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.real-estate-manager.redberryinternship.ge",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
