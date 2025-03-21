import { useEffect, useState } from 'react';

export const useMountedHook = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return { isMounted };
};
