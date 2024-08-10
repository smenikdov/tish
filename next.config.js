/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['dummyimage.com', 'cdn.sanity.io'],
    },
};

module.exports = nextConfig;