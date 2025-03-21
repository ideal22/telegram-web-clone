'use client';

import { Button } from '@/shared/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import * as React from 'react';

const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const onToggleMode = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Button onClick={onToggleMode} size="icon" variant="ghost">
      {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeToggleButton;
