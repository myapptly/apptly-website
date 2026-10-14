import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'APPTLY | Digital Business Cards, Apps & Websites',
    short_name: 'APPTLY',
    description: 'Affordable, done-for-you digital business cards, business web apps and websites for small businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#10b981',
    icons: [
      {
        src: '/apptly-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
