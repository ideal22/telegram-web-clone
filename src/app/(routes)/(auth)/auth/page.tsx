import { ThemeToggleButton } from '@/features/theme-toggle-button';
import { AuthContainer } from '@/widgets/auth/ui';
import { FaTelegram } from 'react-icons/fa';

const AuthPage = () => {
  return (
    <main className="container flex h-screen w-full flex-col items-center justify-center space-y-4">
      <FaTelegram size={120} className="text-blue-500" />
      <div className="flex items-center gap-2">
        <h1 className="text-4xl font-bold">Telegram</h1>
        <ThemeToggleButton />
      </div>
      <AuthContainer />
    </main>
  );
};

export default AuthPage;
