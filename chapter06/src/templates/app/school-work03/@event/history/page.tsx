import Link from "next/link";

export default async function Page() {
  return (
    <div className="main border border-orange-600 rounded-lg">
      <h2 className="p-4 bg-orange-200 text-lg rounded-t-lg">過去のイベント</h2>
      <div className="p-4">過去のイベントお知らせ</div>
      <div className="mb-8 pl-6 text-left">
        <li>職業体験</li>
        <li>校外学習</li>
        <li>卒業式（2、3年生）</li>
        <li>終業式（1、2年生）</li>
      </div>
      <div className="mb-8">
        <Link href="/school" className="text-link">
          最新のイベント
        </Link>
      </div>
    </div>
  );
}
