import Link from 'next/link';

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="main bg-sky-600">
        <h2 className="px-2 py-4 text-white text-2xl">Special Blogs</h2>
      </div>

      {children}

      <div className="p-4 bg-sky-600 text-white">
        {'Blog footer, '.repeat(20)}
      </div>
    </div>
  );
}
