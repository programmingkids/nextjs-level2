import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Orange',
  description: 'this is orange page',
};

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-orange-200 text-xl">Fruits / Orange</h1>
      <div className="py-4 px-6">
        <h1 className="text-xl">Orange</h1>
        <div className="py-4 text-start">{'orange, '.repeat(100)}</div>
      </div>
    </div>
  );
}
