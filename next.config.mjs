/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'joflcovvhpaafbadqsmo.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/vaayusastra2//vaayusastra/**',
          },
        ],
      },

      
};



export default nextConfig;
