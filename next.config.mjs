/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'dvd6ljcj7w3pj.cloudfront.net', protocol: 'https',
            },
            {
                hostname: 'prod-testvalley.s3.ap-northeast-2.amazonaws.com', protocol: 'https'
            }
        ]
    }
};

export default nextConfig;
