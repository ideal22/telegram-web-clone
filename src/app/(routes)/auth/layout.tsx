import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auth - Telegram Web Demo App',
  description: 'Authentication for Telegram Web Demo App',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container flex h-screen w-full flex-col items-center justify-center space-y-4">
      {children}
    </main>
  );
}
