// const withBundleAnalyzer = import('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// });
module.exports = {
    env: {
        FIREBASE_API_KEY: 'AIzaSyARob1Ja2jTzCVLT9QF6eBOakuXWCVL1e8',
        AUTH_DOMAIN: 'hotel-3c249.firebaseapp.com',
        PROJECT_ID: 'hotel-3c249',
        STORAGE_BUCKET: 'hotel-3c249.appspot.com',
        MESSAGING_SENDER_ID: '745011087359',
        APP_ID: '1:745011087359:web:714fff5e51447cc5c489ca',
        MEASUREMENT_ID: 'G-5XYXP89Z22',
    },
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
