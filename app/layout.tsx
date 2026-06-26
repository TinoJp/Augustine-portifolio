import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';
import { CustomCursor } from '@/components/custom-cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.dev'),
  title: 'Engineer | Backend Developer & Cybersecurity Enthusiast',
  description:
    'Computer Engineering Student specializing in Java, Spring Boot, REST APIs, PostgreSql, C++, Python, and Cybersecurity.',
  keywords: [
    'Backend Developer',
    'Java',
    'Spring Boot',
    'Cybersecurity',
    'Software Engineer',
    'REST APIs',
    'PostgreSql',
    'C++',
    'Python',
  ],
  authors: [{ name: 'Eng Augustine' }],
  creator: 'Eng Augustine',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.dev',
    siteName: 'Engineer Portfolio',
    title: 'Eng Augustine  | Backend Developer & Cybersecurity Enthusiast',
    description:
      'Computer Engineering Student specializing in Java, Spring Boot, REST APIs, PostgreSQL, C++, Python, and Cybersecurity.',
    images: [
      {
        url: 'public/IMG_20250910_141529_792.jpg',
        width: 1200,
        height: 630,
        alt: 'Engineer Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Eng Augustine  | Backend Developer & Cybersecurity Enthusiast',
    description:
      'Computer Engineering Student specializing in Java, Spring Boot, REST APIs, SQL, C++, Python, and Cybersecurity.',
    images: ['/public/IMG_20250910_141529_792.jpg'],
    creator: '@engaugustine',
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Comment out kwanza ili kuthibitisha chanzo */}
          {/* <CustomCursor /> */}

          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}