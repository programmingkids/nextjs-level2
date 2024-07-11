import Link from 'next/link';

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="main bg-red-800">
        <h2 className="px-2 py-4 text-white text-2xl">認証が必要です</h2>
      </div>

      {children}

      <div className="main p-4 bg-red-800">
        <li className="list-none m-1">
          <Link href="/login" className="text-white">
            Login
          </Link>
        </li>
        <li className="list-none m-1">
          <Link href="/register" className="text-white">
            Register
          </Link>
        </li>
        <li className="list-none m-1">
          <Link href="/logout" className="text-white">
            Logout
          </Link>
        </li>
      </div>
    </div>
  );
}
