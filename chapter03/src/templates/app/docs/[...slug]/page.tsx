import Link from 'next/link';

type DocsProps = {
  params: {
    slug: string[];
  };
};

export default function Page({ params: { slug } }: DocsProps) {
  const [path1, path2 = ''] = slug;

  return (
    <div className="main">
      <h1 className="p-4 bg-violet-500 text-white text-xl">
        Document of {path1}/{path2}
      </h1>

      <div className="py-4 px-6">
        <h1 className="text-xl">
          Document of {path1}/{path2}
        </h1>
        <div className="py-4 text-start">
          {('Document of ' + path1 + '/' + path2 + ', ').repeat(20)}
        </div>
      </div>

      <hr className="bg-violet-100 h-1" />

      <div className="py-4 px-6">
        <h1 className="text-xl">Document List</h1>
        <div className="py-4 flex justify-start flex-wrap">
          <Link href="/docs/apple/lemon" className="text-link mx-3">
            apple/lemon
          </Link>
          <Link href="/docs/apple/melon" className="text-link mx-3">
            apple/melon
          </Link>
          <Link href="/docs/peach/grape" className="text-link mx-3">
            peach/grape
          </Link>
          <Link href="/docs/orange/banana" className="text-link mx-3">
            orange/banana
          </Link>
          <Link href="/docs/mango/peach" className="text-link mx-3">
            mango/peach
          </Link>
          <Link href="/docs/kiwi/orange" className="text-link mx-3">
            kiwi/orange
          </Link>
          <Link href="/docs/orange/lemon" className="text-link mx-3">
            orange/lemon
          </Link>
        </div>
      </div>
    </div>
  );
}
