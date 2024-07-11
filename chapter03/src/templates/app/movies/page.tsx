import { MovieHeader } from '@/components/movieHeader';

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-teal-500 text-xl text-white">Movie List</h1>
      <MovieHeader />
    </div>
  );
}
