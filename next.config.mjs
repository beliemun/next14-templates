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
    // webpack: (config) => {
    //     config.externals.push({
    //         "utf-8-validate": "commonjs utf-8-validate",
    //         bufferutil: "commonjs bufferutil",
    //         canvas: "commonjs canvas",
    //     });
    //     // config.infrastructureLogging = { debug: /PackFileCache/ };
    //     return config;
    // },
};

export default nextConfig;
