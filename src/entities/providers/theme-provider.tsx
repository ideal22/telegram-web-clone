'use client';

import { useMountedHook } from '@/shared/lib/hooks';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { isMounted } = useMountedHook();
  return (
    <NextThemesProvider {...props}>{isMounted && children}</NextThemesProvider>
  );
}
