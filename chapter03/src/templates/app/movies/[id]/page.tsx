import { MovieHeader } from "@/components/movieHeader";
import Link from "next/link";

type MovieProps = {
  params: {
    id: string;
  };
};

export default function Page({ params: { id } }: MovieProps) {
  return (
    <div className="main">
      <h1 className="p-4 bg-teal-500 text-xl">Movie / {id}</h1>
      <MovieHeader />
      <div className="py-4 px-6">
        <h1 className="text-xl">Movie {id}</h1>
        <div className="py-4 text-start">
          {("Movie" + id + ", ").repeat(20)}
        </div>
      </div>

      <hr className="bg-teal-100 h-1" />

      <div className="py-4 px-6">
        <h1 className="text-xl">Comments of Movie {id}</h1>
        <div className="py-4 flex justify-start flex-wrap">
          {[...Array(5)].map((e, i) => (
            <Link
              key={i}
              href={"/movies/" + id + "/comments/" + (i + 1)}
              className="text-link mx-3"
            >
              {"Comment" + (i + 1)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
