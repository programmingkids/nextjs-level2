import Link from 'next/link';

export const ProductHeader = function () {
  return (
    <div className="main p-4 bg-amber-200">
      <div className="flex justify-start flex-wrap">
        {[...Array(10)].map((e, i) => (
          <Link
            key={i}
            href={'/products/' + (i + 1)}
            className="text-link mx-3"
          >
            {'Product' + (i + 1)}
          </Link>
        ))}
      </div>
    </div>
  );
};
