import Link from "next/link";

export default function Page() {
  const data = ["山田太郎", "佐藤花子", "山本次郎", "田中麻衣"];

  return (
    <div className="main">
      <h1 className="p-4 bg-amber-200 text-xl">People</h1>
      <div className="p-4 list-decimal">
        {data.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
      <div className="flex justify-around">
        <Link href="/" className="text-link">
          Home
        </Link>
        <Link href="/nations" className="text-link">
          Nations
        </Link>
        <Link href="/people" className="text-link">
          People
        </Link>
      </div>
    </div>
  );
}
