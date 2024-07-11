export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">Blog / Second</h1>
      <div className="py-4 px-6">
        <h1 className="text-xl">My Second Post</h1>
        <div className="py-4 text-start">{'second, '.repeat(100)}</div>
      </div>
    </div>
  );
}
