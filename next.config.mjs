/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc", // Allowing the hostname for pravatar
        port: "", // Leave port empty unless it's non-standard
        pathname: "/**", // Allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "dwnblfbgetdoixzeonca.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/service-images/**",
      },
    ],
  },
};

export default nextConfig;
