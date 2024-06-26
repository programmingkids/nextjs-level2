import Link from "next/link";

export default function Home() {
  const fruits = ["apple", "orange", "banana", "peach"];

  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">Home</h1>
      <div className="p-4">
        {fruits.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
      <div className="flex justify-around">
        <Link href="/" className="text-link" replace={true}>
          Home
        </Link>
        <Link href="/nations" className="text-link" replace>
          Nations
        </Link>
        <Link href="/people" className="text-link" replace>
          People
        </Link>
      </div>
    </div>
  );
}
