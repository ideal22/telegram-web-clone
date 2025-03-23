import { Sidebar } from '@/widgets/sidebar/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Telegram Web Demo App',
  description: 'Telegram Web Demo App',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-0 z-50 h-screen w-80 border-r">
        <Sidebar />
      </aside>
      {/* Main Content Area */}
      <main className="w-full flex-1 p-1 pl-80">{children}</main>
    </div>
  );
}
