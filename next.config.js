const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md'],
    swcMinify: true,
    output: "standalone",
    experimental: {
        newNextLinkBehavior: true,
        scrollRestoration: true,
    },
    images: {
        unoptimized: true
    },
    webpack: (config, {isServer}) => {
        config.experiments = {topLevelAwait: true}
        if (!isServer) {
            // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
            config.resolve.fallback = {
                fs: false
            }
        }

        return config;
    },
}

module.exports = withMarkdoc()(nextConfig)
