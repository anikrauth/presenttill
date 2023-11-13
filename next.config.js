/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'backend.presenttill.nu',
            },
        ],
    }
}
// backend.presenttill.nu
module.exports = nextConfig
