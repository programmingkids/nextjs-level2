import { timeout } from "@/app/_lib/functions";

export default async function Page() {
  // 3秒間待機する
  await timeout(3000);

  return (
    <div className="main border border-emerald-600 rounded-lg">
      <h2 className="p-4 bg-emerald-200 text-lg rounded-t-lg">
        試験デフォルト
      </h2>
      <div className="p-4">試験のお知らせ</div>
      <div className="mb-8 pl-6 text-left">
        <li>新入生学力試験（1年生）</li>
        <li>中間試験</li>
        <li>英検（1年生）</li>
        <li>全国模試（2年生）</li>
      </div>
    </div>
  );
}
