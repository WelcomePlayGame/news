import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavPage from '@/components/header/nav-page';
import HeaderPage from '@/components/header/header-page';
import NavNavigation from '@/components/header/nav-navigation-page';
import useAdminRoute from '../components/addarticle/page-isadmin';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.MAIN_TITLE,
  description: process.env.MAIN_DESCRIPTION,
  keywords: [
    'Global News',
    'Ukraine News',
    'Russian News',
    'America News',
    'India news',
    'China news',
    'Moldova News',
  ],
  creator: 'Ukraine Boy',
  publisher: 'Ukraine Boy',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://acme.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.MAIN_TITLE,
    description: process.env.MAIN_DESCRIPTION,
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
  category: 'Global News',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
