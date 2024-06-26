import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "Nations", href: "/nations" },
  { title: "People", href: "/people" },
  { title: "About", href: "/about" },
  { title: "Hobby", href: "/hobby" },
];

export const Header = function () {
  return (
    <div className="main p-4 bg-blue-300">
      <h1 className="p-2 text-2xl">NextJSアプリ</h1>
      <div className="flex justify-around p-2">
        {links.map((e, i) => (
          <Link key={i} href={e.href} className="text-link">
            {e.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
