import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "First", href: "/blog/first" },
  { title: "Second", href: "/blog/second" },
  { title: "Login", href: "/login" },
  { title: "Logout", href: "/logout" },
  { title: "Register", href: "/register" },
  { title: "Products", href: "/products" },
];

export const Header = function () {
  return (
    <div className="main p-4 bg-blue-300">
      <h1 className="p-2 text-2xl">NextJSアプリ</h1>
      <div className="flex justify-around flex-wrap p-2">
        {links.map((e, i) => (
          <Link key={i} href={e.href} className="text-link mx-3">
            {e.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
