/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placeholdmon.vercel.app",
                port: "",
            },
        ],
    },
};

export default nextConfig;
