'use client';

import { useEffect, useState } from 'react';

export default function VisagismoPage() {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => setHeight(`${window.innerHeight}px`);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <main className="m-0 overflow-hidden bg-black p-0" style={{ height }}>
      <iframe
        title="Care For Men — Visagismo Masculino"
        src="/visagismo/index.html"
        className="block h-full w-full border-0"
      />
    </main>
  );
}
