import Link from "next/link";

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">Intercepting Blue</h1>
      <div className="p-4">
        <li>
          <Link href="/color" className="text-link">
            Color
          </Link>
        </li>
      </div>
    </div>
  );
}
