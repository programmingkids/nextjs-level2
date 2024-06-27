import Link from "next/link";

export const NationHeader = function () {
  const nations = ["japan", "usa", "france", "italy"];

  return (
    <div className="main p-4 bg-rose-200">
      <div className="flex justify-start flex-wrap">
        {nations.map((e, i) => (
          <Link key={i} href={"/nations/" + e} className="text-link mx-3">
            {e.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};
