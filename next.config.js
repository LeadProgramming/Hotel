// const withBundleAnalyzer = import('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// });
module.exports = {
    images: {
        //make sure to include the cloud as well.
        domains: ['localhost:6006', ''],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/rooms',
                permanent: false
            },
        ];
    },
};
// module.export = withBundleAnalyzer({});
