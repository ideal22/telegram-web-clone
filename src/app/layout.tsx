import { ThemeProvider } from '@/entities/providers/theme-provider';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { FC } from 'react';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Telegram Web Demo App',
  description: 'Telegram Web Demo App',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = async ({ children }) => {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
