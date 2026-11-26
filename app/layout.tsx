import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { ThemeProvider } from '@/components/theme-provider';
import { ScrollProgress } from '@/components/scroll-progress';
import { BackToTop } from '@/components/back-to-top';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const siteUrl = 'https://augustine-portifolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Augustine Jp | Computer Engineering Student',
  description:
    'Computer Engineering student at the Dar es Salaam Institute of Technology, building software projects and developing practical skills in backend engineering and cybersecurity.',
  keywords: [
    'Augustine Jp',
    'Computer Engineering',
    'Backend Development',
    'Cybersecurity',
    'Java',
    'Python',
    'FastAPI',
    'PostgreSQL',
  ],
  authors: [{ name: 'Augustine Jp' }],
  creator: 'Augustine Jp',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_TZ',
    url: siteUrl,
    siteName: 'Augustine Jp Portfolio',
    title: 'Augustine Jp | Computer Engineering Student',
    description:
      'Projects and learning journey in software development and cybersecurity.',
    images: [
      {
        url: '/IMG_20250910_141529_792.jpg',
        width: 1200,
        height: 630,
        alt: 'Augustine Jp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Augustine Jp | Computer Engineering Student',
    description:
      'Projects and learning journey in software development and cybersecurity.',
    images: ['/IMG_20250910_141529_792.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
