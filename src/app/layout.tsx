import { ThemeProvider } from '@/entities/providers/theme-provider';
import { Sidebar } from '@/widgets/sidebar/ui';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Telegram Web Demo App',
  description: 'Telegram Web Demo App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="fixed inset-0 z-50 h-screen w-80 border-r">
              <Sidebar />
            </aside>

            {/* Main Content Area */}
            <main className="ml-80 w-full flex-1 p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
