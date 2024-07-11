'use client';

import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <div>
      <hr className="h-1 bg-red-500" />
      <div className="main">Template: {date?.toLocaleString()}</div>
      {children}
    </div>
  );
}
