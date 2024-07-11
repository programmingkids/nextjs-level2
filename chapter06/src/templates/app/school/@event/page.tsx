import { timeout } from '@/app/_lib/functions';

export default async function Page() {
  // 2秒間待機する
  await timeout(2000);

  return (
    <div className="main border border-orange-600 rounded-lg">
      <h2 className="p-4 bg-orange-200 text-lg rounded-t-lg">イベント</h2>
      <div className="p-4">イベントのお知らせ</div>
      <div className="mb-8 pl-6 text-left">
        <li>新入生歓迎会</li>
        <li>部活動紹介</li>
        <li>体育祭</li>
        <li>修学旅行（3年生）</li>
      </div>
    </div>
  );
}
