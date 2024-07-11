import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apple',
  description: 'this is apple page',
};

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-red-200 text-xl">Fruits / Apple</h1>
      <div className="py-4 px-6">
        <h1 className="text-xl">Apple</h1>
        <div className="py-4 text-start">{'apple, '.repeat(100)}</div>
      </div>
    </div>
  );
}
