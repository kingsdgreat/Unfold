/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
    assetPrefix: '/',
    async headers() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                headers: [
                    { key: 'Content-Type', value: 'application/json' }
                ]
            },
            {
                source: '/.well-known/assetlinks.json',
                headers: [
                    { key: 'Content-Type', value: 'application/json' }
                ]
            }
        ]
    }
}

export default nextConfig;
