import { timeout } from '@/app/_lib/functions';

export default async function Page() {
  // 3秒間待機する
  await timeout(3000);

  // 待機後にレンダリングする
  return (
    <div className="main mb-4">
      <h1 className="p-4 bg-sky-200 text-xl">Colors</h1>
      <div>
        <li>Red</li>
        <li>Blue</li>
        <li>Yellow</li>
        <li>Purple</li>
      </div>
    </div>
  );
}
