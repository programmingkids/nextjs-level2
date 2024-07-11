'use client';

import { getRandom } from '@/app/_lib/functions';

export default function Page() {
  // 50%確率でエラーが発生する
  const result = getRandom(1, 2);
  if (result == 1) {
    throw new Error('this is nation error');
  }

  return (
    <div className="main mb-4">
      <h1 className="p-4 bg-sky-200 text-xl">Nations</h1>
      <div>
        <li>France</li>
        <li>Spain</li>
        <li>Italy</li>
        <li>Germany</li>
      </div>
    </div>
  );
}
