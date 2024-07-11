import Link from 'next/link';

export const MovieHeader = function () {
  return (
    <div className="main p-4 bg-teal-200">
      <div className="flex justify-start flex-wrap">
        {[...Array(10)].map((e, i) => (
          <Link key={i} href={'/movies/' + (i + 1)} className="text-link mx-3">
            {'Movie' + (i + 1)}
          </Link>
        ))}
      </div>
    </div>
  );
};
