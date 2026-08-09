import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'APPTLY App Builder',
    short_name: 'APPTLY',
    description: 'Build and launch no-code business apps instantly.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#10b981',
    icons: [
      {
        src: '/apptly A.png', // or '/apptly-real-logo.png' if renamed
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
