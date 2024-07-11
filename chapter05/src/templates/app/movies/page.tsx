import { timeout } from '@/app/_lib/functions';

export default async function Page() {
  // 3秒間待機する
  await timeout(3000);

  // 待機後にレンダリングする
  return (
    <div className="main mb-4">
      <h1 className="p-4 bg-sky-200 text-xl">Movies</h1>
      <div>
        <li>Action</li>
        <li>Comedy</li>
        <li>Love</li>
        <li>SF</li>
      </div>
    </div>
  );
}
