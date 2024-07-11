export default function Home() {
  const fruits = ['apple', 'orange', 'banana', 'peach'];

  return (
    <div className="main">
      <h1 className="p-4 bg-sky-200 text-xl">Home</h1>
      <div className="p-4">
        {fruits.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </div>
    </div>
  );
}
