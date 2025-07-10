import { useLayoutEffect } from 'react';

export default function useLockBodyScroll(active = false) {
  useLayoutEffect(() => {
    if (!active) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);
}