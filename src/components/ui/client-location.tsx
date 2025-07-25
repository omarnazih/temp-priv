'use client';

import { useEffect, useState } from 'react';

export function useClientLocation() {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return pathname;
} 