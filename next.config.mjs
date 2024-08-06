/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
            },
            {
                protocol: 'https',
                hostname: 'imagedelivery.net',
            },
        ],
    },
    compiler: {
        styledComponents: true
    },
};

export default nextConfig;
