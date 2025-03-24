'use client';
import { Switch } from '@/shared/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ProfileThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="hover:bg-secondary flex items-center justify-between p-2">
      <div className="flex items-center gap-1">
        {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        <span className="text-sm">
          {resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'}
        </span>
      </div>
      <Switch
        checked={resolvedTheme === 'dark'}
        onCheckedChange={() =>
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }
      />
    </div>
  );
}
