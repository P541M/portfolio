import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Custom hook to safely handle client-side rendering
 * Prevents hydration mismatches by waiting for component to mount
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}